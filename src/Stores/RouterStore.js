/* eslint-disable no-param-reassign */

import { types } from 'mobx-state-tree';
import { ACCESSGROUPS } from 'enums';
import routes from './routes';

const RouterStore = types
  .model('RouterStore', {
    accessGroup: ACCESSGROUPS.DEVELOPER,
    currentRoute: '/',
    // routes,
  })
  .views(self => ({
    get route() {
      console.log('route:', self.currentRoute);
      return self.currentRoute;
    },
    get drawerLinks() {
      const arr = Object.keys(routes);
      return arr.map(route => routes[route]).filter(route => route.access <= self.accessGroup);
    },
  }))
  .actions(self => ({
    afterCreate() {
      const url = document.location.pathname;
      window.history.replaceState(
        {
          url,
        },
        document.title,
        document.location.href,
      );
      self.changeRoute(url);

      window.addEventListener('popstate', self.popStateListener);
    },
    beforeDestroy() {
      window.removeEventListener('popstate', self.popStateListener);
    },
    popStateListener(event) {
      self.changeRoute(event.state.url);
    },
    goTo(url) {
      if (self.currentRoute !== url) {
        window.history.pushState({ url }, `router: ${url}`, url);
        self.changeRoute(url);
      }
    },
    changeRoute(url) {
      self.currentRoute = url;
    },
  }));

export default RouterStore;
