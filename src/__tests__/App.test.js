import React from 'react'
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../js/App'
import Header from '../js/components/header/Header.jsx'
import Navigation from '../js/components/navigation/Navigation.jsx'

const mockedStore = configureStore();
const storeStateMock = {
  currentLocation: "/",
  currentSeeCartMode: false,
  currentProductsSortMode: "ASC"
};

let store;
let component;
describe('<App />', () => {
  beforeEach((() => {
    store = mockedStore(storeStateMock);
    component = shallow(<App store={store}/>);
  }))

  it('renders navigation', () => {
    expect(component).to.contain(<Navigation/>);
  })

  it('renders header', () => {
    let user = {
      firstName: "Nicholas",
      lastName: "BRUN"
    };
    expect(component).to.contain(<Header user={user}/>);
  })
})
