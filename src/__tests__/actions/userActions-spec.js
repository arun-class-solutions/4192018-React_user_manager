import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../../actions/userActions";

import MockAdapter from "axios-mock-adapter";
const mockHttp = new MockAdapter(axiosInstance);

const mockStore = configureMockStore([thunk]);

describe("User Action Tests", () => {

  it("getAllUsers action", () => {
    const store = mockStore();

    mockHttp
    .onGet("https://myapi-profstream.herokuapp.com/api/403281/persons")
    .reply(200, []);

    store
    .dispatch(actions.getAllUsers())
    .then(() => {
      expect(store.getActions())
      .toEqual([
        { type: "GET_USERS_LIST_SUCCESS", payload: [] }
      ]);
    });
  });

});
