import { fetchDataSuccess } from "./article-slice";
import axios from "axios";

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get('http://206.189.156.24:8080/api/article');
    const jsonData = response.data.data;
    // console.log('yaha', response.data.data)
    dispatch(fetchDataSuccess(jsonData));
  } catch (error) {
    // Handle errors
  }
};