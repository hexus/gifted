Public Class Skill

    Public Enum Types
        Self = 0
        Melee = 1
        Projectile = 2
        Target = 3
        Area = 4
    End Enum

    Private Name As String = "Skill"
    Private Type As Integer = Types.Self
    Private CoolDown As Integer = 0 ' In steps
    Private PowerRequired As Power.Type ' Power
    Private hasEffects As List(Of Effect) = New List(Of Effect) ' Effect skill triggers
    Private Animation As Integer ' Animation skill triggers

    Public Sub New(ByVal name As String, ByVal type As Types, Optional ByVal pReq As Power.Type = Power.Type.Natural)
        Me.Name = name
        Me.Type = type
        Me.PowerRequired = pReq
    End Sub

    Public Sub addEffect(ByVal e As Effect)
        hasEffects.Add(e)
    End Sub

    Public Function getEffects() As List(Of Effect)
        Return hasEffects
    End Function

End Class
