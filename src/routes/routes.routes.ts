import Home from 'pages/Home';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import Result from 'pages/Result';

import { RouteModel } from 'types/route/route.model';

import {
  PATH_BASE,
  PATH_LOGIN,
  PATH_SIGN_UP,
  PATH_RESULT,
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
    component: Login,
  },
  {
    exact: true,
    path: PATH_SIGN_UP,
    component: SignUp,
  },
  {
    exact: true,
    path: PATH_RESULT,
    component: Result,
  },
];

export default appRoutes;
