const initialState = {
  users: [],
  firstname: "",
  lastname: "",
  username: "",
  email: ""
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case "GET_USERS_LIST_SUCCESS": {
      return Object.assign({}, state, {
        users: action.payload
      });
    }

    case "GET_ONE_USER_SUCCESS": {
      return Object.assign({}, state, action.payload);
    }

    case "EDIT_USER_TYPING": {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
}

export default userReducer;
