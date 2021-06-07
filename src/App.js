import React, { useState, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
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

function App() {
  let [companies, setCompanies] = useState([]);
  let [jobs, setJobs] = useState([]);

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
    searchCompanies();
    searchJobs();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/companies/:handle'><CompanyDetails /></Route>
        <Route exact path='/companies'><CompanyList companies={companies} search={searchCompanies} /></Route>
        <Route exact path='/jobs'><JobList jobs={jobs} search={searchJobs} /></Route>
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
