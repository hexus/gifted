Imports Winsock_Orcas

Module _ConsoleCommands

    Public Sub WriteGrey(ByVal Str As String, Optional ByVal NoLine As Integer = 0)
        Console.ForegroundColor = System.ConsoleColor.DarkGray
        If NoLine = 1 Then
            Console.Write(Str)
        ElseIf NoLine = 0 Then
            Console.WriteLine(Str)
        End If
        Console.ForegroundColor = System.ConsoleColor.Black
    End Sub

    Public Sub WriteBlack(ByVal Str As String, Optional ByVal NoLine As Integer = 0)
        Console.ForegroundColor = System.ConsoleColor.Black
        If NoLine = 1 Then
            Console.Write(Str)
        ElseIf NoLine = 0 Then
            Console.WriteLine(Str)
        End If
    End Sub

    Public Sub Status()
        WriteGrey("####################")
        WriteGrey("aID", 1)
        WriteBlack("#", 1)
        WriteGrey("aP", 1)
        WriteBlack("#", 1)
        WriteGrey("Room", 1)
        WriteBlack("#", 1)
        WriteGrey("Ping", 1)
        WriteBlack("#", 1)
        WriteGrey("Coordinates", 1)
        WriteBlack("#", 1)
        WriteGrey("Name")
        SyncLock Users.LockObj
            For Each User As User In Users.Values
                WriteBlack(ForceLength(User.aID, 3), 1)
                WriteGrey("#", 1)
                WriteBlack(ForceLength(User.aPermission, 3), 1)
                WriteGrey("#", 1)
                WriteBlack(ForceLength(User.Room.ID, 4), 1)
                WriteGrey("#", 1)
                WriteBlack(ForceLength(User.Ping, 4), 1)
                WriteGrey("#", 1)
                WriteBlack(ForceLength(User.X & "," & User.Y, 11), 1)
                WriteGrey("#", 1)
                WriteBlack(User.Name)
            Next
        End SyncLock
        WriteGrey("####################")
    End Sub

    ' Checks all user connections and removes old or inactive connections
    Public Sub FlushUsers()
        Dim Sockets As New ArrayList ' Collection of closed socket objects to dispose of
        For Each Socket As Winsock In Client.Values
            If Socket.State = WinsockStates.Closed Then
                Sockets.Add(Socket)
            End If
        Next
        For Each Socket As Winsock In Sockets ' Dispose of all closed sockets
            Socket.Dispose()
            ' Dim GID = Client.findGID(Socket)
            ' Users.Remove(GID)
        Next
    End Sub

    Public Sub Kick(ByVal pName As String) ' Kick by provided name
        Dim kUser As User = Nothing
        For Each fUser As User In Users.Values
            If fUser.Name = pName Then
                kUser = fUser
            End If
        Next
        If Not kUser Is Nothing Then KickUser(kUser.gID)
    End Sub

    Public Sub Kick(ByVal id As Integer, Optional ByVal Account As Boolean = True) ' Kick by Account ID or Runtime ID
        Dim kUser As User = Nothing
        SyncLock Users.LockObj
            For Each fUser As User In Users.Values
                If Account Then
                    If fUser.aID = id Then
                        kUser = fUser
                    End If
                Else
                    If fUser.ID = id Then
                        kUser = fUser
                    End If
                End If
            Next
        End SyncLock
        If Not kUser Is Nothing Then KickUser(kUser.gID)
    End Sub

    Private Sub KickUser(ByVal GID As Guid) ' Kick by GID
        Dim User = Users.gItem(GID)
        Send(GID, "/k")
        For Each Socket As Winsock In Client.Values ' Finds the socket to remove
            If Client.findGID(Socket) = GID Then
                Socket.Close()
            End If
        Next
    End Sub

    Public Sub KickAll(Optional ByVal ToLobby As Boolean = False)
        WriteBlack("Kicking all users... ")
        Dim Sockets As New ArrayList ' Collection of open socket connections to close
        Dim Names As New ArrayList ' Collection of names
        SyncLock Users.LockObj
            For Each Socket As Winsock In Client.Values ' Needs a loop like this because
                If Socket.State = WinsockStates.Connected Then ' we're dealing with more than one user
                    Dim GID = Client.findGID(Socket)
                    Dim User = Users.gItem(GID)
                    Sockets.Add(Socket)
                    Names.Add(User.Name)
                    Send(GID, "/ka")
                End If
            Next
            For Each Name As String In Names
                ' WriteGrey(" -" & Name)
            Next
        End SyncLock
        For Each Socket As Winsock In Sockets ' Close all found connections
            Socket.Close()
        Next
        FlushUsers()
    End Sub

End Module
