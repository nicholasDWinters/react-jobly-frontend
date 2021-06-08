import React, { useContext } from 'react';
import UserContext from './UserContext';
import './Home.css';

const Home = () => {
    let { user } = useContext(UserContext);
    if (user.username) {
        return (
            <div className='Home'>
                <div className='row'><h1 className='col-12'>Welcome back to Jobly, {user.firstName}</h1></div>
                <div className='row'><img className='mx-auto d-block' src='https://www.clipartkey.com/mpngs/m/286-2863220_jobs-clipart-engineering-job-clip-art.png' alt='job clipart'></img></div>


            </div>
        )
    } else {
        return (
            <div className='Home'>
                <div className='row'><h1 className='col-12'>Welcome back to Jobly</h1></div>
                <div className='row'><img className='mx-auto d-block' src='https://www.clipartkey.com/mpngs/m/286-2863220_jobs-clipart-engineering-job-clip-art.png' alt='job clipart'></img></div>

            </div>
        )
    }

}

export default Home;