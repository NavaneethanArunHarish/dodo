import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import './index.css';
import App from './App';
import SimulatorComponent from './component/simulatorComponent';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configure';

const store = configureStore();

ReactDOM.render( 
<Provider store={store}>
    <div>
      <Router history={browserHistory}>
        {/* For temprory purpose */}
        <Route path='/' component={App} />
        <Route path='/Simulator' component={SimulatorComponent} />
      </Router>
    </div>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
