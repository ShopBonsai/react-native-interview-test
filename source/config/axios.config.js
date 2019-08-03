/**
 * Make axios a configurable object as well with several possible interceptors
 * for requests and responses, and with several axios instances.
 * Unauthorized requests, authorized requests, data based headers request, you name it.
 * Love it! 🥰
 */
import axios from "axios"

import env from "../env"

/**
 * Basic Axios for all requests
 */
const axiosClient = axios.create({
  baseURL: env.API_URL,
})

export default axiosClient
