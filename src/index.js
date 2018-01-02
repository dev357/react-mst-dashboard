import React from "react";
import { render } from "react-dom";
import { getSnapshot, destroy } from "mobx-state-tree";
import App from "./App";
import Store from "./Stores/index";

const initialState = {};
let store;

function createStore(snapshot) {
  // kill old store to prevent accidental use and run clean up hooks
  if (store) destroy(store);
  // create new store
  store = Store.create(snapshot);
  return store;
}

function renderApp(App, store) {
  render(<App store={store} />, document.getElementById("app"));
}

renderApp(App, createStore(initialState));

// Connect HMR
if (module.hot) {
  module.hot.accept(["./App.js"], () => {
    renderApp(App, store);
  });
  module.hot.accept(["./Stores/index.js"], () => {
    console.log("store update");
    renderApp(App, createStore(getSnapshot(store)));
  });
}
