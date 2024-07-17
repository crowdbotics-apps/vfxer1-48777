import axios from "axios"
import {
  CONNECTOR_NEW_LMTEST_USERNAME,
  CONNECTOR_NEW_LMTEST_PASSWORD
} from "react-native-dotenv"
const newlmtest = axios.create({
  baseURL: "https://devstringx.com",
  auth: {
    username: CONNECTOR_NEW_LMTEST_USERNAME,
    password: CONNECTOR_NEW_LMTEST_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
