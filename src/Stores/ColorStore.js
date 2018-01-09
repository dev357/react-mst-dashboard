/* eslint-disable no-param-reassign */

import { types } from 'mobx-state-tree';
import { hslToHex, hslToRgb, luminance } from 'lib/colorConversion.js';

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
    get luminance() {
      return luminance(hslToRgb(self.h, self.s, self.l));
    },
    get contrastColor() {
      return self.luminance > 0.179 ? 'black' : 'white';
    },
  }))
  .actions(self => ({
    lighten(percentage) {
      const scale = 100 - self.l;
      const newL = self.l + scale * (percentage / 100);
      return ColorStore.create({
        name: `${self.name}-l-${percentage}`,
        h: self.h,
        s: self.s,
        l: newL,
      });
    },
    darken(percentage) {
      const newL = self.l - self.l * (percentage / 100);
      return ColorStore.create({
        name: `${self.name}-d-${percentage}`,
        h: self.h,
        s: self.s,
        l: newL,
      });
    },
  }));

export default ColorStore;
