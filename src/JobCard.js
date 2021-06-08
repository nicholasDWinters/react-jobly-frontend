import React, { useContext, useEffect, useState } from 'react';
import './JobCard.css';
import { useHistory } from 'react-router-dom';
import UserContext from './UserContext';



const JobCard = ({ job, apply, applications }) => {
    let history = useHistory();
    let { user, setUser } = useContext(UserContext);
    let [applied, setApplied] = useState(false);

    function putInApplication(username, id) {
        apply(username, id);
        setApplied(true);
    }

    useEffect(() => {

        setApplied(applications.indexOf(job.id) !== -1);
    }, [applications, job.id])

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
                    <button className='btn btn-danger' onClick={() => putInApplication(user.username, job.id)}>{applied ? 'Applied' : 'Apply'}</button>
                </div>
            </div>

        </div>
    )
}

export default JobCard;