/* eslint-disable no-param-reassign */

import { types } from 'mobx-state-tree';
import { hslToHex, hslToRgb } from 'lib/colorConversion.js';

const ColorStore = types
  .model('ColorStore', {
    name: types.string,
    h: types.number,
    s: types.number,
    l: types.number,
  })
  .views(self => ({
    get hsl() {
      return `hsl(${self.h},${self.s}%,${self.l}%)`;
    },
    get hsla() {
      return `hsl(${self.h},${self.s}%,${self.l}%,1)`;
    },
    get rgb() {
      const rgb = hslToRgb(self.h, self.s, self.l);
      return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    },
    get rgba() {
      const rgb = hslToRgb(self.h, self.s, self.l);
      return `rgb(${rgb[0]},${rgb[1]},${rgb[2]},1)`;
    },
    get hex() {
      return hslToHex(self.h, self.s, self.l);
    },
  }));

export default ColorStore;
