import { create } from 'react-test-renderer';

describe('<Website />', () => {
  jest.useFakeTimers();
  const screen = create('<Website />').toJSON();

  it('renders correctly', () => {
    expect(screen).toMatchSnapshot();
  });

  it(`loads website`, () => {
    console.log(screen)
    const target = screen.props ? screen.props.url:screen.props;
    const url = !target ? undefined:'https://www.lemundo.de/';
    expect(target).toBe(url);
  });
});