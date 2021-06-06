import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import SignIn from './components/sign in/SignIn';
import SignUp from './components/sign up/SignUp';
import Dashboard from './components/mainPage/Dashboard';
import './App.global.css';
import POS from './components/pos/POS';

const Hello = () => {
  return <SignIn />;
};

export default function App() {
  return (
    <HashRouter>
      <Route exact path="/">
        <Redirect to="/SignIn" />
      </Route>

      <Route path="/dashboard/pos" exact component={POS} />
      <Route path="/SignIn" exact component={Hello} />
      <Route path="/Dashboard" exact component={POS} />
      <Route path="/SignUp" component={SignUp} />
    </HashRouter>
  );
}
