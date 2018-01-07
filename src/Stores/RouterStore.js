/* eslint-disable no-param-reassign */

import { types } from 'mobx-state-tree';

const RouterStore = types
  .model('RouterStore', {
    currentRoute: '/',
  })
  .views(self => ({
    get route() {
      console.log('route:', self.currentRoute);
      return self.currentRoute;
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
      console.log('popstate', event);
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
