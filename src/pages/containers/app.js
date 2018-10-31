import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Route, Switch, Redirect } from 'react-router-dom';

import reducer from '../../reducers/index';

import Videos from './videos';
import Home from '../components/home';
import Header from '../components/header';
import Video from './video';
import NotFound from '../components/not-found';

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk)
  )
  /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), */
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/videos/:id" component={Video} />
          <Redirect from="/v" to="/videos" />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Provider>
    )
  }
}

export default App;


