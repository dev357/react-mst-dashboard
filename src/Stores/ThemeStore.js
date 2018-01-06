// eslint-disable no-param-reassign

import { types } from 'mobx-state-tree';

const ThemeStore = types.model('ThemeStore', {
  appBarHeight: '1rem',
  paddingSmall: '1rem',

  colorPrimary: 'cyan',
  colorSecondary: 'magenta',
  colorLight: 'lightgray',
  colorDark: 'black',
});

export default ThemeStore;
