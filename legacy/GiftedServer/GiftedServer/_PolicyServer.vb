Imports Winsock_Orcas

Module _PolicyServer

    Public WithEvents Policy As New Winsock
    Public WithEvents PolicySender As New Winsock
    Public PolicyPort As Integer = 843
    Public Const xml_policy As String = Chr(10) & "<cross-domain-policy>" & Chr(10) & Chr(32) & Chr(32) & "<allow-access-from domain=""*"" to-ports=""*"" />" & Chr(10) & "</cross-domain-policy>"
    Public Const xml_policy_request As String = "<policy-file-request/>" & Chr(0)

    Private Sub Policy_ConnectRequest(ByVal sender As Object, ByVal e As WinsockConnectionRequestEventArgs) Handles Policy.ConnectionRequest
        If PolicySender.State = WinsockStates.Closed Then
            Debug.Write("Policy request: " & e.ClientIP & " - ")
            PolicySender.Accept(e.Client)
        Else
            Debug.Write("Concurrent policy request, blocking for 250ms...")
            Threading.Thread.Sleep(250)
            Policy_ConnectRequest(sender, e)
        End If
    End Sub

    Private Sub PolicySender_Connect(ByVal sender As Object, ByVal e As Winsock_Orcas.WinsockConnectedEventArgs) Handles PolicySender.Connected
        ' Previous method was to send policy on connect, but now it's pro ;D
        'PolicySender.Send(xml_policy + Chr(0))
        'WriteGrey("Sending policy to " & PolicySender.RemoteHost)
    End Sub

    Private Sub PolicySender_Disconnect(ByVal sender As Object, ByVal e As System.EventArgs) Handles PolicySender.Disconnected
        Debug.WriteLine("Policy connection closed")
    End Sub

    Private Sub PolicySender_DataArrival(ByVal sender As Object, ByVal e As WinsockDataArrivalEventArgs) Handles PolicySender.DataArrival
        Dim DataStr = PolicySender.Get(Of String)()
        Debug.Write(DataStr & " ")
        If DataStr = xml_policy_request Then
            PolicySender.Send(xml_policy & Chr(0))
            Debug.Write("Sending policy to " & e.SourceIP & " - ")
        Else
            Debug.Write("Unexpected policy request: " & DataStr)
        End If
    End Sub

    Private Sub Policy_Error(ByVal sender As Object, ByVal e As WinsockErrorReceivedEventArgs) Handles Policy.ErrorReceived
        WriteBlack("Policy listener error " & e.ErrorCode & ": " & e.Message)
    End Sub

    Private Sub PolicySender_Error(ByVal sender As Object, ByVal e As WinsockErrorReceivedEventArgs) Handles PolicySender.ErrorReceived
        WriteBlack("Policy sender error " & e.ErrorCode & ": " & e.Message)
    End Sub

End Module
