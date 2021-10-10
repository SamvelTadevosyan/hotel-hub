import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Search } from './pages/Search';
import { Hotels } from './pages/Hotels';
import configureStore from './store/store';
import './App.css';

const store = configureStore();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Search} exact />
          <Route path="/hotels" component={Hotels} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
