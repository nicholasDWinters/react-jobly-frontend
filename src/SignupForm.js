import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AuthForm.css';

const SignupForm = ({ signup }) => {
    let initial = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    }

    let [data, setData] = useState(initial);
    let history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        signup(data);
        setData(initial);
        history.push('/companies');
    };


    return (
        <div className='mt-3 AuthForm'>
            <form className='form' onSubmit={handleSubmit}>
                <h2 style={{ margin: '50px' }}>Sign Up Form</h2>
                <div>
                    <input name="username" className='form-control' placeholder='username' style={{ width: '500px', marginBottom: '20px' }} type='text'
                        value={data.username} onChange={handleChange} />
                </div>

                <div>
                    <input name="password" className='form-control' placeholder='password' style={{ width: '500px', marginBottom: '20px' }} type='text'
                        value={data.password} onChange={handleChange} />
                </div>
                <div>
                    <input name="firstName" className='form-control' placeholder='first name' style={{ width: '500px', marginBottom: '20px' }} type='text'
                        value={data.firstName} onChange={handleChange} />
                </div>
                <div>
                    <input name="lastName" className='form-control' placeholder='last name' style={{ width: '500px', marginBottom: '20px' }} type='text'
                        value={data.lastName} onChange={handleChange} />
                </div>
                <div>
                    <input name="email" className='form-control' placeholder='email' style={{ width: '500px', marginBottom: '20px' }} type='text'
                        value={data.email} onChange={handleChange} />
                </div>



                <button type='submit' className='btn btn-success btn-lg mx-2' style={{ width: '250px' }}>Sign Up</button>


            </form>

        </div>
    )
}

export default SignupForm;