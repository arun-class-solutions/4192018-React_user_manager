import axios from "axios";
import { BASE_URL } from "../config/app-constants";

export const getAllUsers = () => {
  return (dispatch) => {
    return axios
    .get("https://myapi-profstream.herokuapp.com/api/403281/persons")
    .then((response) => {
      dispatch({
        type: "GET_USERS_LIST_SUCCESS",
        payload: response.data
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

export const getSingleUser = (id) => {
  return (dispatch) => {
    return axios
    .get(`${BASE_URL}/${id}`)
    .then((response) => {
      dispatch({
        type: "GET_ONE_USER_SUCCESS",
        payload: response.data
      });
    })
    .catch((err) => {
      alert("Error getting user!");
    });
  }
}

export const editUserTyping = (name, value) => {
  return (dispatch) => {
    dispatch({
      type: "EDIT_USER_TYPING",
      payload: {
        [name]: value
      }
    });
  }
}
