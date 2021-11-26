import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import RocketList from '../components/rockets';
import store from '../redux/configureStore';

jest.mock('../components/rockets')

describe('Group of tests for Rockets page', () => {

  it('renders rockets list correctly', () => {
    const list = renderer
      .create(<Provider store={store}><RocketList /></Provider>)
      .toJSON();
    expect(list).toMatchSnapshot();
  });

});