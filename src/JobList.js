import React from 'react';
import JobSearch from './JobSearch';
import JobCard from './JobCard';

const JobList = ({ jobs, search }) => {
    return (
        <div className='JobList'>
            <JobSearch search={search} />
            {jobs.map(job => <JobCard key={job.id} job={job} />)}
        </div>
    )
}

export default JobList;