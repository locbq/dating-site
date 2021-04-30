import Login from 'pages/Login';
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
    component: Login,
  },
  {
    exact: true,
    path: PATH_LOGIN,
    component: Login,
  },
  {
    exact: true,
    path: PATH_SIGN_UP,
    component: SignUp,
  },
];

export default appRoutes;
