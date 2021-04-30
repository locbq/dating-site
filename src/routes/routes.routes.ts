import Home from 'pages/Home';
import SignUp from 'pages/SignUp';

import { RouteModel } from 'types/route/route.model';

import {
  PATH_BASE,
  PATH_LOGIN,
  PATH_SIGN_UP,
} from './routes.paths';

const appRoutes: RouteModel[] = [
  {
    exact: true,
    path: PATH_BASE,
    component: Home,
  },
  {
    exact: true,
    path: PATH_LOGIN,
    component: Home,
  },
  {
    exact: true,
    path: PATH_SIGN_UP,
    component: SignUp,
  },
];

export default appRoutes;
