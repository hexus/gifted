Imports Winsock_Orcas

Module _EventHandling

    Public WithEvents Server As New Winsock
    Public WithEvents Client As New WinsockCollection(True, True)

    ' New client request
    Private Sub Server_ConnectRequest(ByVal sender As Object, ByVal e As WinsockConnectionRequestEventArgs) Handles Server.ConnectionRequest
        WriteGrey("Connection request: " & e.ClientIP & "... ")
        Dim AlreadyConnected As Boolean = False
        FlushUsers()
        '# START - Multi-client protection
        'For Each User As User In Users.Values
        '    If User.IP = e.ClientIP Then
        '        AlreadyConnected = True
        '    End If
        'Next
        '# END - Multi-client protection
        If AlreadyConnected = False Then
            Dim GUID As Guid = Client.Accept(e.Client)
        Else
            e.Cancel = True
            WriteGrey("Already connected. Request refused.")
        End If
    End Sub

    ' Client connects
    Private Sub Client_Connect(ByVal sender As Object, ByVal e As Winsock_Orcas.WinsockConnectedEventArgs) Handles Client.Connected
        Dim GID As Guid = gidGet(sender)
        Dim Socket As Winsock = SocketGet(sender)
        Socket.Send("/login-request" + Chr(0)) ' Request login info
    End Sub

    ' Receiving data
    Private Sub Client_DataArrival(ByVal sender As Object, ByVal e As WinsockDataArrivalEventArgs) Handles Client.DataArrival
        If e.TotalBytes > 0 Then
            ' Deal with and display
            Dim GID = gidGet(sender) ' Get sender GID
            Dim Socket As Winsock = SocketGet(sender) ' Get sender Socket
            Dim DataStr As String = Trim(Socket.Get(Of String)())
            Dim MsgArr() As String = DataStr.Split(Chr(0))
            Dim User As User = Users.gItem(GID) ' Check for user

            If Not User Is Nothing Then
                If User.Status > 0 Then ' Game data
                    For i = 0 To MsgArr.Length - 1
                        MsgArr(i) = MsgArr(i).Replace(Chr(0), "")
                        If MsgArr(i).Length > 0 Then
                            'WriteGrey(UserID & " (" & e.SourceIP & ")" & ": ", 1)
                            'WriteBlack(MsgArr(i))
                            HandleData(GID, MsgArr(i))
                        End If
                    Next
                End If
            Else ' If there is no user object associated with the socket
                ' WriteBlack("Receiving login request: " & DataStr)
                For i = 0 To MsgArr.Length - 1 ' Get rid of any excess 0 byte characters
                    MsgArr(i) = MsgArr(i).Replace(Chr(0), "")
                    If MsgArr(i).Length > 0 Then
                        Dim LoginArr() As String = MsgArr(i).Split(" ")
                        If LoginArr.Length = 3 Then
                            ' WriteGrey(e.SourceIP & ": ", 1)
                            ' WriteBlack(MsgArr(0))
                            HandleLogin(GID, LoginArr, e.SourceIP)
                        End If
                    End If
                Next
            End If
        End If
    End Sub

    ' Disconnection notification
    Private Sub Client_Disconnect(ByVal sender As Object, ByVal e As System.EventArgs) Handles Client.Disconnected
        Dim GID = gidGet(sender)
        Dim User = Users.gItem(GID)
        If Not User Is Nothing Then
            If User.Valid Then
                User.Room.LeaveUser(User)
                ' User.Status = 0
            End If
            ' WriteGrey("Disconnected: " & User.Name & " (" & User.IP & ")")
            Users.Remove(GID)
        Else
            If Client.ContainsKey(GID) Then ' If socket still exists
                ' WriteGrey("Old client socket removed")
                Client.Remove(GID)
            End If
            ' WriteGrey("Abandoned login request")
        End If
        FlushUsers()
    End Sub

    Private Sub Server_Error(ByVal sender As Object, ByVal e As WinsockErrorReceivedEventArgs) Handles Server.ErrorReceived
        Debug.WriteLine("Server Socket Error: " & e.Message)
    End Sub

    Private Sub Client_Error(ByVal sender As Object, ByVal e As WinsockErrorReceivedEventArgs) Handles Client.ErrorReceived
        Debug.WriteLine("Client Socket Error: " & e.Message)

    End Sub

End Module
