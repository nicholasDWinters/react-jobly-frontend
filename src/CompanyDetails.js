import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CompanyDetails.css';
import JoblyApi from './api/api';
import JobCard from './JobCard';

const CompanyDetails = () => {
    let [company, setCompany] = useState({});
    let { handle } = useParams();

    async function getDetails() {
        let res = await JoblyApi.getCompany(handle);
        console.log(res);
        setCompany(res);

    }

    useEffect(() => {

        getDetails();

    }, []);


    return (
        <div className='CompanyDetails mt-4'>
            {company
                ? <>
                    <h2>{company.name}</h2>
                    <h5>{company.description}</h5>
                    {company.jobs ? company.jobs.map(job => <JobCard key={job.id} job={job} />) : <h2>No Jobs</h2>}</>
                :
                <h1>Loading</h1>}


        </div>
    )
}

export default CompanyDetails;