import React, { useState } from 'react';
import './JobSearch.css';

const JobSearch = ({ search }) => {

    let [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);

    }

    const handleSubmit = evt => {
        evt.preventDefault();
        search(title);
        setTitle('');
    };


    return (
        <div className='JobSearch mt-3'>
            <form className='form-inline' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input name="term" className='form-control' placeholder='Enter search term' style={{ width: '500px' }} type='text'
                        value={title} onChange={handleChange} />
                    <button type='submit' className='btn btn-success mx-2'>Search</button>
                </div>

            </form>

        </div>
    )
}

export default JobSearch;