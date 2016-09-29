import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers';
import { Router, routerReducer, Route, Animations, Schema } from 'react-native-redux-router';

import article from './views/Article';
import frontpage from './views/Frontpage';

let store = createStore(rootReducer);
// let store = createStore(combineReducers({routerReducer}));

export default function app(){
  class DGITL extends Component {

    render() {
      return (
        <Provider store={store}>
          <Router>
            <Schema name="modal" sceneConfig={Animations.FlatFloatFromBottom} />
            <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} />
            
            <Route name="frontpage" component={frontpage} initial={true} hideNavBar={true} title="frontpage"/>
            <Route name="article" component={article} title="frontpage" schema="modal"/>
          </Router>
        </Provider>
      );
    }
  }

  AppRegistry.registerComponent('DGITL', () => DGITL);
}
