/* eslint-disable no-undef */

export const API_BASE = 'https://us-central1-bonsai-interview-endpoints.cloudfunctions.net'
export default {
  IS_DEVELOPMENT: __DEV__,
  IS_PRODUCTION: !__DEV__,
  API_BASE
}
