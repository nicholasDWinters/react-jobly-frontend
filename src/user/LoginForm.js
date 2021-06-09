import React, { useState, useContext } from 'react';
import ErrorContext from '../context/ErrorContext';
import './AuthForm.css';
import Error from '../Errors';

const LoginForm = ({ login }) => {
    let initial = {
        username: '',
        password: '',

    }
    let { errors, setErrors } = useContext(ErrorContext);
    let [data, setData] = useState(initial);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(data => ({
            ...data,
            [name]: value
        }))
        setErrors([]);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        login(data);
        if (errors === '') setData(initial);

    };


    return (
        <>
            {errors.length ? <Error error={errors} /> : ''}
            <div className='mt-3 AuthForm'>
                <form className='form' onSubmit={handleSubmit}>
                    <h2 style={{ margin: '50px' }}>Log In Form</h2>
                    <div>
                        <input name="username" className='form-control' placeholder='username' style={{ width: '500px', marginBottom: '20px' }} type='text'
                            value={data.username} onChange={handleChange} />
                    </div>

                    <div>
                        <input name="password" className='form-control' placeholder='password' style={{ width: '500px', marginBottom: '20px' }} type='text'
                            value={data.password} onChange={handleChange} />
                    </div>

                    <button type='submit' className='btn btn-success btn-lg mx-2' style={{ width: '250px' }}>Log In</button>

                </form>

            </div></>
    )
}

export default LoginForm;