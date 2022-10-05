import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../rockets/Rockets';
import store from '../../redux/configureStore';
import '@testing-library/jest-dom';

it('Check if the component has changed', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Rockets />
    </Provider>,

  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render a div container', () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  const rocket = screen.getByTestId('list-of-rockets');

  expect(rocket).toBeInTheDocument();
});
