import React, {
  useEffect,
  useCallback,
  ReactElement,
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addUsers } from 'store/user/user.action';

import Theme from 'theme';
import { RouteModel } from 'types/route/route.model';
import appRoutes from 'routes/routes.routes';
import bgImg from 'assets/images/bg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { defaultUserList } from 'data/users.data';
import useUsers from 'hooks/useUsers';
import {
  PATH_SIGN_UP,
  PATH_SIGN_UP_PERSONAL_INFORMATION,
} from 'routes/routes.paths';

const StyledDivApp = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

function App() {
  const dispatch = useDispatch();
  const users = useUsers();
  const addUserToList = useCallback(() => {
    if (users.length === 0) {
      dispatch(addUsers(defaultUserList));
    }
  }, [dispatch, users.length]);
  useEffect(() => {
    addUserToList();
  }, [addUserToList]);

  const renderRoutes = (routes: RouteModel[]) => routes.map((route) => (<Route
    exact={route.exact}
    key={route.path}
    path={route.path}
    component={route.component}
  />));

  return (
    <Theme>
      <Router>
        <StyledDivApp>
          <Switch>
            <Route
              exact
              path={PATH_SIGN_UP}
              render={(): ReactElement => <Redirect to={PATH_SIGN_UP_PERSONAL_INFORMATION} />}
            />
            {renderRoutes(appRoutes)}
          </Switch>
        </StyledDivApp>
      </Router>
    </Theme>
  );
}

export default App;
