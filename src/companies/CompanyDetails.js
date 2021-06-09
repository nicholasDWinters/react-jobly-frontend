import React, { useState, useEffect, useContext } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import './CompanyDetails.css';
import JoblyApi from '../api/api';
import JobCard from '../jobs/JobCard';
import ErrorContext from '../context/ErrorContext';

const CompanyDetails = ({ apply }) => {
    let [company, setCompany] = useState({});
    let { handle } = useParams();
    let { setErrors } = useContext(ErrorContext);
    async function getDetails() {
        try {
            let res = await JoblyApi.getCompany(handle);
            setCompany(res);
        } catch (e) {
            setErrors(e);
        }


    }

    useEffect(() => {

        getDetails();

    }, []);

    if (!localStorage.user) {
        return <Redirect to='/' />
    } else {
        return (
            <div className='CompanyDetails mt-4'>
                {company
                    ? <>
                        <h2>{company.name}</h2>
                        <h5>{company.description}</h5>
                        {company.jobs ? company.jobs.map(job => <JobCard key={job.id} job={job} apply={apply} />) : <h2>No Jobs</h2>}</>
                    :
                    <h1>Loading</h1>}


            </div>
        )
    }


}

export default CompanyDetails;