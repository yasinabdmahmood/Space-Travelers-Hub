import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../missions/Missions';
import store from '../../redux/configureStore';
import '@testing-library/jest-dom';

it('Check if the component has changed', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>,

  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render a div ', () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>
  );

  const mission = screen.getByTestId('list-of-missions');

  expect(mission).toBeInTheDocument();
});
