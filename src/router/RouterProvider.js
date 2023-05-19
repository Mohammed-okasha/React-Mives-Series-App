import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
//==========================================================
//? Pages
import RootLayout from "../pages/Root";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";
//==========================================================
//? Loaders
import { loaderData } from "./loaders/loader-data";
//==========================================================
// ? Lazy Loading Pages
const MoviesPage = lazy(() => import("../pages/Movies"));
const TvSeriesPage = lazy(() => import("../pages/TvSeries"));
const DetailsPage = lazy(() => import("../pages/Details"));
const PersonPage = lazy(() => import("../pages/Person"));
const SearchPage = lazy(() => import("../pages/Search"));
const FavoritesPage = lazy(() => import("../pages/Favorites"));
//==========================================================
const routerConfig = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: loaderData },
      {
        path: "movies",
        element: (
          <Suspense>
            <MoviesPage />
          </Suspense>
        ),
        loader: () =>
          import("../pages/Movies").then((module) =>
            module.moviesGenresLoader()
          ),
      },

      {
        path: "tvSeries",
        element: (
          <Suspense>
            <TvSeriesPage />
          </Suspense>
        ),
        loader: () =>
          import("../pages/TvSeries").then((module) =>
            module.tvSeriesGenresLoader()
          ),
      },
      {
        path: ":type/:id",
        element: (
          <Suspense>
            <DetailsPage />
          </Suspense>
        ),
        loader: (meta) =>
          import("../pages/Details").then((module) =>
            module.movieDetailsLoader(meta)
          ),
      },
      {
        path: "person/:personId",
        element: (
          <Suspense>
            <PersonPage />
          </Suspense>
        ),
        loader: (meta) =>
          import("../pages/Person").then((module) =>
            module.personDetailsLoader(meta)
          ),
      },
      {
        path: "search",
        element: (
          <Suspense>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: "favorites",
        element: (
          <Suspense>
            <FavoritesPage />
          </Suspense>
        ),
      },
    ],
  },
]);
//==========================================================
export const BrowserRouterProvider = () => {
  return <RouterProvider router={routerConfig} />;
};

export default BrowserRouterProvider;
