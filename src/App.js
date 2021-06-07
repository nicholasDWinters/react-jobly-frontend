import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import CompanyDetails from './CompanyDetails';
import CompanyList from './CompanyList';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Profile from './Profile';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/companies/:handle'><CompanyDetails /></Route>
        <Route exact path='/companies'><CompanyList /></Route>
        <Route exact path='/jobs'><JobList /></Route>
        <Route exact path='/login'><LoginForm /></Route>
        <Route exact path='/signup'><SignupForm /></Route>
        <Route exact path='/profile'><Profile /></Route>
        <Route exact path='/'><Home /></Route>
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
