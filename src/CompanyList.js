import React from 'react';
import CompanySearch from './CompanySearch';
import CompanyCard from './CompanyCard';

const CompanyList = ({ companies, search }) => {



    return (
        <div className='CompanyList'>
            <CompanySearch search={search} />
            {companies.map(company => <CompanyCard key={company.handle} company={company} />)}
        </div>
    )
}

export default CompanyList;