import { apiConfig } from "./api-config";
const { base_url, API_KEY } = apiConfig;

const seriesUrls = {
  airingToday: {
    url: `${base_url}tv/airing_today?api_key=${API_KEY}`,
    media_type: "tv",
  },
  popular: {
    url: `${base_url}tv/popular?api_key=${API_KEY}`,
    media_type: "tv",
  },
  topRated: {
    url: `${base_url}tv/top_rated?api_key=${API_KEY}`,
    media_type: "tv",
  },
};

export default seriesUrls;
