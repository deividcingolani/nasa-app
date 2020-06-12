import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AppComponent from "../AppComponent";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = shallow(<AppComponent />);
  return {
    enzymeWrapper,
  };
}

describe("components", () => {
  describe("<AppComponent />", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(".ContainerRender").length).toEqual(1);
  });
});
