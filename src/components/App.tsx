import './App.css';
import { MAIN_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../utils/url';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import LoginForm from './login/loginForm';
import React from 'react';
import RegisterForm from './login/registerForm';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route redirectToLogin={false} exact={true} path={MAIN_ROUTE}>
          <p>Test main</p>
        </Route>
        <Route redirectToLogin={false} exact={true} path={LOGIN_ROUTE} component={LoginForm} />
        <Route redirectToLogin={false} path={REGISTER_ROUTE} component={RegisterForm} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
