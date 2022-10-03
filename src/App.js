import './App.css';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Rockets from './components/rockets/Rockets';

function App() {
  return (
    <Provider store={store}>
      <Rockets />
    </Provider>
  );
}

export default App;
