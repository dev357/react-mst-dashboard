/* eslint-disable no-param-reassign */

import { types, getSnapshot } from 'mobx-state-tree';

const ThemeStore = types
  .model('ThemeStore', {
    appBarHeight: '3rem',

    footerHeight: '6rem',

    drawerWidth: '20rem',
    drawerTransitionTime: '0.5s',

    paddingSmall: '1rem',

    colorPrimary: 'rgb(25, 118, 210);',
    colorSecondary: 'magenta',
    colorLight: 'rgb(240, 240, 240)',
    colorMedium: 'rgb(200, 200, 200)',
    colorDark: 'dimgray',
    colorWhite: 'white',

    textColorLight: 'white',
  })
  .views(self => ({
    get theme() {
      return getSnapshot(self);
    },
  }));

export default ThemeStore;
