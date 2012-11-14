Imports Winsock_Orcas
Imports MySql.Data.MySqlClient

Module _Get

    ' Individual Socket Get (Using sender object from events)
    Public Function SocketGet(ByRef sender As Object) As Winsock
        Dim GID = Client.findGID(CType(sender, Winsock))
        Return Client.Item(GID)
    End Function

    ' Individual GUID Get
    Public Function gidGet(ByRef sender As Object) As Guid
        Dim GID = Client.findGID(CType(sender, Winsock))
        Return GID
    End Function

    ' SQL get
    ' Returns MySqlDataReader populated with the queried information
    Public Function sqlGet(ByRef SQL As String) As MySqlDataReader
        MySQL = New MySqlConnection(MySQLStr)
        Dim Command As New MySqlCommand
        Dim Data As MySqlDataReader
        Try
            MySQL.Open()
            Command.Connection = MySQL
            Command.CommandText = SQL
            Data = Command.ExecuteReader
            Return Data
        Catch ex As MySqlException
            WriteGrey("MySQL Error: " & ex.Message)
        End Try
        Return Nothing
    End Function

    ' SQL set
    ' Returns the number of rows affected by the nonquery
    Public Function sqlSet(ByRef SQL As String) As Integer
        MySQL = New MySqlConnection(MySQLStr)
        Dim Command As New MySqlCommand(SQL, MySQL)
        Try
            MySQL.Open()
            Dim Affected = Command.ExecuteNonQuery
            MySQL.Close()
            Return Affected
        Catch ex As MySqlException
            WriteGrey("MySQL Error: " & ex.Message)
        End Try
        Return Nothing
    End Function

End Module
