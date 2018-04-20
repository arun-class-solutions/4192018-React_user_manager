const initialState = {
  users: []
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case "GET_USERS_LIST_SUCCESS": {
      return Object.assign({}, state, {
        users: action.payload
      });
    }

    default: {
      return state;
    }
  }
}

export default userReducer;
