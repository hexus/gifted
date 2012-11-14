Public Class Region

    Public Const DefaultSize As Integer = 64
    Private Const MaxSize As Integer = 128
    Private Size As Integer = DefaultSize
    Private MapArray(,) As Integer

#Region " Constructor "

    Public Sub New(Optional ByVal getSize As Integer = DefaultSize)
        If getSize > MaxSize Or getSize < 0 Then getSize = DefaultSize ' Constrain the size to make sure it's not too small/big
        ReDim MapArray(getSize - 1, getSize - 1) ' Create array of appropriate size
        ' Fill with 0
        For i As Integer = 0 To getSize - 1
            For j As Integer = 0 To getSize - 1
                MapArray(i, j) = 0
            Next
        Next
        Size = getSize
    End Sub

#End Region

#Region " Methods "

    Private Function ValidCoord(ByVal x As Integer, ByVal y As Integer) As Boolean
        Return (x >= 0 And y >= 0 And x <= Size And y <= Size)
    End Function


    Public Sub SetTile(ByVal x As Integer, ByVal y As Integer, ByVal Value As Integer)
        If ValidCoord(x, y) Then MapArray(x, y) = Value
    End Sub

    Public Function GetTile(ByVal x As Integer, ByVal y As Integer) As Integer
        If ValidCoord(x, y) Then Return MapArray(x, y)
    End Function

    Public Function GetString()
        Dim Str As String = ""
        For Y As Integer = 0 To Size - 1
            For X As Integer = 0 To Size - 1
                Str = Str & GetTile(X, Y)
                If Not (Y = Size - 1 And X = Size - 1) Then Str = Str & ","
            Next
        Next
        Return Str
    End Function

    Public Function GetSize() As Integer
        Return Size
    End Function

#End Region

End Class
