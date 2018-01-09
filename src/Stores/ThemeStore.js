/* eslint-disable no-param-reassign */

import { types, getSnapshot } from 'mobx-state-tree';
import { hslToRgb, luminance } from 'lib/colorConversion.js';
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
  }))
  .actions(self => ({
    getColor(name, l) {
      const color = self.colors.get(name);
      let newL = color.l;
      if (l > 50) {
        const scale = 100 - color.l;
        newL = self.darken(color.l, (l - 50) * 2);
      } else if (l < 50) {
        newL = self.lighten(color.l, (50 - l) * 2);
      }

      return Color.create({
        name: 'getColor',
        h: color.h,
        s: color.s,
        l: color.l,
      });
    },
    lighten(from, percentage) {
      const scale = 100 - from;
      return from + scale * (percentage / 100);
    },
    darken(from, percentage) {
      return from - from * (percentage / 100);
    },
  }));

export default ThemeStore;
