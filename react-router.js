/**
**[What is Rotting?]
- When you visit websites you can typically append a path,
after the domain name like, slash /Welcome, and that loads, for example,
the welcome page of a website.

- And if you then type a different URL into the browser address bar,
or if you click a link that changes the URL, for example, to slash /Products,
a different page gets loaded.

- So the visible content of the website changes, That's what Routing is all about,
Different URL paths load different content on the screen,

*? Multi-Page in React(SPAs):
- We send only one request and we get one HTML file, initial HTML request.

- and then this HTML file with a bunch of extra JavaScript is downloaded,
and there after the extra JavaScript code, that runs on the client side
will actually take care about adjusting what the user sees on the screen.

- we can add client-side React code, that basically watches the currently active URL,
and that triggers whenever the URL changes, and that then leads to different content,
being displayed on the screen when the URL changes.

- So instead of loading new HTML files from the backend, we could add some client-side code
that simply watches the URL and then loads a different React component when that URL changes.

*Todo| Final: That's how single page applications work.
*/
//!=========================================================================
/**
** [Understanding Relative & Absolute Path]
- ("/products", "/cart") There are absolute paths because they're starting with a slash,
that's how you can tell that these are absolute paths,
If a path starts with a slash, it is an absolute path.

- if we have parent path like this("/root"), now we have clashing route definitions,
then it should handle all pages that start with /root, NOTE: but then the child pages
actually don't start with /root.

*? Difference Between Absolute Paths and relative paths:
- We can remove those leading slashes here on the child routes,
Like This ("products", "cart"), and that turns these route definition paths to relative paths,
So now we got Two relative paths here instead of absolute paths.

- Now, when defining routes like this, this simply means that these paths defined here,
are appended after the path of the wrapper route.

- NOTE: For Links Elements: If a path starts with a slash, with a leading forward slash,
then it is an absolute path, (Example) "/product/id" it's an absolute path and it's added
directly after the domain name, not after the currently active path,
and we Can Change Link Element path from absolute path to relative path
by removing slash (/), which means that, by default, it will add this path
after the currently active routes path.

*? Link Element Have a Prop Call relative it have two values:
1 - path
2 - route
-- With that Prop I control whether this segment here is added relative
to the currently actives route path or to the currently active path in the URL.

*? NavLink Element Have a Prop Call end:
- default Value is => true
- it will end activate of current link.

*? using ".." relative path to go back one level:
- when i use relative props and Assign value to "path", this will be back one segment
- when i use relative props and Assign value to "route", this will be back two segment


*TODO| Final:
- Starting Path is slash nothing instead.
- we can still stick to relative paths for All child routes, because we wanna
append these paths after the path of the wrapper parent route here("/").
*/
//!=========================================================================
/**
** [Working with Index Routes]
- This turns this route into a so-called index route, which simply means
it's the default route that should be displayed if the parent route's path
is currently active, So it will not be loaded for products or products/productId,
But if we're on just /nothing in this case this index route will be activated.

- adding index property with a true value.
*/
//!=========================================================================
/**
** [Using loader And fun useLoaderData() Hook (react-router-dom)]
- it gives us an extra property called loader() method,
to send https requests and fetch data on a page that I want.

- before the JSX code(component || page) gets rendered,
loader() method will be triggered and executed by a React router.

- will make that data fetched available in our page(component),
by using useLoaderData() Hook.

*? (When Are loader() Functions Executed?)
- The loader for a page will be called right when we start navigating to that page,
So not after the page component has been rendered, but before we actually go there.

- Because the data fetching is initiated as soon as we initiate the route transition,
But by default, React router will actually wait for the data to be fetched,
so for the loader to be finished.

- The advantage of this approach is that you can rely on the data being there,
once the events page component is being rendered.

- this mean I don't need to worry about whether the data is there yet or not,
and therefore you don't need to render a loading state on this page component.

- The downside, of course, is that we have this delay where it looks
to the user as if nothing is happening.

*? Which Kind Of Code Goes Into loader()s?
- You can do anything you can do in the other JavaScript code as well.

- What you can't do in your loader function is, for example,
use React Hooks like useState.

*? loader()s functions Takes an object contains two important pieces of data:
1 - A request property which contains a request object.
2- a params property which contains an object with all your route parameters.
*/
//!=========================================================================
/**
** [returning Responses in loader()s functions]
- Well, in the browser you can create a new response object,
by instantiating the built-in response constructor function,
Now this is built into the browser, This is a modern browser feature,
You can build your own responses.

*? what's really important to understand at this point:
- is that this loader code will not execute on a server,
This is still all happening in the browser here,
even though it's not in a component it's still in the browser,
This is still client-side code.

- Now, whenever you return such a response in your loaders,
the React Router package will automatically extract the data from your response,
when using useLoaderData() Hook.

** Why This Feature exists?
- because it's quite common that in this loader function,
you reach out to some backend with the browser's built-in fetch function.

- that simply means that you can, in the end, take that response object
and return that in your loader, You don't need to manually extract the data from the response,
Instead, you can return your response like this, with or without checking whether it's okay,
*/
//!=========================================================================
/**
** [useNavigation hook (react-router-dom) & Handling Loading]
- to check the current route transitions state,
So, to find out if a transition has been initiated.

- whether we're currently in an active transition, if we're loading data,
or if we have no active transition going on.

- and we are currently still waiting for data to arrive or if we are done.

- Returns the current navigation, defaulting state to an "idle" navigation when no navigation is in progress.

- give user feedback when the data loading using state property and check it value === loading or not.
*/
//!=========================================================================
/**
** [Error Handling with in loader function & useRouteError() Hook]
- Now, when an error gets thrown in a loader, React router
will simply render the closest error element.

- the error element will be shown to the screen whenever an error is generated
in any route related code, including loaders functions.

- We will from time to time construct new responses Objects,
especially when it comes to throwing errors.

- useRouteError() return Object If We throw a new response Object.

*? [The json() Utility Function]
- Instead of creating my new response Object like this,
I can return the result of calling json.

- Now json is a function that creates a response object
that includes data in the json format.

- With json function, I don't convert data to JSON format and vice versa.
*/
//!=========================================================================
/**
**[The useRouteLoaderData() Hook & Accessing Data From Other Routes]
- This hook works almost like use loader data,
but it takes a route ID as an argument.
*/
//!=========================================================================
/**
**[Working with action() Functions]
- the great thing about react-router is that it makes handling form submissions
a brace and it helps with extracting data from that form.

- Next, you should replace the form element with the special Form component,
which is provided by react-router-dom.

- This form will automatically trigger the action function.

- But this request and that's important will not be sent to the backend automatically,
but instead to your action, And it will include all the form data, if We use this special form component.

- action() take an object as a parameter has two properties (request, params).

- then return redirect("path") fun to navigate to target route page.

*? using useSubmit() Hook => submit data and trigger an action programmatically.
** useSubmit Takes Tow Arguments:
1- data that we wanna submit, and that data will automatically be wrapped
in a form data object, which we then could extract.
2- request method => (delete, post, put, get).
*/
//!=========================================================================
/**
**[Work with useFetcher() Hook]
- Interacts with route loaders and actions without causing a navigation,
Great for any interaction that stays on the same page.

- this hook when executed gives us an object, And this object includes a bunch
of useful properties and methods, For example, it gives you another form component,
which is different from that other form component.

- It also gives us a submit function, which is different from the submit function we got
from useSubmit, which we used before.

*? what The Different Between fetcher.form component And from component
- All actually trigger an action fun.

- fetcher.form: but it will not initialize a route transition.

- So Fetcher should basically be used whenever,
you wanna trigger, an action, or also a loader with help of the load function,
without actually navigating to the page to which the loader belongs,
or the page to which the action belongs.

- And we can get a feedback by using other properties provided
/*
!=========================================================================
/**
**[Deferring Data Fetching with defer() And Await Component]
- defer() function takes an object as an argument.
- Now in this object, we in the end, bundle all the different HTTP requests we might.

*? between the opening and closing tags in Await Component:
we output a dynamic value which must be a function that will be executed,
by a React router once that data is there, So once that promise resolved,
Once we have that data.

*?Await Component Takes a props called resolve:
- this resolve props resolved the promise and return promise result.
*/
//!=========================================================================
/**
**[Working with Query Parameters & useSearchParams Hook]
- a query parameter is in the end a parameter that's appended
in the URL after a question mark.

- we get this extra parameter which defines how exactly this component
should be rendered.

- and an advantage of using query parameters would be that
we can directly link to this page in signup or log in mode,
so that we could link a user directly to the signup page
even though it's one at the same page just with a different UI being rendered.

*? useSearchParams() Hook:
- it actually returns an array
*TODO And there are two elements in that array:
1- an Object Called searchParams that gives us access
to the currently set query parameters.

2- and the second Value is a function that allows us to update
the currently set query parameters.

*? using get method:
- which allows us to retrieve the value for a specific query parameter.
*/
//!=========================================================================
/**
 **[React Router DOM Hooks]
 *?- useNavigation()
 *?- useRouteError()
 *?- useLoaderData()
 *?- useRouteLoaderData()
 *?- useSubmit()
 *?- useFetcher()
 *?- useActionData()
 *?- useNavigate()
 *?- useParams()
 */
//!=========================================================================
/**
**[React Router DOM functions & Component & Props & Properties]
Functions:
*?- createBrowserRouter
*?- loader({ request, params }) function
*?- json function
*?- action({ request, params }) function
*?- redirect function
Component:
*?- RouterProvider
*?- Form => Props(method, action)
*?- Await

** Suspense => From React Not React Router DOM:
-- The suspense component is a component which can be used in certain situations,
to show a fallback whilst we're waiting for other data to arrive.

Props:
*?- end
*?- relative
Properties:
*? index
*? id
*/
