import Home from 'pages/Home';
import Login from 'pages/Login';
import PersonalInformation from 'pages/SignUp/PersonalInformation';
import Preference from 'pages/SignUp/Preference';
import Result from 'pages/Result';

import { RouteModel } from 'types/route/route.model';

import {
  PATH_BASE,
  PATH_LOGIN,
  PATH_RESULT,
  PATH_SIGN_UP_PERSONAL_INFORMATION,
  PATH_SIGN_UP_PREFERENCE,
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
    path: PATH_SIGN_UP_PERSONAL_INFORMATION,
    component: PersonalInformation,
  }, {
    exact: true,
    path: PATH_SIGN_UP_PREFERENCE,
    component: Preference,
  },
  {
    exact: true,
    path: PATH_RESULT,
    component: Result,
  },
];

export default appRoutes;
