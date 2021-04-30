import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Theme from 'theme';
import { RouteModel } from 'types/route/route.model';
import appRoutes from 'routes/routes.routes';

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
        <div className="App">
          <Switch>
            {renderRoutes(appRoutes)}
          </Switch>
          <h1>Hello World</h1>
        </div>
      </Router>
    </Theme>
  );
}

export default App;
