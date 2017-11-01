import 'babel-polyfill'
import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './Views/RootView'
import configureStore from './app/store/configureStore'
import {Router, Route, browserHistory} from 'react-router'

const store = configureStore();

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>
)

export default Routes
