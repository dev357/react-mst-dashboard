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
    primary: 'lightBlue',
    secondary: 'orange',
    colorPrimary: 'rgb(25, 118, 210);',
    colorSecondary: 'magenta',
    colorLight: 'rgb(240, 240, 240)',
    colorMedium: 'rgb(200, 200, 200)',
    colorDark: 'dimgray',
    colorWhite: 'white',
    cTest: 100,

    textColorLight: 'white',
  })
  .views(self => ({
    get theme() {
      return getSnapshot(self);
    },
    get colorTest() {
      return self.cTest;
    },
    get cPrimary() {
      const h = 100;
      const s = 50;
      const l = 50;
      const a = 1;

      return {
        50: self.getColor(h, s, l, a, 50),
        100: self.getColor(h, s, l, a, 100),
        200: self.getColor(h, s, l, a, 200),
        300: self.getColor(h, s, l, a, 300),
        400: self.getColor(h, s, l, a, 400),
        500: self.getColor(h, s, l, a, 500),
        600: self.getColor(h, s, l, a, 600),
        700: self.getColor(h, s, l, a, 700),
        800: self.getColor(h, s, l, a, 800),
        900: self.getColor(h, s, l, a, 900),
      };
    },
  }))
  .actions(self => ({
    getColor(h, s, l, a, val) {
      let lightness = l;
      switch (val) {
        case 50:
          lightness = Math.round(l + (100 - l) * 0.9);
          break;
        case 100:
          lightness = Math.round(l + (100 - l) * 0.8);
          break;
        case 200:
          lightness = Math.round(l + (100 - l) * 0.6);
          break;
        case 300:
          lightness = Math.round(l + (100 - l) * 0.4);
          break;
        case 400:
          lightness = Math.round(l + (100 - l) * 0.2);
          break;
        case 500:
          lightness = l;
          break;
        case 600:
          lightness = Math.round(l - l * 0.2);
          break;
        case 700:
          lightness = Math.round(l - l * 0.4);
          break;
        case 800:
          lightness = Math.round(l - l * 0.6);
          break;
        case 900:
          lightness = Math.round(l - l * 0.8);
          break;
        default:
          lightness = l;
      }

      return `hsla(${h},${s}%,${lightness}%,${a})`;
    },
  }));

export default ThemeStore;
