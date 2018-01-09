/* eslint-disable no-param-reassign */

import { types } from 'mobx-state-tree';
import { hslToHex, hslToRgb, luminance } from 'lib/colorConversion.js';

const ColorStore = types
  .model('ColorStore', {
    id: types.identifier(types.string),
    name: types.string,
    h: types.number,
    s: types.number,
    l: types.number,
    a: types.optional(types.number, 1),
  })
  .views(self => ({
    get hsl() {
      return `hsl(${self.h},${self.s}%,${self.l}%)`;
    },
    get hsla() {
      return `hsla(${self.h},${self.s}%,${self.l}%,${self.a})`;
    },
    get rgb() {
      const rgb = hslToRgb(self.h, self.s, self.l);
      return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    },
    get rgba() {
      const rgb = hslToRgb(self.h, self.s, self.l);
      return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${self.a})`;
    },
    get hex() {
      return hslToHex(self.h, self.s, self.l);
    },
    get luminance() {
      return luminance(hslToRgb(self.h, self.s, self.l));
    },
    get contrastColor() {
      return self.luminance > 0.179 ? '#000' : '#FFF';
    },
  }))
  .actions(self => ({
    lighten(percentage, a = 1) {
      const scale = 100 - self.l;
      const newL = self.l + scale * (percentage / 100);
      return ColorStore.create({
        id: `${self.id}-l-${percentage}`,
        name: `${self.name} l ${percentage}`,
        h: self.h,
        s: self.s,
        l: newL,
        a,
      });
    },
    darken(percentage, a = 1) {
      const newL = self.l - self.l * (percentage / 100);
      return ColorStore.create({
        id: `${self.id}-d-${percentage}`,
        name: `${self.name} d ${percentage}`,
        h: self.h,
        s: self.s,
        l: newL,
        a,
      });
    },
    getColor(l = 50, a = 1) {
      let newC;
      if (l >= 50) {
        newC = self.darken((l - 50) * 2, a);
      } else if (l < 50) {
        newC = self.lighten((50 - l) * 2, a);
      }

      return newC;
    },
  }));

export default ColorStore;
