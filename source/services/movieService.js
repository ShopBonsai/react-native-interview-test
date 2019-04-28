import { apiSettings } from "../settings";

const movieService = {
  getMovieList(skip = 0, limit = 10) {
    return fetch(apiSettings.getMovieList(skip, limit)).then((response) => response.json());
  },
};

export { movieService };
