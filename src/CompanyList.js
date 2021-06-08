import React from 'react';
import CompanySearch from './CompanySearch';
import CompanyCard from './CompanyCard';
import { Redirect } from 'react-router-dom';

const CompanyList = ({ companies, search }) => {



    if (!localStorage.user) {
        return <Redirect to='/' />
    } else {
        return (
            <div className='CompanyList'>
                <CompanySearch search={search} />
                {companies.map(company => <CompanyCard key={company.handle} company={company} />)}
            </div>

        )
    }


}

export default CompanyList;