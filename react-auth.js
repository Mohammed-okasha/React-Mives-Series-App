/**
**[Adding Authentication To React Apps]
*? Module Content:
- How Authentication Works In React Apps
- Implementing User Authentication
- Adding Auth Persistence & Auto-Logout
*/
//!==========================================================================
/**
**[How Authentication Works?]
*? how does our client side React application get permission
*? from that backend application running on a server?
- Well, it all starts with sending a request with user credentials,
So with an email and a password, for example, to that back and server,

- That backend server is then able to validate those credentials,
And then if the credentials are valid, if we did provide a valid email password combination,
then the server will send us back a response that basically gives us permission,
to access certain protected resources.

*? How to grant customers permission in a secure way and detect fake data?
** there are two main solutions for that:
*TODO|1- Server-side Sessions:
- after a user was logged in and authenticated,
We Store unique identifier on the server, send same identifier to client,
and mapped that to a specific client with help of an id that's
then sent back to the client.

- Then the client then sends that ID with future requests.

*TODO|2- Authentication Tokens:
- The idea behind authentication tokens is that on the server after a user was authenticated,
we create but don't store a permission token which is basically a string
that is created according to some algorithm.

- Then we send that token back to the client,
the special thing about that token is that it's validity can only be checked,
and proven by the backend that created that token because the token is created
with help of some private key.

- So in future requests from the client to the backend
we attach that token to those requests, and the backend is able to take a look
at that token validated.
*/
//!==========================================================================
/**
**[Adding Automatic Logout]
- At the moment we always stay logged in if we got that token once,
So as soon as we got the token, we save it,

- Indeed, the backend creates a token that will actually expire after one hour,

- Therefore, I also wanna log the user out after one hour,
because the token is invalid thereafter, And I don't just wanna log the user out,
I also wanna clear the token, and I wanna remove it from local storage or cookie

- so after that one hour, the token should be removed from local storage or cookie,
and the UI should update accordingly.

*? we again got various options:
*TODO: Do That In the root layout component to effect in the entire app.
- using useEffect() Hook | But this solution still isn't perfect yet.
*/
//!==========================================================================
/**
**[Managing the Token Expiration]
-
*/
