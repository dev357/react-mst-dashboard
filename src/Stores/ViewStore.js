// eslint-disable no-param-reassign

import { types } from 'mobx-state-tree';
import { observe } from 'mobx';

const BREAKPOINTS = Object.freeze({
  XS: 0,
  SM: 1,
  MD: 2,
  LG: 3,
  XL: 4,
});

const ViewStore = types
  .model('ViewStore', {
    width: window.innerWidth,
    navBarOpen: true,
    navBarDocked: false,
  })
  .views(self => ({
    get breakpoint() {
      if (self.width < 600) return BREAKPOINTS.XS;
      if (self.width < 960) return BREAKPOINTS.SM;
      if (self.width < 1280) return BREAKPOINTS.MD;
      if (self.width < 1920) return BREAKPOINTS.LG;
      return BREAKPOINTS.XL;
    },
    get navBarState() {
      const open = self.navBarOpen;
      let docked = self.navBarDocked;
      if (self.breakpoint === BREAKPOINTS.XS) {
        docked = false;
      }

      return {
        open,
        docked,
      };
    },
  }))
  .actions(self => ({
    afterCreate() {
      window.addEventListener('optimizedResize', self.setWidth);
      // self.breakpointAutorun = autorun(() => {
      //   if (self.navBarDocked) {
      //     if (self.breakpoint <= BREAKPOINTS.XS) self.setNavBarOpen(false);
      //     if (self.breakpoint > BREAKPOINTS.XS && self.navBarDocked) self.setNavBarOpen(true);
      //   }
      // });
      self.breakpointObserver = observe(self, 'breakpoint', (change) => {
        if (self.navBarDocked) {
          if (!(change.oldValue <= BREAKPOINTS.XS) && change.newValue <= BREAKPOINTS.XS) {
            self.setNavBarOpen(false);
          }
          if (
            !(change.oldValue > BREAKPOINTS.XS) &&
            self.breakpoint > BREAKPOINTS.XS &&
            self.navBarDocked
          ) {
            self.setNavBarOpen(true);
          }
        }
      });
    },
    beforeDestroy() {
      window.removeEventListener('optimizedResize', self.setWidth);
      self.breakpointObserver(); // dispose of the observer
    },
    setWidth() {
      self.width = window.innerWidth;
    },
    toggleNavBarOpen() {
      self.setNavBarOpen(!self.navBarOpen);
    },
    setNavBarOpen(isOpen) {
      self.navBarOpen = isOpen;
    },
    toggleNavBarDocked() {
      self.setNavBarDocked(!self.navBarDocked);
    },
    setNavBarDocked(isDocked) {
      self.navBarDocked = isDocked;
    },
  }));

export default ViewStore;
