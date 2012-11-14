Imports System.Timers
Imports MySql.Data.MySqlClient
Imports System.Net.NetworkInformation

Public Class User
    Inherits Character

#Region " Properties "

    Public Guest As Boolean = False
    Public Valid As Boolean

    Public IP As String
    Public Username As String

    Public ID As Integer ' Runtime incremental
    Public gID As Guid ' Object unique identifier
    Public aID As Integer ' Account ID
    Public aPermission As Integer ' Account permission level
    Public cID As Integer ' Character ID

    Public Status As Integer = 0
    Public Room As Room

    Public StreamSpeed As Integer = 2

    Private PingSent As Date ' Time the last ping was sent and 
    Private PongGot As Date ' last pong was received, for calculating difference
    Public Ping As String = "0" ' to get ping :)"

#End Region

#Region " Value Interfaces "

    Public Property Outfit() As String
        Get
            Return Values.Item("outfit")
        End Get
        Set(ByVal value As String)
            Values.Item("outfit") = value
        End Set
    End Property

    Public ReadOnly Property isAiming() As Boolean
        Get
            Return isAimingLeft Or isAimingRight
        End Get
    End Property

    Public Property isAimingLeft() As Boolean
        Get
            Return Values.Item("aimingl")
        End Get
        Set(ByVal value As Boolean)
            Values.Item("aimingl") = value
        End Set
    End Property

    Public Property isAimingRight() As Boolean
        Get
            Return Values.Item("aimingr")
        End Get
        Set(ByVal value As Boolean)
            Values.Item("aimingr") = value
        End Set
    End Property

    Public Property Angle() As Integer
        Get
            Return Values.Item("angle")
        End Get
        Set(ByVal value As Integer)
            Values.Item("angle") = value
        End Set
    End Property

    Public Property AimDir() As Integer
        Get
            Return Values.Item("aimdir")
        End Get
        Set(ByVal value As Integer)
            Values.Item("aimdir") = value
        End Set
    End Property

    Public ReadOnly Property AimingString() As String
        Get
            Return Join(New Object() {Angle, AimDir, If(isAimingLeft, 1, 0), If(isAimingRight, 1, 0)}, " ")
        End Get
    End Property

    Public ReadOnly Property SendString() As String
        Get
            Return Join(New Object() {"/m", ID, PositionString, ControlString, AimingString}, " ")
        End Get
    End Property

#End Region

#Region " Constructor "

    Public Sub New(Optional ByVal getName As String = Nothing)
        MyBase.New()
        Trim(getName)
        If Not getName Is Nothing Then
            Name = getName
        End If
        Values.Add("outfit", "")
        Values.Add("iteml", 0)
        Values.Add("itemr", 0)
        Values.Add("aimingl", False)
        Values.Add("aimingr", False)
        Values.Add("angle", 0)
        hitboxWidth = 18
        hitboxHeight = 60
    End Sub

#End Region

#Region " Methods "

    Public Sub SetValue(ByVal Key As String, ByVal Value As Object)
        If Not Values.Item(Key) Then
            Values.Add(Key, Value)
        Else
            Values.Item(Key) = Value
        End If
    End Sub

    Public Sub PingSend()
        Send("/ping")
        PingSent = Now ' Time of request
    End Sub

    Public Sub Pong()
        PongGot = Now ' Time of response
        Ping = PongGot.Subtract(PingSent).TotalMilliseconds.ToString("0") ' Difference between request and response
    End Sub

    ' Send a string to this user
    Public Sub Send(ByVal Str As String)
        _Send.Send(gID, Str)
    End Sub

    ' Send this user an update of their own information
    Public Sub SendInfo()
        Send("/id " & ID)
        Send("/uv " & ID & " outfit " & Values.Item("outfit"))
    End Sub

    ' Send a user to this user
    Public Sub SendUser(ByRef sUser As User, Optional ByVal Spawn As Boolean = True)
        If Not TypeOf Room Is RoomWorld Then
            Send("/uc " & sUser.ID & " " & sUser.Name)
        Else
            If Not sUser.ID = ID Then
                Send("/uc " & sUser.ID)
            End If
            For Each Key As Object In Values.Keys ' Send values (yay dynamic)
                Send("/uv " & sUser.ID & " " & Key & " " & sUser.Values.Item(Key))
            Next

            ' Spawn
            If Spawn Then
                Send("/us " & sUser.ID)
            End If
            Send("/mt " & sUser.ID & " " & sUser.X & " " & sUser.Y & " " & sUser.Direction)

        End If
    End Sub

    Public Sub SendWorld()
        Send(Join(New Object() {"/ws", World.Name, World.WorldSize, World.RegionSize, World.TileSize, World.SpawnX, World.SpawnY}))
        Send("/wd " & World.GetString())
        'For y As Integer = 0 To World.WorldSize - 1
        '    For x As Integer = 0 To World.WorldSize - 1
        '        Dim Str = World.Regions(x, y).GetString()
        '        Send("/wr " & x & " " & y & " " & Str)
        '    Next
        'Next
    End Sub

    ' Spawn this user
    Public Overrides Sub Spawn(Optional ByVal sX As Integer = Nothing, Optional ByVal sY As Integer = Nothing)
        If TypeOf Room Is RoomWorld Then
            MyBase.Spawn(sX, sY)
            Room.SendToAll("/us " & ID, ID)
        End If
    End Sub

    ' Change object and database online-status for this user
    Public Sub ChangeStatus(ByVal ChangeTo As Integer)
        Dim Current As Integer = Status ' Temporary storage of previous value
        Status = ChangeTo ' Change local variable
        If Not Guest Then
            If Not Current = ChangeTo Then ' Check whether it is worth updating the database
                Dim Affected As Integer = sqlSet("UPDATE characters SET online='" & ChangeTo & "' WHERE id='" & cID & "'")
                If Affected > 0 Then
                    If ChangeTo = 1 Then
                        WriteGrey("'", 1)
                        WriteBlack(Name, 1)
                        WriteGrey("' logged in.")
                    Else
                        WriteGrey("'", 1)
                        WriteBlack(Name, 1)
                        WriteGrey("' logged out.")
                    End If
                Else
                    WriteBlack("'" & Name & "' database status update failure.")
                End If
            End If
        Else ' Guest status change
            If ChangeTo = 1 Then
                WriteGrey("Guest '", 1)
                WriteBlack(Name, 1)
                WriteGrey("' logged in.")
            Else
                WriteGrey("Guest '", 1)
                WriteBlack(Name, 1)
                WriteGrey("' logged out.")
            End If
        End If
    End Sub

    ' Change user outfit 
    Public Sub ChangeOutfit(ByVal gOutfit As String)
        Outfit = gOutfit
        If Not Guest Then
            Dim Affected As Integer = sqlSet("UPDATE characters SET outfit='" & gOutfit & "' WHERE id='" & cID & "'")
            If Affected > 0 Then
                WriteBlack("'" & Name & "' updated their outfit.")
            End If
        Else
            WriteBlack("'" & Name & "' updated their guest outfit.")
        End If
        If Not Room Is Lobby Then
            Room.SendToAll("/uv " & ID & " outfit " & Outfit)
        End If
    End Sub

    Public Sub PickupWeapon(Optional ByVal Side As String = "r")
        If TypeOf Room Is RoomWorld Then
            Dim R = CType(Room, RoomWorld)
            If Values.Item("item" & Side) <= 1 Then
                Dim NearestItem = R.GetNearestItem(x, y, 50)
                If Not NearestItem Is Nothing Then
                    If NearestItem.TypeInt = Item.Type.Weapon Then
                        R.RemoveItem(NearestItem)
                        Values.Item("item" & Side) = NearestItem.Frame
                        SendToAll("/itemGive " & ID & " " & Side & " " & NearestItem.Frame, Room.ID)
                    End If
                Else
                    Send("/sm No item near enough to pick up")
                End If
            Else
                Send("/sm Already carrying an item in that hand")
            End If
        End If
    End Sub

    Public Sub DropWeapon(Optional ByVal Side As String = "r")
        If TypeOf Room Is RoomWorld Then
            Dim R = CType(Room, RoomWorld)
            If Values.Item("item" & Side) > 1 Then
                Dim i = New Item(Item.Type.Weapon, Values.Item("item" & Side))
                Values.Item("item" & Side) = 1
                i.x = x
                i.y = y
                i.setSpeedX(Math.Round(xSpeed * 1.5))
                i.setSpeedY(Math.Round(ySpeed * 1.5))
                R.AddItem(i)
                SendToAll("/itemDrop " & ID & " " & Side, Room.ID)
            End If
        End If
    End Sub

#End Region

End Class
