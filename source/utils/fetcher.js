const fetcher = {
  get: async url => {
    const request = await fetch(url, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => data)
    return request
  },
  post: async (url, body = {}) => {
    const request =await fetch(url, {
      method: 'POST',
      cache: 'force-cache',
      body
    })
      .then(res => res.json())
      .then(data => data)
    return request
  }
}
export default fetcher
