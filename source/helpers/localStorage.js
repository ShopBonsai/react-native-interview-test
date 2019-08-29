import AsyncStorage from "@react-native-community/async-storage"
/**
 * Sets data to async storage.
 *
 * @param {string} key - Key value to store.
 * @param {any} data - Data to store.
 * @param {bool} isJson - Default: True, If data is json then it will stringify before set.
 * @returns {Null} .
 */
export const setItem = async (key, data, isJson = true) => {
  try {
    if (isJson) {
      data = JSON.stringify(data)
    }
    await AsyncStorage.setItem(key, data)
  } catch (error) {
    // Error saving data
  }
}

/**
 * Gets data from async storage.
 *
 * @param {string} key - Key value to store.
 * @param {bool} isJson - Default: True, If data is json then it will parse before get.
 * @returns {any} Data that was stored.
 */
export const getItem = async (key, isJson = true) => {
  try {
    let value = await AsyncStorage.getItem(key)
    if (isJson) {
      value = JSON.parse(value)
    }
    return value
  } catch (error) {
    // Error retrieving data
  }
}
