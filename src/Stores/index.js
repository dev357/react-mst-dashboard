/* eslint-disable no-param-reassign */

import { types } from 'mobx-state-tree';
import ViewStore from './ViewStore';
import ThemeStore from './ThemeStore';
import RouterStore from './RouterStore';

const Store = types
  .model('Store', {
    view: types.optional(ViewStore, {}),
    heading: 'react-mst-dashboard',
    theme: types.optional(ThemeStore, {}),
    router: types.optional(RouterStore, {}),
  })
  .views(self => ({
    get headingTest() {
      return `${self.heading}-test`;
    },
  }));

export default Store;
