import { AsyncStorage } from '@react-native-community/async-storage'

const cacher = {
  get: async url => {
    const key = `@SuperStore:${url}`
    try {
      const data = await AsyncStorage.getItem(key)
      return data !== null && Object.keys(JSON.parse(data)).length > 0
    } catch (error) {
      return null
    }
  },
  set: (url, data) => {
    const key = `@SuperStore:${url}`
    try {
      AsyncStorage.setItem(key, JSON.stringify(data))
      return data
    } catch (error) {
      return data
    }
  }
}

const fetcher = {
  get: async url => {
    const cache = await cacher.get(url)
    if (cache) return cache

    const request = await fetch(url, {
      method: 'GET',
      cache: 'only-if-cached'
    })
      .then(res => res.json())
      .then(data => cacher.set(url, data))
    return request
  },
  post: async (url, body = {}) => {
    const cache = await cacher.get(`${url}-${JSON.stringify(body)}`)
    if (cache) return cache

    const request = await fetch(url, {
      method: 'POST',
      cache: 'only-if-cached',
      body
    })
      .then(res => res.json())
      .then(data => cacher.set(url, data))
    return request
  }
}
export default fetcher
