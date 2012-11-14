Public Class Room

#Region " Properties "

    Public ID As String
    Public Name As String
    Protected UsersInside As ArrayList
    Public LockObj As New Object   ' For SyncLocks, preventing multiple threads accessing/modifying same collection

#End Region

#Region " Constructor "

    Public Sub New(ByVal getID As String, ByVal getName As String)
        ID = getID
        Trim(getName)
        If Not getName Is "" Then
            Name = getName
        End If
        UsersInside = New ArrayList
    End Sub

#End Region

#Region " Methods "

    Public Overridable Sub JoinUser(ByRef jUser As User)
        If Not jUser Is Nothing Then
            SyncLock LockObj
                If Not jUser.Room Is Nothing Then
                    jUser.Room.LeaveUser(jUser) ' Leave current room
                End If
                SendUserToAll(jUser) ' Send new user to current users in room
                jUser.Room = Me ' Update Room Reference of new user
                UsersInside.Add(jUser) ' Add to room list
                SendAllToUser(jUser) ' Send users in room to new user
            End SyncLock
        End If
    End Sub

    Public Sub LeaveUser(ByRef lUser As User)
        If Not lUser Is Nothing Then
            SyncLock LockObj
                lUser.Room = Nothing
                UsersInside.Remove(lUser)
                SendToAll("/ud " & lUser.ID)
            End SyncLock
        End If
    End Sub

    Public Sub SendToAll(ByVal Str As String, Optional ByVal ExceptID As Integer = 0)
        SyncLock LockObj
            For Each User As User In UsersInside
                If Not User Is Nothing And Not User.ID = ExceptID Then
                    User.Send(Str)
                End If
            Next
        End SyncLock
    End Sub

    Public Sub SendUserToAll(ByRef sUser As User)
        SyncLock LockObj
            For Each User As User In UsersInside
                If Not User Is Nothing Then
                    User.SendUser(sUser)
                End If
            Next
        End SyncLock
    End Sub

    Public Overridable Sub SendAllToUser(ByRef sUser As User)
        SyncLock LockObj
            For Each User As User In UsersInside
                If Not User Is Nothing Then
                    sUser.SendUser(User)
                End If
            Next
        End SyncLock
    End Sub
#End Region

End Class
