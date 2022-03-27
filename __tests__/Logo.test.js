import React from 'react';
import { create } from 'react-test-renderer';
import { Logo, styles } from '../components/Logo';

describe('<Logo />', () => {

  const sizeProp = 'xl'
  const screen = create(<Logo size={sizeProp} />).toJSON();

  it('renders correctly', () => {
    expect(screen).toMatchSnapshot();
  });

  it(`loads stylesheet`, () => {
    expect(screen.props.style).toBe(styles[sizeProp]);
  });
});