Imports Winsock_Orcas
Imports MySql.Data.MySqlClient
Imports System.Data
Imports System.Timers

Module GiftedServer

#Region " Globals & Startup Routine "

    ' Global variables
    Public SerVersion As String = "0.3.28"
    Public ClientLimit As Integer = 100
    Public ServerIP As String = "127.0.0.1"
    Public Const Port As Integer = 7000
    Public Const PingSpeed As Integer = 10000
    Public MotD As String = "Welcome! Thanks for testing Gifted v" & SerVersion & "."
    Public AllowGuests As Boolean = True

    Public MySQL As MySqlConnection
    Public MySQLStr As String = "server=127.0.0.1; user id=root; password=novasex; database=gifted_alpha"

    Public Users As New UserCollection
    Public Rooms As New Hashtable
    Public Login As Room
    Public Lobby As Room
    Public World As RoomWorld

    Private GlobalPingTimer As New Timer

    ' Startup Routine
    Sub Main()
        ' Initial functions
        Init()
        Boot()

        ' Console input handling
        Dim Action As String = ""
        While Action <> "/exit"
            Action = Console.ReadLine()
            If Action.Length > 0 Then
                If Action.Substring(0, 1) = "/" Then
                    Dim Input() As String = Action.Split(" ")
                    Dim Command As String = Input(0)
                    Select Case Command
                        Case "/kick", "/kickid", "/kicka"
                            If Input.GetUpperBound(0) >= 1 Then
                                If Command = "/kick" Then
                                    Kick(Input(1))
                                ElseIf Command = "/kickid" Then
                                    Kick(CInt(Input(1)), False)
                                ElseIf Command = "/kicka" Then
                                    Kick(CInt(Input(1)), True)
                                End If
                            Else
                                WriteBlack("Please provide a player name or ID")
                            End If
                        Case "/kickall"
                            KickAll()
                        Case "/s", "/stats"
                            Status()
                        Case "/flush"
                            FlushUsers()
                        Case "/save"
                            WriteGrey("Saving world...", 1)
                            World.SaveWorld()
                            WriteGrey(" Done.")
                    End Select
                Else
                    GlobalSend(Action) ' Server chat send
                End If
            End If
        End While
        Close()
    End Sub

#End Region

#Region " Initial Routines "

    Sub Init()
        Dim NameStr = "Gifted Server v" + SerVersion ' Window title and first init line
        Console.WindowWidth = 96
        Console.Title = NameStr
        Console.BackgroundColor = System.ConsoleColor.White
        Console.ForegroundColor = System.ConsoleColor.Black
        Console.Clear()
        Console.WriteLine(NameStr)
    End Sub

    Public Sub ReadConfig()
        ' Implement config files!
    End Sub

    Public Sub Boot()
        Console.WriteLine("Booting...")

        ' Connect to database
        Dim Opened = False
        MySQL = New MySqlConnection()
        MySQL.ConnectionString = MySQLStr
        While Opened = False
            Try ' MySQL Connection Test and Initial Queries
                WriteGrey("Testing MySQL Connection: ", 1)
                MySQL.Open()
                sqlSet("UPDATE characters SET online='0'")
                WriteGrey("Success")
                MySQL.Close()
                Opened = True
            Catch Merror As MySqlException
                WriteGrey("Error - " & Merror.Message)
                WriteBlack("Press Enter to retry MySQL connection", 1)
                Console.ReadLine()
            End Try
        End While

        Login = New Room("-1", "Login")
        Lobby = New Room("0", "Lobby")
        World = New RoomWorld("1", "Buren")

        Rooms.Add(Login.ID, Login)
        Rooms.Add(Lobby.ID, Lobby)
        Rooms.Add(World.ID, World)

        ' Policy file server
        Policy.LocalPort = PolicyPort
        PolicySender.LegacySupport = True
        PolicySender.LocalPort = PolicyPort
        Policy.Listen()
        WriteGrey("Policy file server listening on port " & Policy.LocalPort)

        ' Listen server
        Server.LocalPort = Port
        Server.Listen()
        WriteGrey("Game server listening on port " & Server.LocalPort)

        World.StartTicking()

        AddHandler GlobalPingTimer.Elapsed, AddressOf GlobalPing
        GlobalPingTimer.Interval = PingSpeed
        GlobalPingTimer.Start()
        GlobalPing()
    End Sub

    Sub Close()
        WriteBlack("Closing server... press enter to kick all players.")
        Console.ReadLine()
        KickAll()
    End Sub

#End Region

End Module
