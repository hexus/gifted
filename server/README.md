Gifted Server
=

The authoritative multiplayer server of Gifted is written for Node.js

Goals
-

There are a few key intentions behind the game server besides acting as a socket server.

Most of the key intentions and features behind the game server are fairly common:

- Listen for TCP connections
- Listen for WebSocket connections
- Receive and respond with a unique, basic protocol
- Keep information session-persistent
- Retrieve data (accounts, characters, game worlds) from a MySQL database, and keep the database up to date periodically throughout the session
- Run the same simulation as the game client and remain the authority over the game state, keeping all clients up to date

However, some will be more advanced:

- Listen for HTTP connections
- Serve the client files
	- Similarly, serve the exact same game engine used to simulate the game within the server to keep both perfectly synchronised
- Host multiple game worlds/instances concurrently
- (Extra) Undertake modularity governed by a master server, accepting new connections from players previously connected to other servers/worlds

The idea of using modularity with a master server(s) is one I haven't fully developed, but the intention would be to behave somewhat like a DNS. 

Instead of users connecting to a particular server and then choosing from a number of worlds within that server, they could simply connect to
a master server and choose a world to play in. The master server would then take care of what connection they need to make, abstracting the notion of servers from the user.

Again, this is an unnecessary feature but if the chance ever arises, I may attempt to implement it and see if it works well for the game.