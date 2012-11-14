Public Class Character
    Inherits PhysObj

    Private _Name = "...", upDown = False
    Protected moveLimit = 8
    Public MoveLeft As Boolean, MoveRight As Boolean, MoveUp As Boolean, MoveDown As Boolean, Jump As Boolean

    Public Sub New()
        MyBase.New()
        xLimit = 20
        Accel = 1
        yLimit = 20
        flySpeed = 12
        jumpStr = 13
        Values.Add("name", "")
    End Sub

    Public Property Name() As String
        Get
            Return _Name
        End Get
        Set(ByVal value As String)
            _Name = value
            Values.Item("name") = value
        End Set
    End Property

    Public Overrides Sub fly()
        flying = Not flying
        ySpeed = ySpeed Mod flySpeed
        flyDir = If(ySpeed > 0, 1, -1)
    End Sub

    Public Sub doJump()
        If onFloor And Not isFlying Then
            Jump = True
        End If
    End Sub

    Public ReadOnly Property PositionString() As String
        Get
            Return x & " " & getSpeedX() & " " & y & " " & getSpeedY() & " " & direction
        End Get
    End Property

    Public ReadOnly Property ControlString() As String
        Get
            Return If(MoveLeft, 1, 0) & " " & If(MoveRight, 1, 0) & " " & If(MoveUp, 1, 0) & " " & If(MoveDown, 1, 0)
        End Get
    End Property

    Public Overrides Sub tick()
        If MoveUp And onFloor And Not upDown Then
            Jump = True
            upDown = True
        End If

        If upDown And Not MoveUp Then
            upDown = False
        End If

        ' X
        If (MoveLeft And Not MoveRight) Or (MoveRight And Not MoveLeft) Then
            direction = If(MoveLeft, -1, 1)
            xSpeed += direction * Accel
            xSpeed -= If(Math.Abs(xSpeed) > moveLimit, direction * Accel, 0)
        ElseIf Math.Abs(xSpeed) > Accel Then
            xSpeed -= direction * Accel
        ElseIf Accel <> 0 Then
            xSpeed = 0
        End If

        ' Y
        If Not isFlying Then
            If Jump Then
                ySpeed = -jumpStr
                Jump = False
            End If
        Else
            If (MoveUp And (Not MoveDown)) Or ((Not MoveUp) And MoveDown) Then
                flyDir = If(MoveUp, -1, 1)
                ySpeed += flyDir * Accel
            ElseIf Math.Abs(ySpeed) > Accel Then
                ySpeed -= flyDir * Accel
            ElseIf Accel <> 0 Then
                ySpeed = 0
            End If
        End If



        MyBase.tick() ' Perform inherited physics calculations
    End Sub

End Class
