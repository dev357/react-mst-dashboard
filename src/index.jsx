import React from 'react';
import { render } from 'react-dom';
import { getSnapshot, destroy } from 'mobx-state-tree';
import { injectGlobal } from 'styled-components';
import App from './App';
import Store from './Stores/index';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html, body {
    margin: 0;
    height: 100vh;
  }
`;

const initialState = {};
let store;

function createStore(snapshot) {
  // kill old store to prevent accidental use and run clean up hooks
  if (store) destroy(store);
  // create new store
  store = Store.create(snapshot);
  return store;
}

function renderApp(RenderApp, renderStore) {
  render(<RenderApp store={renderStore} />, document.getElementById('app'));
}

renderApp(App, createStore(initialState));

// Connect HMR
if (module.hot) {
  module.hot.accept(['./App.jsx'], () => {
    renderApp(App, store);
  });
  module.hot.accept(['./Stores/index.js'], () => {
    renderApp(App, createStore(getSnapshot(store)));
  });
}

// Throttled resize event optimizedResize
(function optimizedResize() {
  const throttle = (type, name, obj = window) => {
    // obj = obj || window;
    let running = false;
    const func = () => {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle('resize', 'optimizedResize');
}());
