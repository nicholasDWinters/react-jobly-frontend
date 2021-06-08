import React from 'react';
import JobSearch from './JobSearch';
import JobCard from './JobCard';
import { Redirect } from 'react-router-dom';

const JobList = ({ jobs, search, apply, applications }) => {
    if (!localStorage.user) {
        return <Redirect to='/' />
    } else {
        return (
            <div className='JobList'>
                <JobSearch search={search} />
                {jobs.map(job => <JobCard key={job.id} job={job} apply={apply} applications={applications} />)}
            </div>
        )
    }
}

export default JobList;