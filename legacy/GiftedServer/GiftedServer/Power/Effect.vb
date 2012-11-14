Public Class Effect

    Public Enum DurationTypes
        Instant = 0
        Temporary = 1
        Permanent = 2
    End Enum

    Public Enum Types
        Health = 0
        Defense = 1
        Speed = 2
        ForceX = 3
        ForceY = 4
        Visibility = 5
    End Enum

    Public Enum AmountTypes
        Modifier = 0
        Multiplier = 1
        Setter = 2
    End Enum

    Public DurationType As DurationTypes
    Public Duration As Integer = 1
    Public DurationCount As Integer = Duration
    Public Type As Types
    Public AmountType As AmountTypes
    Public Amount As Integer

    Public Sub New(ByVal d As DurationTypes, ByVal t As Types, ByVal v As Integer, ByVal a As AmountTypes)
        DurationType = d
        Type = t
        Amount = v
        AmountType = a
    End Sub

End Class
