import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Profile from '../profile/Profile';
import store from '../../redux/configureStore';
import '@testing-library/jest-dom';

it('Check if the component has changed', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Profile />
    </Provider>,

  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render the main container', () => {
  render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );

  const container = screen.getByTestId('main-container');

  expect(container).toBeInTheDocument();
});
