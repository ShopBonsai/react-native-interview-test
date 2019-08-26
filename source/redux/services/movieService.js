import axios from "axios"

import { movieTicketsUrl } from "../../configs/urlList"

export function fetchMovies(skip, limit) {
  console.log('serviceCalled', movieTicketsUrl,skip,limit);
  return axios.get(movieTicketsUrl, {
    params: {
      skip,
      limit,
    },
  })
}

export default fetchMovies
