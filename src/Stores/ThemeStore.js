/* eslint-disable no-param-reassign */

import { types, getSnapshot } from 'mobx-state-tree';
import Color from './ColorStore';
import colors from './colors';

const ThemeStore = types
  .model('ThemeStore', {
    appBarHeight: '3rem',

    footerHeight: '6rem',

    drawerWidth: '17rem',
    drawerTransitionTime: '0.5s',

    paddingSmall: '1rem',

    // color
    colors: types.optional(types.map(Color), colors),
    primary: types.optional(types.reference(Color), 'blue'),
    secondary: 'orange',
    black: 'black',
    white: 'white',
    gray: 'gray',
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
      return {
        ...getSnapshot(self),
      };
    },
    get color() {
      return {
        primary: self.primary,
        secondary: self.colors.get(self.secondary),
        black: self.colors.get(self.black),
        white: self.colors.get(self.white),
        gray: self.colors.get(self.gray),
      };
    },
  }))
  .actions(self => ({
    setPrimary(color) {
      self.primary = color;
    },
  }));

export default ThemeStore;
