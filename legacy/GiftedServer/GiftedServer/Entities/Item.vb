Public Class Item
    Inherits PhysObj

    Public Enum Type
        Weapon = 0
    End Enum

    Private ID As Integer
    Private ItemType As Type
    Private ItemFrame As Integer

    Public Property Frame() As Integer
        Get
            Return ItemFrame
        End Get
        Set(ByVal value As Integer)
            ItemFrame = value
        End Set
    End Property

    Public Function GetID()
        Return ID
    End Function

    Public Sub SetID(ByVal n As Integer)
        ID = n
    End Sub

    Public Function TypeInt()
        Return ItemType
    End Function

    Public Overrides Sub tick()
        If Math.Abs(xSpeed) > Accel + 1 Then
            xSpeed -= direction * Accel
        Else
            xSpeed = 0
        End If
        MyBase.tick()
    End Sub

    Public Sub New(Optional ByVal T As Type = Type.Weapon, Optional ByVal F As Integer = 0)
        ItemType = T
        ItemFrame = F
        Accel = 1
    End Sub

End Class
