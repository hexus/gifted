Imports MySql.Data.MySqlClient
Imports System.Threading

Public Class RoomWorld
    Inherits Room

#Region " Properties "

    Public Shared ReadOnly solidarr() As Integer = {3, 4, 5, 6, 7, 8, 9, 10}
    Protected TickThread As Thread
    Protected TickFramerate As Integer
    Protected TickSpeed As Double
    Protected TickCount As Integer = 0

    Private Const DefaultSize As Integer = 4 ' Default world size
    Private Const MaxSize As Integer = 64 ' Max world size
    Private Const DefaultRegionSize As Integer = Region.DefaultSize ' Default size of regions in this world

    Public ReadOnly WorldSize As Integer = DefaultSize ' World size
    Public Regions(,) As Region ' World map of regions (x,y)
    Public ReadOnly RegionSize As Integer = DefaultRegionSize ' Size of regions in this world
    Public ReadOnly TileSize As Integer = 40

    Private Spawn(2) As Integer ' Spawn location (0) = x, (1) = y

    Private ItemsInside As ArrayList
    Public ItemLock As New Object

#End Region

#Region " Constructor "

    Public Sub New(ByVal getID As Integer, ByVal getName As String, Optional ByVal getSize As Integer = DefaultSize, Optional ByVal getRegionSize As Integer = DefaultRegionSize)
        MyBase.New(getID, getName)
        ItemsInside = New ArrayList
        Dim Result As MySqlDataReader = sqlGet("SELECT * FROM worlds WHERE name='" & getName & "'")
        If Result.HasRows Then ' Fetch from database
            WriteGrey("Reading world from database...", 1)
            Result.Read()
            WorldSize = Result("size")
            Spawn(0) = Result("spawnX")
            Spawn(1) = Result("spawnY")
            Dim MapFlat() As String = Result("map").Split(",")
            Result.Close()

            ReDim Regions(WorldSize, WorldSize)
            ResetRegions()
            For i = 0 To MapFlat.Length - 1
                Dim RegionX = Math.Floor(i / (RegionSize * RegionSize)) Mod WorldSize
                Dim RegionY = Math.Floor(i / (RegionSize * RegionSize * WorldSize)) Mod WorldSize
                Dim CellX = i Mod RegionSize
                Dim CellY = Math.Floor(i / RegionSize) Mod RegionSize
                Regions(RegionX, RegionY).SetTile(CellX, CellY, MapFlat(i))
                'WriteGrey(RegionX & "," & RegionY & ":" & CellX & "," & CellY)
            Next
            WriteGrey(" Done.")
        Else ' New world
            If getSize < 0 Or getSize > MaxSize Then getSize = DefaultSize
            ReDim Regions(getSize, getSize)
            WorldSize = getSize
            ResetRegions()
            GenerateWorld()
            SaveWorld()
        End If

        Framerate = 32
    End Sub

#End Region

#Region " Overrides "

    Public Overrides Sub JoinUser(ByRef jUser As User)
        jUser.x = Spawn(0) * TileSize
        jUser.y = Spawn(1) * TileSize
        jUser.SetMap(Me)
        MyBase.JoinUser(jUser)
        jUser.Spawn()
    End Sub

#End Region

#Region " Methods "

    Public Property Framerate() As Integer
        Get
            Return TickFramerate
        End Get
        Set(ByVal value As Integer)
            TickFramerate = value
            TickSpeed = (1 / value) * 1000
        End Set
    End Property

    Public Property SpawnX() As Integer
        Get
            Return Spawn(0)
        End Get
        Set(ByVal val As Integer)
            Spawn(0) = val Mod WorldSize * RegionSize * TileSize
        End Set
    End Property

    Public Property SpawnY() As Integer
        Get
            Return Spawn(1)
        End Get
        Set(ByVal val As Integer)
            Spawn(1) = val Mod WorldSize * RegionSize * TileSize
        End Set
    End Property

    Public Sub StartTicking()
        TickThread = New Thread(AddressOf WorldTick)
        TickThread.Start()
    End Sub

    Public Sub StopTicking()
        TickThread.Abort()
    End Sub

    Public Sub WorldTick()
        Do
            SyncLock LockObj
                For Each U As User In UsersInside
                    U.tick()
                    If TickCount Mod U.StreamSpeed = 0 Then
                        Dim StreamStr = U.SendString
                        If Not StreamStr = U.LastStream Then
                            SendToAll(StreamStr)
                            U.LastStream = StreamStr
                        End If
                    End If
                Next
            End SyncLock
            SyncLock ItemLock
                For Each I As Item In ItemsInside
                    I.tick()
                    If TickCount Mod 5 = 0 Then
                        Dim StreamStr = "/itemMove " & I.GetID & " " & I.x & " " & I.getSpeedX & " " & I.y & " " & I.getSpeedY
                        If Not StreamStr = I.LastStream Then
                            SendToAll(StreamStr)
                            I.LastStream = StreamStr
                        End If
                    End If
                Next
            End SyncLock

            If TickCount Mod TickFramerate * 60 = 0 Then
                WriteGrey("World timer: " & (TickCount * TickSpeed) / 1000 & "s")
            End If
            TickCount = TickCount + 1
            Thread.Sleep(TickSpeed)
        Loop
    End Sub

    Public Function ConvertCords(ByVal xCord As Integer, ByVal yCord As Integer, Optional ByVal tiles As Boolean = False) As Object
        Dim xInd, yInd As Integer
        If Not tiles Then
            xInd = Math.Floor(xCord / TileSize)
            yInd = Math.Floor(yCord / TileSize)
        Else
            xInd = xCord
            yInd = yCord
        End If

        Dim rx, ry, cx, cy As Integer

        If xInd < 0 Then
            rx = WorldSize + Math.Floor(xInd / RegionSize) Mod WorldSize
            cx = RegionSize + xInd Mod RegionSize
        Else
            rx = Math.Floor(xInd / RegionSize) Mod WorldSize
            cx = xInd Mod RegionSize
        End If

        If yInd < 0 Then
            ry = 0
            cy = 0
        Else
            ry = Math.Floor(yInd / RegionSize) Mod WorldSize
            cy = yInd Mod RegionSize
        End If

        Dim rObj As New Dictionary(Of String, Integer)
        rObj.Add("rx", rx)
        rObj.Add("ry", ry)
        rObj.Add("x", cx)
        rObj.Add("y", cy)

        Return rObj

    End Function


    Public Sub ChangeTile(ByVal rx As Integer, ByVal ry As Integer, ByVal x As Integer, ByVal y As Integer, ByVal Value As Integer)
        Regions(rx, ry).SetTile(x, y, Value)
        SendToAll("/t " & rx & " " & ry & " " & x & " " & y & " " & Value)
    End Sub

    Private Sub ResetRegions()
        ' Create empty regions
        For Y As Integer = 0 To WorldSize - 1
            For X As Integer = 0 To WorldSize - 1
                Regions(X, Y) = New Region(RegionSize)
                ' GenerateRegion(i, j)
            Next
        Next
    End Sub

    Public Sub SaveWorld()
        sqlSet("REPLACE INTO worlds (name,size,map,spawnX,spawnY) VALUES('" & Name & "','" & WorldSize & "','" & GetString() & "','" & Spawn(0) & "','" & Spawn(1) & "')")
    End Sub

    Public Function GetString() As String
        Dim Str = ""
        For Y As Integer = 0 To WorldSize - 1
            For X As Integer = 0 To WorldSize - 1
                Str = Str & Regions(X, Y).GetString()
                If Not (X = WorldSize - 1 And Y = WorldSize - 1) Then Str = Str & ","
            Next
        Next
        Return Str
    End Function

    Private Sub GenerateWorld()
        Dim FullWidth As Integer = WorldSize * RegionSize ' World width in tiles
        Dim Heights(FullWidth) As Integer ' Array of heights for every column of tiles in the world
        Dim Seed As Integer = Now.Millisecond * Now.Second * Now.Minute ' Semirandom seed for random number generator
        Dim SampleSize As Integer = 20 ' Radius to sample for smoothing
        Dim Smooth As Integer = 3 ' How many times to smooth
        Dim Random As New Random(Seed) ' Random object

        WriteGrey("Generating world...", 1)

        ' Randomise heights
        For i = 0 To FullWidth - 1
            Heights(i) = Random.Next(FullWidth / 2 - FullWidth / 6, FullWidth / 2 + FullWidth / 6)
        Next

        ' Smooth heights
        For i = 1 To Smooth
            Dim NewHeights(FullWidth) As Integer
            For j = 0 To FullWidth - 1
                Dim Sum As Integer = 0
                For k = j - SampleSize / 2 To j + SampleSize / 2
                    Dim index As Integer = k Mod FullWidth
                    If index < 0 Then index = FullWidth + index
                    Sum = Sum + Heights(index)
                Next
                NewHeights(j) = Sum / SampleSize
            Next
            Heights = NewHeights
        Next

        Spawn(0) = Math.Round(FullWidth * 0.5)
        Spawn(1) = Heights.Length - Heights(Math.Round(Heights.Length * 0.5)) - 2
        'Spawn(1) = 1

        ' Store in region arrays
        For y = 0 To FullWidth - 1
            For x = 0 To FullWidth - 1
                Dim RegX As Integer = Math.Floor(x / RegionSize) Mod WorldSize
                Dim RegY As Integer = Math.Floor(y / RegionSize) Mod WorldSize
                Dim TileX As Integer = x Mod RegionSize
                Dim TileY As Integer = y Mod RegionSize
                Dim Region = Regions(RegX, RegY)
                If y >= FullWidth - Heights(x) Then
                    Region.SetTile(TileX, TileY, 10)
                End If
            Next
        Next

        WriteGrey(" Done.")

    End Sub

    Public Sub PrintWorld()
        ' Echo each region
        For ry = 0 To WorldSize - 1
            For rx = 0 To WorldSize - 1
                WriteGrey("Region: " & rx & " " & ry)
                For y = 0 To RegionSize - 1
                    For x = 0 To RegionSize - 1
                        WriteBlack(Regions(rx, ry).GetTile(x, y), 1)
                    Next
                    WriteBlack("")
                Next
                WriteGrey("")
                'Console.ReadLine()
            Next
        Next
    End Sub

    ' Deprecated - generate the entire world at once.
    Private Sub GenerateRegion(ByVal rX As Integer, ByVal rY As Integer)
        ' Terrain Generation
        Dim gRegion As Region = Regions(rX, rY) ' Region to be generated
        Dim NewBlock As Boolean ' Whether to make a new block
        Dim RandomObj As New Random() ' Randomiser
        Dim Random As Double ' Chance
        Dim RandomBlock As Integer = 2 ' Random Block

        ' Pass 1
        For y As Integer = 0 To RegionSize - 1
            For x As Integer = 0 To RegionSize - 1
                Random = RandomObj.NextDouble()
                If y < 32 Then
                    If y > 16 Then
                        If Random < 0.005 Then
                            NewBlock = True
                        Else
                            NewBlock = False
                        End If
                    End If
                Else
                    If Random < 0.6 Then
                        NewBlock = True
                    Else
                        NewBlock = False
                    End If
                End If
                If NewBlock Then
                    Random = RandomObj.NextDouble()
                    If Random < 0.05 Then
                        RandomBlock = RandomObj.Next(2, 9)
                        gRegion.SetTile(x, y, RandomBlock)
                    Else
                        gRegion.SetTile(x, y, 6)
                    End If
                End If
            Next
        Next
        ' End Pass 1

        ' Pass 2
        For y As Integer = 0 To RegionSize - 1
            For x As Integer = 0 To RegionSize - 1
                If gRegion.GetTile(x, y - 1) = 0 And gRegion.GetTile(x, y) > 0 Then
                    gRegion.SetTile(x, y, 5)
                End If
            Next
        Next
        ' End Pass 2
    End Sub

    Public Sub AddItem(ByVal i As Item)
        SyncLock ItemLock
            i.SetID(ItemsInside.Add(i))
        End SyncLock
        i.SetMap(Me)
        SendToAll("/itemCreate " & i.GetID & " " & i.Frame & " " & i.x & " " & i.getSpeedX() & " " & i.y & " " & i.getSpeedY())
    End Sub

    Public Sub RemoveItem(ByVal i As Item) ' Remove by reference
        SyncLock ItemLock
            Dim Index = ItemsInside.IndexOf(i)
            If Index > -1 Then
                RemoveItem(Index)
            End If
        End SyncLock
    End Sub

    Public Sub RemoveItem(ByVal n As Integer) ' Remove by index
        If n >= 0 And n < ItemsInside.Count Then
            SyncLock ItemLock
                ItemsInside.RemoveAt(n)
            End SyncLock
            SendToAll("/itemRemove " & n)
        End If
    End Sub

    Public Function GetNearestItem(ByVal X As Integer, ByVal Y As Integer, Optional ByVal MaxDistance As Integer = 0) As Item
        Dim ShortestDistance As Integer = -1
        Dim NearestItem As Item = Nothing
        SyncLock ItemLock
            For Each I As Item In ItemsInside
                Dim Distance = Math.Sqrt(Math.Pow(I.x - X, 2) + Math.Pow(I.y - Y, 2))
                If ShortestDistance = -1 Or Distance < ShortestDistance Then
                    If Distance <= MaxDistance Or MaxDistance = 0 Then
                        NearestItem = I
                    End If
                End If
            Next
        End SyncLock
        Return NearestItem
    End Function

#End Region


End Class
