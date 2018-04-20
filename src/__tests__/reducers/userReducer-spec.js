import userReducer from "../../reducers/userReducer";

describe("User Reducer", () => {

  it("Should add an array of users to the state", () => {
    const statechange = userReducer(undefined, {
      type: "GET_USERS_LIST_SUCCESS",
      payload: [{
        firstname: "Test",
        lastname: "User",
        username: "testuser",
        email: "test@test.com"
      }]
    });

    expect(statechange)
    .toEqual(expect.objectContaining({
      users: [{
        firstname: "Test",
        lastname: "User",
        username: "testuser",
        email: "test@test.com"
      }]
    }));
  });

  it("Should return the default state", () => {
    const statechange = userReducer(undefined, {
      type: "SOMETHING_NOT_THERE",
      payload: []
    });

    expect(statechange)
    .toEqual(expect.objectContaining({
      users: []
    }));
  });

});
