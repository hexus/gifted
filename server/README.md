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
- Retrieve data (accounts, characters, game worlds) from MySQL and keep it up to date as the server is running

However, some will be more advanced:

- Listen for HTTP connections
- Serve the client files
	- Similarly, serve the exact same game engine used to simulate the game within the server to keep both perfectly synchronised
- Host multiple game worlds/instances concurrently
- Undertake modularity governed by a master server, accepting new connections from players previously connected to other servers/worlds

The idea of using a master server(s) is one I haven't fully developed, but the intention would be akin to that of a DNS. 

Instead of users connecting to a particular server and then choosing from a number of worlds within that server, they could simply choose
a world and the master server would take care of what connection they need to make, abstracting the concept of a server from the user.