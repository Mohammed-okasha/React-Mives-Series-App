/**
**[Understanding Lazy Loading Technique]
*? optimization techniques in React For Example:
- React memo for preventing unnecessary component re-render
- useCallback() Hook For Store Functions
- useMemo() Hook For Store Values(objects, arrays)

- Lazy Loading: which means that we wanna load certain pieces
of code only when it's needed.

*?But what exactly is lazy loading and how does it work?
- for that, it's important to understand that we have all these import
statements in our various files where we import code from other files
into the file where the import statement was added.

- and that simply means that when this component file is evaluated by the browser,
this code for react or react-router-dom hooks will be imported
because this code is needed in order to handle this component.

- So all these imports in the end connect these different files,
And when this application is served to end users, all these imports
must be resolved before something's shown on the screen.

- Now actually, when we build our application, all these imported files will actually
be merged together into one big file.

- we would have to resolve all these imports in order to bring something on the screen.

*!Now the theoretical problem with that is:
- that of course, this means all code files must be loaded
before anything's shown on the screen.

*? Solve This problem with lazy loading:
- The idea behind lazy loading is that we load certain components in the end
only when they're needed instead of ahead of time.
*/
//!=============================================================================
/**
** [Steps To Make Page lazy loading]
*? First, we have to remove all these imports of the page component,
*?Because Otherwise, it's always loaded.

- Then, as a next step we have to re-add it but in a way that
it's only loaded when it's needed.

- and here to load it lazily, we can pass a function to the loader method,
So replace the loader from before with a different loader function,
Then We call at import function.

- Now this import keyword, that you can actually also call import as a function
and in that case it will import something dynamically, only when it's needed.

- Now, to import you pass a path, And then import gives you a promise,
Because this is an asynchronous process, which can take a bit longer
because it must download the code after all, And downloading that code
can take a short while.

- And then inside then method we get is the loaded module, so the loaded file in the end
And on that module I now wanna return the loader function, And that loader function should be executed,
That loader function as we know then returns a promise, which yields a response.

- So now the import function will only be executed once the loader here
for the blog page is executed, So only once we try to visit or Navigate the blog page,
Only then the blog file will be imported, and this loader function from that file will be executed.

*? then also load the blog page component lazily:
- Now, here we could use a similar approach,
We could create a component function named (BlogPage),
which in the end returns the dynamically imported blog page component file.

- Then wrap imported blog page inside a special function called
lazy function which is imported from React, Lazy is executed and takes this function
with the dynamic import as an argument.

- And now blog page can indeed be used as a component.

- and then we must wrap lazy component inside Suspense component,
so that we can show a fallback which is specified with help of the fallback prop
on suspense until that component code is there,So here we could say (loading...).

*TODO|Finally: Check Network Tap To show How the code for the comment file was downloaded dynamically.
*/
//!=============================================================================
/**
**[Building the Code For Production]
- using build script
- When we run NPM run build, we execute that script, And under the hood
this will produce a code bundle with highly optimized and transformed code,
which is ready to be uploaded.

- And once it finished, it created that build folder here.

- And it's the content of that build folder that should be deployed to a server,
in a static folder I have your optimized JavaScript file,
with those different dynamically loaded junks for the lazy loading,
but also with that main chunk that's downloaded initially.

- And that file contains all the code you wrote plus all the
third party package code you're using including the React library itself.
*/
//!=============================================================================
/**
**[Deployment React App]
- And when it comes to deploying our website, it is really important that
a React single page application is a static website,
It consists of only HTML, CSS, and JavaScript files, and maybe a couple of images.

- but it contains no code that must be executed on the server,
Instead, all the code will be parsed by the browser,
and will be executed on the computers of our visitors.

- Therefore, we only need a Static Site Host, We don't need any hosting provider
that executes code on the server, Therefore, we only need a Static Site Host,

- if we are building full-stack React applications,
We are need hosting provider that executes code on the server.
*/
//!=============================================================================
/**
**[Server-side Routing & Required Configuration]
- We can navigate between different pages, And what's important to understand,
is that this navigation is provided by a React Router, And that code for evaluating
the URL and loading different components executes in the browser,
It's even called react-router-dom So it's a client side package.

- this project has no code that executes on the server,
*!Now why is this important?:
- the logic for moving to the blog component is executed in the browser, not on the server,
Now clicking on links is one thing though, What if we enter a URL like the domain /posts,
then it also loads this blog page as it should.

- Now if we did not just send a request to main domain in our react app,
but maybe also to some path like /posts, then that path also reaches the server
on this initial request, And by default, TODO: the server would try to find the fitting response
for the path we requested in our request,NOTE: And of course, the server in this case
would fail to find a fitting file, because it doesn't have any server-side logic
for handling requests with different paths.

*!TODO: What the server should instead do is always return
exactly the same HTML file and the same JavaScript files and code,
so that this path, which we requested can be resolved on the client side
by that JavaScript code we requested, so by our React app that's using React Router.
*/
