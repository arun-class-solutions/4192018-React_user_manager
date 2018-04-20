import axios from "axios";

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
