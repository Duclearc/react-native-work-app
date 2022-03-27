import React from 'react';
import { create } from 'react-test-renderer';
import { StyledText } from '../components/StyledText';
import { fontStyles } from '../constants/Fonts';

describe('<StyledText />', () => {
  jest.useFakeTimers();
  const screen = create(<StyledText />).toJSON();

  it('renders correctly', () => {
    expect(screen).toMatchSnapshot();
  });

  it(`loads stylesheet`, () => {
    expect(screen.props.style[0]).toBe(fontStyles.lemFont);
  });
});