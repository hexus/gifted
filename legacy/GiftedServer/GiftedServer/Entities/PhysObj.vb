Public Class PhysObj

    ' Makeups
    Protected Xval, Yval, hitboxWidth, hitboxHeight As Integer

    ' Internal properties
    Protected xSpeed = 0, xLimit = 20, xOffset = 0, ySpeed = 0, yLimit = 20, Accel = 1, _direction = 1, jumpStr = 15, isFlying = False, flySpeed = 10, flyDir = -1
    Protected effects As List(Of Effect) = New List(Of Effect), _
            modifiers As Hashtable = New Hashtable(), _
            multipliers As Hashtable = New Hashtable()

    ' Static properties
    Protected Shared gravity = 1, gravSpeed = 1
    Protected gravCount = 0

    ' Public
    Public onFloor = False
    Public Values As Hashtable = New Hashtable()
    Public LastStream As String

    ' References
    Protected _map As RoomWorld ' The world this object is simulating inside

    Public Sub New()
        Xval = 0
        Yval = 0
        hitboxWidth = 15
        hitboxHeight = 15
        Values.Add("flying", False)
    End Sub

    Public Sub SetMap(ByRef Map As RoomWorld)
        _map = Map
    End Sub

    Public Property offset() As Integer
        Get
            Return xOffset
        End Get
        Set(ByVal value As Integer)
            xOffset = value
        End Set
    End Property

    Public Property x() As Integer ' Looping
        Get
            Return Xval - xOffset
        End Get
        Set(ByVal value As Integer)
            Xval = value + xOffset
        End Set
    End Property

    Public Property y() As Integer
        Get
            Return Yval
        End Get
        Set(ByVal value As Integer)
            Yval = value
        End Set
    End Property

    Public Property direction() As Integer
        Get
            Return _direction
        End Get
        Set(ByVal value As Integer)
            _direction = value
        End Set
    End Property

    Public Property flying() As Boolean
        Get
            Return isFlying
        End Get
        Set(ByVal value As Boolean)
            isFlying = value
            Values.Item("flying") = value
        End Set
    End Property

    Public Overridable Sub fly()
        isFlying = Not isFlying
    End Sub

    Public Function getSpeedX()
        Return xSpeed
    End Function

    Public Function getSpeedY()
        Return ySpeed
    End Function

    Public Sub setSpeedX(ByVal n As Integer)
        xSpeed = n
    End Sub

    Public Sub setSpeedY(ByVal n As Integer)
        ySpeed = n
    End Sub

    Public Overridable Sub Spawn(Optional ByVal sX As Integer = Nothing, Optional ByVal sY As Integer = Nothing)
        If Not (sX And sY) And Not _map Is Nothing Then
            x = _map.SpawnX * _map.TileSize
            y = _map.SpawnY * _map.TileSize
        Else
            'If Not sX Then sX = 0
            'If Not sY Then sY = 0
            x = sX
            y = sY
        End If
    End Sub

    Public Sub MoveTo(ByVal xCord As Integer, ByVal yCord As Integer, ByVal direc As Integer)
        x = xCord
        y = yCord
        If Not direc = 0 Then setDir(direc)
    End Sub

    Public Overridable Sub setDir(ByVal dir As Integer)
        If dir > 0 Then
            direction = 1
        ElseIf dir < 0 Then
            direction = -1
        End If
    End Sub

    Protected Function c2(ByVal v As Integer)
        Return Math.Floor(v / _map.TileSize) * _map.TileSize
    End Function

    Protected Function chkSolid(ByVal xCord As Integer, ByVal yCord As Integer) As Boolean
        Dim cords = _map.ConvertCords(xCord, yCord)
        Dim cx = cords.Item("x"), cy = cords.Item("y"), rx = cords.Item("rx"), ry = cords.Item("ry")

        If (ry = 0 And cy <= 0) Or (ry > _map.WorldSize And cy >= _map.RegionSize) Then
            Return True
        End If

        If (cx >= 0 And cy >= 0 And cx < _map.RegionSize And cy < _map.RegionSize) And (ry >= 0 And ry < _map.WorldSize) Then
            Dim tile = _map.Regions(rx, ry).GetTile(cx, cy)
            If Not tile = Nothing Then
                If Array.IndexOf(RoomWorld.solidarr, tile) > -1 Then
                    Return True
                Else
                    Return False
                End If
            End If
        Else
            Return True
        End If

    End Function

    Public Overridable Sub tick()
        If Not _map Is Nothing Then ' Safe for VB
            Dim Cx = x, Cy = y
            Dim Ty = Math.Round(y - (hitboxHeight * 0.5))
            Dim By = Math.Round(y + (hitboxHeight * 0.5))
            Dim Lx = Math.Round(x - (hitboxWidth * 0.5))
            Dim Rx = Math.Round(x + (hitboxWidth * 0.5))

            Dim pTy, pBy As Integer
            If ySpeed <> 0 Then
                pTy = Ty + ySpeed
                pBy = By + ySpeed
            Else
                pTy = Ty - jumpStr
                pBy = By + Accel
                If isFlying Then
                    pTy = Ty - Accel
                    pBy = By + Accel
                End If
            End If

            Dim pLx, pRx As Integer
            If xSpeed <> 0 Then
                pLx = Lx + xSpeed
                pRx = Rx + xSpeed
            Else
                pLx = Lx + (Accel * direction)
                pRx = Rx + (Accel * direction)
            End If

            Dim pDx As Integer
            Dim cLx = Lx, cRx = Rx
            If xSpeed < 0 Then
                direction = -1
                cLx = pLx
                cRx = pLx + hitboxWidth
                pDx = pLx
            ElseIf xSpeed > 0 Then
                direction = 1
                cLx = pRx - hitboxWidth
                cRx = pRx
                pDx = pRx
            End If

            Dim hh = Math.Floor(hitboxHeight * 0.5)
            Dim hw = Math.Floor(hitboxWidth * 0.5)
            Dim qh = Math.Floor(hitboxHeight * 0.25)

            ' Y
            If Not chkSolid(Lx, pBy) And Not chkSolid(Rx, pBy) And Not chkSolid(Cx, pBy) Then
                onFloor = False
                If (ySpeed + PhysObj.gravity) <= yLimit And (gravCount >= PhysObj.gravSpeed) Then
                    If Not isFlying Then
                        ySpeed += gravity
                        gravCount = 0
                    End If
                Else
                    gravCount += 1
                End If

                If ySpeed <= 0 Then
                    If Not (chkSolid(Lx, pTy) And chkSolid(Rx, pTy)) And Not chkSolid(Cx, pTy) Then
                        If Not chkSolid(Lx, Ty) And chkSolid(Rx, Ty) Then x = Math.Floor(c2(Rx) - hw) - 1
                        If chkSolid(Lx, Ty) And Not chkSolid(Rx, Ty) Then x = Math.Floor(c2(Lx) + _map.TileSize + hw)
                    Else
                        ySpeed = 0
                        y = Math.Floor(c2(pTy) + _map.TileSize + hh)
                    End If
                End If
            Else ' On surface
                onFloor = True
                If ySpeed >= 0 Or (isFlying And ySpeed < 0) Then
                    If (chkSolid(cLx, pBy) Or chkSolid(cRx, pBy)) Or chkSolid(Cx, pBy) Then
                        y = Math.Floor(c2(pBy) - hh)
                    End If
                End If
                If (Not isFlying And Not ySpeed = 0) Or (isFlying And ySpeed > 0) Then
                    ySpeed = 0
                End If
                If ySpeed < 0 Then
                    If (chkSolid(Lx, pTy) And chkSolid(Rx, pTy)) And chkSolid(Cx, pTy) Then
                        ySpeed = 0
                    End If
                End If
            End If

            ' X
            If Not xSpeed = 0 Then
                Dim doMove = False
                If Not chkSolid(pDx, pTy) And Not chkSolid(pDx, pBy) And Not chkSolid(pDx, Cy) And Not ((chkSolid(pDx, Cy + qh)) Or (chkSolid(pDx, Cy - qh))) Then
                    doMove = True
                Else
                    If Not chkSolid(pDx, Cy) Then
                        If Not ((chkSolid(pDx, pBy) And ySpeed > 0) Or (chkSolid(pDx, Ty) And ySpeed < 0) Or (chkSolid(pDx, Ty) And ySpeed = 0) Or chkSolid(pDx, Cy + qh) Or chkSolid(pDx, Cy - qh)) Then
                            doMove = True
                        End If
                    End If
                End If
                If Not doMove Then
                    Dim c = c2(pDx)
                    If xSpeed < 0 Then
                        c = c + hw + _map.TileSize
                    ElseIf xSpeed > 0 Then
                        c = c - hw - 1
                    End If
                    x = Math.Round(c)
                    xSpeed = 0
                End If
            End If

            modifiers = New Hashtable()
            For Each ef As Effect In effects
                Dim k = Nothing ' Key of effect
                If ef.Duration > 1 Then
                    Select Case ef.Type
                        Case Effect.Types.Speed
                            k = "xLim"
                        Case Effect.Types.ForceX
                            k = "xForce"
                        Case Effect.Types.ForceY
                            k = "yForce"
                    End Select
                    If k Then
                        If Not modifiers.ContainsKey(k) Then modifiers.Add(k, 0)
                        modifiers.Item(k) += ef.Amount
                        ef.DurationCount -= 1
                    End If
                End If
                If ef.DurationCount <= 1 Then
                    effects.Remove(ef)
                End If
            Next

            ' Enforce limits
            Dim xLim = If(isFlying, flySpeed, xLimit)
            xLim += If(modifiers.ContainsKey("xLim"), modifiers.Item("xLim"), 0)
            Dim yLim = If(isFlying, flySpeed, yLimit)
            yLim += If(modifiers.ContainsKey("yLim"), modifiers.Item("yLim"), 0)
            If Math.Abs(xSpeed) > xLim Then xSpeed = If(xSpeed > 0, xLim, -xLim)
            If Math.Abs(ySpeed) > yLim Then ySpeed = If(ySpeed > 0, yLim, -yLim)

            ' Apply force
            xSpeed += If(modifiers.ContainsKey("xForce"), modifiers.Item("xForce"), 0)
            ySpeed += If(modifiers.ContainsKey("yForce"), modifiers.Item("yForce"), 0)

            ' Apply
            x += xSpeed
            y += ySpeed
        End If
    End Sub

End Class
