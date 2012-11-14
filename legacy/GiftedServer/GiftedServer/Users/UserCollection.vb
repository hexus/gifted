Public Class UserCollection

    Private _values As Hashtable    ' Hash table ~ GUID as key, User object as value
    Private Counter As Integer = 1  ' Increments each time a user is added (for non-db ID)
    Public LockObj As New Object   ' For SyncLocks, preventing multiple threads accessing/modifying same collection

    Public Sub New()
        _values = New Hashtable
    End Sub

    Public Function Add(ByVal GUID As Guid) As User
        SyncLock LockObj
            Dim NewUser As New User
            NewUser.ID = Counter
            NewUser.gID = GUID
            Counter += 1
            _values.Add(GUID, NewUser)
            Return NewUser
        End SyncLock
    End Function

    Public Sub Remove(ByVal GUID As Guid)
        SyncLock LockObj
            If _values.ContainsKey(GUID) Then
                Dim OldUser = gItem(GUID) ' Don't forget to
                OldUser.ChangeStatus(0) ' empty login status when they leave
                _values.Remove(GUID) ' Silly boy
            End If
        End SyncLock
    End Sub

    Public Function gItem(ByVal GUID As Guid) As User
        ' If supplied GUID is present, return the User object
        SyncLock LockObj
            For Each Value As Guid In _values.Keys
                If Value = GUID And Not _values.Item(GUID) Is Nothing Then
                    Return _values.Item(GUID)
                End If
            Next
        End SyncLock
        ' Else return nothing
        Return Nothing
    End Function

    Public Function iItem(ByVal ID As Integer) As User
        ' If supplied ID is present, return the User object
        SyncLock LockObj
            For Each Value As User In _values.Values
                If Value.ID = ID Then
                    Return Value
                End If
            Next
        End SyncLock
        ' Else return nothing
        Return Nothing
    End Function

    Public ReadOnly Property Values() As ICollection
        Get
            SyncLock LockObj
                Return _values.Values
            End SyncLock
        End Get
    End Property

End Class
