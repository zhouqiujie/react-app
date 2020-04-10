import { IndexPage, AboutPage, HomePage } from './pages';
import { Route } from 'react-router-dom';
import React, { ClassicComponent } from 'react';

export interface RouteModel {
  path: string;
  exact?: boolean;
  component: any;
  routes?: RouteModel[];
}

interface functionComponent {
  (props?: object): JSX.Element;
}

class classComponent {}

export const SiteRoutes: RouteModel[] = [
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/',
    exact: true,
    component: IndexPage,
  },
];

export function RouteWithSubRoutes(route: RouteModel) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
