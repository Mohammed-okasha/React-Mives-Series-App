import { json, defer } from "react-router-dom";
import { apiConfig } from "../../api/api-config";
import moviesUrls from "../../api/movies-urls";
import seriesUrls from "../../api/series-urls";
//=================================================================
const { base_url, API_KEY } = apiConfig;
//=================================================================
// Reusable Fetching Data fun
const loadDataHandler = async (reqConfig) => {
  const res = await fetch(reqConfig.url);

  if (res.status !== 200) {
    throw json({ message: "could not fetch movies!" }, { status: res.status });
  }

  const data = await res.json();

  const updatedResults = data.results.map((item) => {
    if (!item.media_type) {
      return {
        ...item,
        media_type: reqConfig.media_type,
        isFavorite: false,
      };
    }

    return {
      ...item,
      isFavorite: false,
    };
  });

  return {
    ...data,
    items: updatedResults,
  };
};
//=================================================================
//* Load Movies
const loadMovies = async () => {
  return {
    trendingMovies: await loadDataHandler(moviesUrls.trendingMovies),
    topRatedMovies: await loadDataHandler(moviesUrls.topRatedMovies),
    popularMovies: await loadDataHandler(moviesUrls.popularMovies),
    upcomingMovies: await loadDataHandler(moviesUrls.upcomingMovies),
    nowPlayingMovies: await loadDataHandler(moviesUrls.nowPlayingMovies),
  };
};
//=================================================================
//* Load Serials
const loadSerials = async () => {
  return {
    airingToday: await loadDataHandler(seriesUrls.airingToday),
    popular: await loadDataHandler(seriesUrls.popular),
    topRated: await loadDataHandler(seriesUrls.topRated),
  };
};
//=================================================================
export const loaderData = async () => {
  return defer({
    movies: await loadMovies(),
    serials: await loadSerials(),
  });
};
//=================================================================
//* Load Movie Data
const loadMovieData = async (url) => {
  const res = await fetch(url);

  if (res.status !== 200) {
    throw json({ message: "could not fetch data!" }, { status: res.status });
  }

  const data = await res.json();

  if (data.cast) {
    return data.cast;
  }

  return data;
};

// Load Movie ========================
export const loadMovie = async (params) => {
  const { type, id } = params;

  return {
    info: await loadMovieData(`${base_url}${type}/${id}?api_key=${API_KEY}`),
    cast: await loadMovieData(
      `${base_url}${type}/${id}/credits?api_key=${API_KEY}`
    ),
    videos: await loadMovieData(
      `${base_url}${type}/${id}/videos?api_key=${API_KEY}`
    ),
    images: await loadMovieData(
      `${base_url}${type}/${id}/images?api_key=${API_KEY}`
    ),
    reviews: await loadMovieData(
      `${base_url}${type}/${id}/reviews?api_key=${API_KEY}`
    ),
  };
};

export const loadSimilarMovies = async (params) => {
  const { type, id } = params;

  const data = await loadMovieData(
    `${base_url}${type}/${id}/recommendations?api_key=${API_KEY}`,
    params
  );

  return {
    ...data,
    results: data.results,
  };
};
//=================================================================
//* Load Person Detail Data
export const loadPersonData = async (params) => {
  const personId = params.personId;

  const res = await fetch(`${base_url}/person/${personId}?api_key=${API_KEY}`);

  if (res.status !== 200) {
    throw json(
      { message: "cannot fetch person data!" },
      { status: res.status }
    );
  }

  const data = await res.json();
  return data;
};

//* Load Person Media
export const loadPersonMedia = async (params) => {
  const personId = params.personId;

  const res = await fetch(
    `${base_url}/person/${personId}/movie_credits?api_key=${API_KEY}`
  );

  if (res.status !== 200) {
    throw json(
      { message: "cannot fetch person media!" },
      { status: res.status }
    );
  }

  const data = await res.json();

  return data.cast.map((item) => {
    return {
      ...item,
      media_type: "movie",
    };
  });
};

//* Person Details Loader
// export const personDetailsLoader = async ({ params }) => {
//   return defer({
//     person: await loadPersonData(params),
//     personMedia: await loadPersonMedia(params),
//   });
// };
