import React from 'react';
import './JobCard.css';
import { useHistory } from 'react-router-dom';
import CompanyCard from './CompanyCard';
import JobList from './JobList';


const JobCard = ({ job }) => {
    let history = useHistory();

    return (
        <div className='JobCard card mb-3 bg-light' style={{ maxWidth: '600px' }}>
            <div className='row'>
                <div className='col-md-10'>
                    <div className='card-body'>
                        <h6 className='card-title'>{job.title}
                            {(history.location.pathname.startsWith('/jobs')) ? ` @ ${job.companyName}` : ''

                            }</h6>
                        <p className='card-text'>Salary: {job.salary}</p>
                        <p className='card-text'>Equity: {job.equity}</p>
                    </div>
                </div>
                <div className='col-md-2 btnDiv'>
                    <button className='btn btn-danger'>Apply</button>
                </div>
            </div>

        </div>
    )
}

export default JobCard;