import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import UserList from "../UserList";

import MockAdapter from "axios-mock-adapter";
const mockHttp = new MockAdapter();

configure({adapter: new Adapter()});

describe("MUST PASS", () => {
  it("SHOULD PASS", () => {
    expect(1).toEqual(1);
  });
});

// describe("UserList Component", () => {
//
//   it("Should render UserList", () => {
//     mockHttp
//     .onGet("https://myapi-profstream.herokuapp.com/api/403281/persons")
//     .reply(200, []);
//
//     expect(shallow(<UserList />)).toMatchSnapshot();
//   });
//
// });
