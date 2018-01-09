import React from 'react';
import Loadable from 'react-loadable';
import { ACCESSGROUPS } from 'enums';

const LoadableColors = Loadable({
  loader: () => import('Pages/Colors/Colors'),
  loading() {
    console.log('loading!');
    return <div>Loading...</div>;
  },
});

export default [
  {
    url: '/',
    name: 'Home',
    access: ACCESSGROUPS.PUBLIC,
    component: <div>HOME</div>,
  },
  {
    url: '/colors',
    name: 'Colors',
    access: ACCESSGROUPS.DEVELOPER,
    component: <LoadableColors />,
  },
  {
    url: '/public',
    name: 'Public',
    access: ACCESSGROUPS.PUBLIC,
    component: <div>PUBLIC</div>,
  },
  {
    url: '/private',
    name: 'Private',
    access: ACCESSGROUPS.WORKER,
    component: <div>PRIVATE</div>,
  },
  {
    url: '/dev',
    name: 'Dev',
    access: ACCESSGROUPS.DEVELOPER,
    component: <div>DEV</div>,
  },
];

export const not_found = {
  url: '/404',
  name: 'Not Found',
  access: ACCESSGROUPS.PUBLIC,
  component: <div>Unknown route</div>,
};
