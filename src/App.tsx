import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';

import Theme from 'theme';
import { RouteModel } from 'types/route/route.model';
import appRoutes from 'routes/routes.routes';
import bgImg from 'assets/images/bg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledDivApp = styled.div`
  background-image: url(${bgImg});
  backgroubd-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

function App() {
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
            {renderRoutes(appRoutes)}
          </Switch>
        </StyledDivApp>
      </Router>
    </Theme>
  );
}

export default App;
