Imports Winsock_Orcas
Imports MySql.Data.MySqlClient

Module _DataHandling

    Public Sub HandleLogin(ByVal GID As Guid, ByRef LoginArr() As String, ByVal IP As String)
        Dim User As User = Users.Add(GID) ' Create new user object
        User.IP = IP ' Store new users IP
        Dim Socket As Winsock = Client.Item(GID) ' Get socket

        Dim Valid As Boolean = False
        Dim Reason As String = "Invalid login details" ' Default rejection reason
        Dim RequestStr As String = Trim(LoginArr(0))
        Dim Username As String = Trim(LoginArr(1))
        Dim PassHash As String = Trim(LoginArr(2))
        Dim aName = "", aPass = ""
        Dim aID, aPermission As Integer
        Dim Status As Integer = User.Status

        User.Name = Username ' Assume for now that the characters name is its account name
        ' Query for account information
        Dim aResult As MySqlDataReader = sqlGet("SELECT * FROM account WHERE name='" & Username & "'")
        If LoginArr(0) = "/login" Then
            If aResult.HasRows Then ' If an account has been found
                While aResult.Read() ' Store details
                    aID = aResult("id")
                    aName = aResult("name")
                    aPass = aResult("password")
                    aPermission = aResult("permission")
                End While
                aResult.Close()

                If aName = Username Then
                    If aPass = PassHash Then
                        Valid = True
                        User.aID = aID
                        User.aPermission = aPermission
                        User.Username = Username
                    End If
                End If
            Else ' If this is a guest attempt
                If AllowGuests Then
                    ' Implement a check for username duplication to avoid shit going downwards blud.
                    Valid = True
                    User.Guest = True ' Mark as a guest
                    User.Outfit = "0"
                Else
                    Reason = "Guests are not allowed on this server"
                End If
            End If
        Else ' Invalid login request
            Reason = "Unrecognised request"
        End If

        User.Valid = Valid
        If Valid = True Then
            If Not User.Guest Then
                ' Query for character information
                Dim cResult As MySqlDataReader = sqlGet("SELECT * FROM characters WHERE aid='" & aID & "'")
                If cResult.HasRows Then ' If a character record is found for this account
                    While cResult.Read()
                        User.cID = cResult("id")
                        User.Name = cResult("name")
                        User.Outfit = cResult("outfit")
                    End While
                Else
                    User.Outfit = "0"
                End If
            End If

            User.Send("/login-accept")
            User.ChangeStatus(1)
        Else
            User.Send("/login-reject " & Reason)
            ' WriteGrey("Rejected because: " & Reason)
            Socket.Close()
        End If
    End Sub

    Public Sub HandleData(ByVal SenderGuid As Guid, ByRef DataStr As String)
        Dim GID = SenderGuid
        Dim User As User = Users.gItem(GID)
        Dim Socket As Winsock = Client.Item(GID)
        Dim DataArr() As String = DataStr.Split(" ")
        Dim DataCmdMsg() As String = DataStr.Split(" ", 2, Nothing)
        Dim DataMsg As String = If(DataCmdMsg.Length > 1, DataCmdMsg(1), "")
        Dim UserID As String
        If User.Name Is Nothing Then
            UserID = CStr(User.ID)
        Else
            UserID = User.Name
        End If
        Dim bSend As Boolean = False

        WriteBlack(User.Name & ": " & DataStr) ' Print all received data

        Select Case DataArr(0)
            Case "/info-request" ' Request game info
                If User.Room Is Lobby Then
                    User.SendInfo()
                    User.Send("/motd " & MotD)
                End If
            Case "/world-request" ' Request world data
                WriteBlack("World requested by " & User.Name & ".")
                ' Perform region checking when dynamic
                ' region sending is implemented
                User.SendWorld()
            Case "/b" ' Broadcast
                If User.aPermission >= 100 Then
                    User.Room.SendToAll(DataMsg)
                End If
            Case "/c" ' Chat
                Dim Message As String = DataStr.Substring(3)
                WriteBlack(User.Name & ": " & Message)
                User.Room.SendToAll("/c " & User.ID & " " & Message)
            Case "/n"
                User.Name = DataArr(1)
                User.Room.SendToAll("/un " & User.ID & " " & User.Name)
            Case "/r"
                ' Move to new room
                If Not Rooms(DataArr(1)) Is Nothing Then
                    ' Perform validation for this later on
                    If DataArr(1) = "1" Then User.Send("/r " & User.ID & " " & 1)
                    Rooms(DataArr(1)).JoinUser(User)
                End If
            Case "/m"
                User.x = DataArr(1)
                User.setSpeedX(DataArr(2))
                User.y = DataArr(3)
                User.setSpeedY(DataArr(4))
                User.direction = DataArr(5)
                User.MoveLeft = (DataArr(6))
                User.MoveRight = (DataArr(7))
                User.MoveUp = (DataArr(8))
                User.MoveDown = (DataArr(9))
                User.Angle = DataArr(10)
                User.AimDir = DataArr(11)
                User.isAimingLeft = DataArr(12)
                User.isAimingRight = DataArr(13)
            Case "/moveControls"
                User.MoveLeft = (DataArr(1))
                User.MoveRight = (DataArr(2))
                User.MoveUp = (DataArr(3))
                User.MoveDown = (DataArr(4))
            Case "/o"
                User.ChangeOutfit(DataArr(1))
            Case "/uv"
                Dim Orig = User.Values.Item(DataArr(1))
                If DataArr(1) = "flying" Then ' Currently only admins can fly
                    If User.aPermission >= 100 Then
                        User.flying = DataArr(2)
                    End If
                Else
                    User.Values.Item(DataArr(1)) = DataArr(2)
                End If
                If User.Values.Item(DataArr(1)) <> Orig Then ' Relay if there was a change
                    User.Room.SendToAll("/uv " & User.ID & " " & DataArr(1) & " " & User.Values.Item(DataArr(1)))
                End If
            Case "/ping"
                User.Send("/pong")
            Case "/pong"
                User.Pong()
            Case "/kickall"
                If User.aPermission >= 100 Then
                    KickAll()
                End If
            Case "/guests"
                If User.aPermission >= 100 Then
                    If AllowGuests Then
                        AllowGuests = False
                    Else
                        AllowGuests = True
                    End If
                    Send(GID, "/sm AllowGuests = " & AllowGuests.ToString)
                Else
                    Send(GID, "/sm Cheeky, you're not an admin.")
                End If
            Case "/t"
                If User.aPermission >= 100 Then
                    Dim Tile As Integer = World.Regions(DataArr(1), DataArr(2)).GetTile(DataArr(3), DataArr(4))
                    If Tile = DataArr(5) Then
                        Tile = 0
                    Else
                        Tile = DataArr(5)
                    End If
                    World.ChangeTile(DataArr(1), DataArr(2), DataArr(3), DataArr(4), Tile)
                End If
            Case "/itemPickup"
                User.PickupWeapon(DataArr(1))
            Case "/itemDrop"
                User.DropWeapon(DataArr(1))
            Case "/itemSpawn"
                If TypeOf User.Room Is RoomWorld And User.aPermission >= 100 Then
                    Dim R = CType(User.Room, RoomWorld)
                    Dim I = New Item(Item.Type.Weapon, DataArr(1))
                    I.x = User.x
                    I.y = User.y
                    R.AddItem(I)
                End If
            Case Else
                WriteGrey("Unrecognised command: ", 1)
                WriteBlack(DataStr)

        End Select

        ' Send to everyone connected
        If bSend = True Then
            If Not DataStr = "" Then
                SendToAll(DataStr, User.Room.ID)
            End If
        End If
    End Sub

End Module
