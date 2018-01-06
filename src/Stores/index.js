import { types } from 'mobx-state-tree';
import ViewStore from './ViewStore';
import ThemeStore from './ThemeStore';

const Store = types
  .model('Store', {
    view: types.optional(ViewStore, {}),
    heading: 'react-mst-dashboard',
    theme: types.optional(ThemeStore, {}),
  })
  .views(self => ({
    get headingTest() {
      return `${self.heading}-test`;
    },
  }));

export default Store;
