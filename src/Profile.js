import React, { useState, useContext } from 'react';
import UserContext from './UserContext';
import JoblyApi from './api/api';
import ErrorContext from './ErrorContext';


const Profile = ({ updateUser }) => {
    let { user } = useContext(UserContext);
    let { setErrors } = useContext(ErrorContext);
    let initial = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: ''
    }

    let [data, setData] = useState(initial);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(data => ({
            ...data,
            [name]: value
        }))

    }

    const handleSubmit = evt => {
        evt.preventDefault();
        let creds = { username: user.username, password: data.password };
        async function checkUser(creds) {
            try {
                let token = await JoblyApi.login(creds);
                console.log(token);
                if (token) {
                    console.log('correct')
                    updateUser(data, creds);
                } else {
                    console.log('incorrect');
                    setData(initial);
                }

            } catch (e) {
                setErrors(...e);
            }

        }
        checkUser(creds);


    };


    return (
        <div className='mt-3 AuthForm'>
            <form className='form' onSubmit={handleSubmit}>
                <h2 style={{ margin: '30px' }}>Update User</h2>
                <h5>Username: {user.username}</h5>
                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <input name="firstName" id='firstName' className='form-control' placeholder='first name' style={{ width: '500px', marginBottom: '20px' }} type='text'
                        value={data.firstName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <input name="lastName" id='lastName' className='form-control' placeholder='last name' style={{ width: '500px', marginBottom: '20px' }} type='text'
                        value={data.lastName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input name="email" id='email' className='form-control' placeholder='email' style={{ width: '500px', marginBottom: '20px' }} type='text'
                        value={data.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='password'>Confirm Password to Save Changes</label>
                    <input name="password" id='password' className='form-control' style={{ width: '500px', marginBottom: '20px' }} type='password'
                        value={data.password} onChange={handleChange} />
                </div>


                <button type='submit' className='btn btn-success btn-lg mx-2' style={{ width: '250px' }}>Update User</button>


            </form>

        </div>
    )
}

export default Profile;