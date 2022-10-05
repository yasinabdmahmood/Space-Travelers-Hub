import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from '../navbar/Navbar';
import store from '../../redux/configureStore';
import '@testing-library/jest-dom';

it('Check if the component has changed', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
      </Provider>
    </BrowserRouter>,

  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render the main container', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
      </Provider>
    </BrowserRouter>,
  );

  const container = screen.getByTestId('main-container');

  expect(container).toBeInTheDocument();
});
