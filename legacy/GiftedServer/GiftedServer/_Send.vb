Imports Winsock_Orcas

Module _Send

    Public Sub Send(ByVal GUID As Guid, ByVal Str As String)
        If Str.Length > 0 Then
            If Not Client.Item(GUID) Is Nothing Then
                Client.Item(GUID).Send(Str.Replace(Chr(0), "") & Chr(0))
                ' WriteBlack("Sent: " & Str)
            End If
        End If
    End Sub

    Public Sub SendToAll(ByVal Str As String, ByVal getRoomID As String)
        For Each Sock As Winsock In Client.Values
            Dim GID As Guid = Client.findGID(Sock)
            Dim User As User = Users.gItem(GID)
            If User.Room.ID = getRoomID Then
                If Str.Length > 0 Then
                    Send(User.gID, Str)
                End If
            End If
        Next
    End Sub

    Public Sub SendToAllExcept(ByVal ID As Guid, ByVal Str As String, ByVal getRoomID As String)
        Dim User As User = Users.gItem(ID)
        User.Room.SendToAll(Str, True)
        'For Each Sock As Winsock In Client.Values
        '    Dim GID As Guid = Client.findGID(Sock)
        '    Dim User As User = Users.gItem(GID)
        '    If Not ID = GID And Not User Is Nothing Then
        '        If Str.Length > 0 Then
        '            User.Room.SendToAll(Str, ID)
        '        End If
        '    End If
        'Next
    End Sub

    Public Sub SendUsers(ByRef GID As Guid) ' Send info of all currently connected users to one user (newly connected)
        Dim ToUser = Users.gItem(GID)
        Dim getRoomID = ToUser.Room.ID
        For Each User As User In Users.Values
            If Not User Is Nothing Then
                If User.Room.ID = getRoomID Then
                    Send(GID, "/uc " & User.ID)
                    Send(GID, "/uv " & User.ID & " name " & User.Name)
                    If CInt(User.Room.ID) > 0 Then
                        Send(GID, "/uv " & User.ID & " outfit " & User.Outfit)
                        Send(GID, "/us " & User.ID)
                        Send(GID, "/m " & User.ID & " " & User.x & " " & User.getSpeedX & " " & User.y & " " & User.getSpeedY)
                    End If
                End If
            End If
        Next
    End Sub

    Public Sub SendUsersExcept(ByRef GID As Guid)
        Dim ToUser = Users.gItem(GID)
        Dim sendStr = ""
        For Each User As User In Users.Values
            If User.Room.ID = ToUser.Room.ID Then
                If User.ID <> ToUser.ID Then
                    Send(GID, "/uc " & User.ID)
                    Send(GID, "/uv " & User.ID & " name " & User.Name)
                    If CInt(User.Room.ID) > 0 Then
                        Send(GID, "/uv " & User.ID & " outfit " & User.Outfit)
                        Send(GID, "/us " & User.ID)
                        Send(GID, "/m " & User.ID & " " & User.x & " " & User.getSpeedX & " " & User.y & " " & User.getSpeedY)
                    End If
                End If
            End If
        Next
    End Sub

    Public Sub GlobalSend(ByVal Str As String)
        For Each Entry In Rooms
            Entry.Value.SendToAll("/sm " & Str)
        Next
    End Sub

End Module
