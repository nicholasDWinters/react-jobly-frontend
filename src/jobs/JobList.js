import React from 'react';
import JobSearch from './JobSearch';
import JobCard from './JobCard';
import { Redirect } from 'react-router-dom';


const JobList = ({ jobs, search, apply }) => {

    if (!localStorage.user) {
        return <Redirect to='/' />
    } else if (jobs.length === 0) {
        return (<div className='JobList'>
            <JobSearch search={search} />
            <h2 className='mt-4'>No jobs with that title</h2>
        </div>)
    } else {
        return (
            <div className='JobList'>
                <JobSearch search={search} />
                {jobs.map(job => <JobCard key={job.id} job={job} apply={apply} />)}
            </div>
        )
    }
}

export default JobList;