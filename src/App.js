import React, { useState, useEffect } from 'react';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
import JoblyApi from './api/api';
import './App.css';
import Navbar from './Navbar';
import CompanyDetails from './CompanyDetails';
import CompanyList from './CompanyList';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Profile from './Profile';
import Home from './Home';
import UserContext from './UserContext';
import ErrorContext from './ErrorContext';
import Error from './Errors';
import jwt from 'jsonwebtoken';

function App() {
  let [companies, setCompanies] = useState([]);
  let [jobs, setJobs] = useState([]);
  let [user, setUser] = useState({});
  let [token, setToken] = useState('');
  let history = useHistory();
  let [errors, setErrors] = useState([]);

  async function signup(data) {
    try {
      let token = await JoblyApi.signup(data);
      setUser(data);
      setToken(token);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setErrors([]);
      history.push('/companies');
    } catch (e) {
      setErrors(...e);
    }
  }

  async function login(data) {
    try {
      let token = await JoblyApi.login(data);
      setToken(token);
      localStorage.setItem('token', token);
      setUser(data);
      setErrors([]);
      history.push('/companies');
    } catch (e) {
      setErrors(...e);
    }

  }

  async function updateUser(data, creds) {
    try {
      const newData = { firstName: data.firstName, lastName: data.lastName, email: data.email };
      await JoblyApi.updateUser(user.username, newData);
      let token = await JoblyApi.login(creds);
      setToken(token);
      setErrors([]);
      history.push('/companies');
    } catch (e) {
      setErrors(e);
    }
  }

  function logout() {
    localStorage.clear();
    setUser({});
    setToken('');
    history.push('/');
  }

  function getUserFromLocalStorage() {
    // if (localStorage.user) setUser(JSON.parse(localStorage.user));
    if (localStorage.token) setToken(localStorage.token);
  }

  async function searchCompanies(name) {
    let companies;
    if (name !== '') {
      companies = await JoblyApi.getCompanies(name);
    } else {
      companies = await JoblyApi.getCompanies();
    }

    setCompanies(companies);
  }

  async function searchJobs(title) {
    let jobs;
    if (title !== '') {
      jobs = await JoblyApi.getJobs(title);
    } else {
      jobs = await JoblyApi.getJobs();
    }

    setJobs(jobs);
  }


  useEffect(() => {
    getUserFromLocalStorage();
    searchCompanies();
    searchJobs();
    setErrors([]);
  }, []);

  useEffect(() => {
    async function findUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          JoblyApi.token = token;
          let current = await JoblyApi.getCurrentUser(username);
          setUser(current);
          localStorage.setItem('user', JSON.stringify(current));
        } catch (e) {
          setErrors(e);
          setUser(null)
        }

      }
    }
    findUser();
  }, [token]);


  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <ErrorContext.Provider value={{ errors, setErrors }}>
          <Navbar logout={logout} />
          {errors.length ? <Error error={errors} /> : ''}
          <Switch>
            <Route exact path='/companies/:handle'><CompanyDetails /></Route>
            <Route exact path='/companies'><CompanyList companies={companies} search={searchCompanies} /></Route>
            <Route exact path='/jobs'><JobList jobs={jobs} search={searchJobs} /></Route>
            <Route exact path='/login'><LoginForm login={login} /></Route>
            <Route exact path='/signup'><SignupForm signup={signup} /></Route>
            <Route exact path='/profile'><Profile updateUser={updateUser} /></Route>
            <Route exact path='/'><Home /></Route>
            <Redirect to='/' />
          </Switch>
        </ErrorContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
