import { ACCESSGROUPS } from 'enums';

export default {
  public: {
    route: '/public',
    name: 'public',
    access: ACCESSGROUPS.PUBLIC,
  },
  private: {
    route: '/private',
    name: 'private',
    access: ACCESSGROUPS.WORKER,
  },
  dev: {
    route: '/dev',
    name: 'dev',
    access: ACCESSGROUPS.DEVELOPER,
  },
  home: {
    route: '/',
    name: 'home',
    access: ACCESSGROUPS.PUBLIC,
  },
};
