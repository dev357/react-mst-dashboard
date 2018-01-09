/* eslint-disable no-param-reassign */

import { types } from 'mobx-state-tree';
import { ACCESSGROUPS } from 'enums';
import routes, { not_found } from './routes';

const RouterStore = types
  .model('RouterStore', {
    accessGroup: ACCESSGROUPS.DEVELOPER,
    currentPath: '/',
    // routes,
  })
  .views(self => ({
    get route() {
      return routes.find(route => route.url === self.currentPath) || not_found;
    },
    get allowedRoutes() {
      return routes.filter(route => route.access <= self.accessGroup);
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
      if (self.currentPath !== url) {
        window.history.pushState({ url }, `router: ${url}`, url);
        self.changeRoute(url);
      }
    },
    changeRoute(url) {
      self.currentPath = url;
    },
  }));

export default RouterStore;
