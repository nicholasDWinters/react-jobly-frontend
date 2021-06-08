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

function App() {
  let [companies, setCompanies] = useState([]);
  let [jobs, setJobs] = useState([]);
  let [user, setUser] = useState({});
  let [token, setToken] = useState('');
  let history = useHistory();


  async function signup(data) {
    let token = await JoblyApi.signup(data);
    setUser(data);
    setToken(token);
    JoblyApi.token = token;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  async function login(data) {
    let token = await JoblyApi.login(data);
    setToken(token);
    JoblyApi.token = token;
    localStorage.setItem('token', token);
    setUser(data);
  }

  function logout() {
    localStorage.clear();
    setUser({});
    setToken('');
    history.push('/');
  }

  function getUserFromLocalStorage() {
    if (localStorage.user) setUser(JSON.parse(localStorage.user));
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
  }, []);

  useEffect(() => {
    async function findUser() {
      if (user.username) {

        let current = await JoblyApi.getCurrentUser(user.username);
        setUser(current);
        localStorage.setItem('user', JSON.stringify(current));
      }
    }
    findUser();
  }, [token, user.username]);


  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Navbar logout={logout} />
        <Switch>
          <Route exact path='/companies/:handle'><CompanyDetails /></Route>
          <Route exact path='/companies'><CompanyList companies={companies} search={searchCompanies} /></Route>
          <Route exact path='/jobs'><JobList jobs={jobs} search={searchJobs} /></Route>
          <Route exact path='/login'><LoginForm login={login} /></Route>
          <Route exact path='/signup'><SignupForm signup={signup} /></Route>
          <Route exact path='/profile'><Profile /></Route>
          <Route exact path='/'><Home /></Route>
          <Redirect to='/' />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
