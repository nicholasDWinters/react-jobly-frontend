import React, { useState } from 'react';
import './CompanySearch.css';

const CompanySearch = ({ search }) => {

    let [data, setData] = useState('');

    const handleChange = (e) => {
        setData(e.target.value);

    }

    const handleSubmit = evt => {
        evt.preventDefault();
        search(data);
        setData('');
    };


    return (
        <div className='CompanySearch mt-3'>
            <form className='form-inline' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input name="term" id='term' className='form-control' placeholder='Enter search term' style={{ width: '500px' }} type='text'
                        value={data} onChange={handleChange} />
                    <button type='submit' className='btn btn-success mx-2'>Search</button>
                </div>

            </form>

        </div>
    )
}

export default CompanySearch;