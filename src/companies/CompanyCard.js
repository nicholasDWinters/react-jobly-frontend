import React from 'react';
import './CompanyCard.css';
import { useHistory } from 'react-router-dom';

const CompanyCard = ({ company }) => {
    let history = useHistory();
    let url = `/companies/${company.handle}`;
    return (
        <div className='CompanyCard card mb-3 bg-light' style={{ maxWidth: '600px' }} onClick={() => history.push(url)}>
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img src={`${company.logoUrl}`} alt='company logo'></img>
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{company.name}</h5>
                        <p className='card-text'>{company.description}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CompanyCard;