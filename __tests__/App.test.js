import React from 'react';
import { create } from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  jest.useFakeTimers();
  const screen = create(<App />).toJSON();

  it(`renders correctly`, () => {
    expect(screen).toMatchSnapshot();
  });

});