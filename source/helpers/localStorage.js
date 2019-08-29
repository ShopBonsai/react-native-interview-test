import AsyncStorage from "@react-native-community/async-storage"

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
