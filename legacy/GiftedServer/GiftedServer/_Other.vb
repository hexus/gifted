Imports MySql.Data.MySqlClient

Module _Other ' Misc functions

    ' Deprecated
    Public Sub UserChangeStatus(ByRef GID As Guid, ByVal ChangeTo As Integer)
        Dim User = Users.gItem(GID)
        Try
            User.Status = ChangeTo
        Catch
            WriteBlack("User object" & GID.ToString & "does not exist.")
        End Try
        Dim SQL As String = "UPDATE account SET status='" & ChangeTo & "' WHERE id='" & User.aID & "'"
        MySQL = New MySqlConnection(MySQLStr)
        Dim Command As New MySqlCommand(SQL, MySQL)
        MySQL.Open()
        Dim Affected = Command.ExecuteNonQuery
        MySQL.Close()
        If Affected > 0 Then
            Debug.WriteLine("'" & User.Name & "' logged in.")
        Else
            Debug.WriteLine("'" & User.Name & "' database status update failure.")
        End If
    End Sub

    Public Function ForceLength(ByVal Str As String, ByVal Length As Integer) As String
        Dim StrLen = Str.Length
        Dim LenAdd = Length - Str.Length
        If LenAdd > 0 Then
            For i = 1 To LenAdd
                Str = " " & Str
            Next
        End If
        Dim ForcedStr = Str
        Return ForcedStr
    End Function

    Public Sub GlobalPing()
        For Each U As User In Users.Values
            If U.Status = 1 Then
                U.PingSend()
                ' Send(U.gID, "/heartbeat")
            End If
        Next
    End Sub

End Module
