import React, { useEffect, useState } from 'react';
import JoblyApi from './api/api';
import CompanySearch from './CompanySearch';
import CompanyCard from './CompanyCard';

const CompanyList = () => {
    let [companies, setCompanies] = useState([]);

    async function search(name) {
        let companies;
        if (name !== '') {
            companies = await JoblyApi.getCompanies(name);
        } else {
            companies = await JoblyApi.getCompanies();
        }

        setCompanies(companies);
    }

    useEffect(() => {
        search();
    }, []);


    return (
        <div className='CompanyList'>
            <CompanySearch search={search} />
            {companies.map(company => <CompanyCard key={company.handle} company={company} />)}
        </div>
    )
}

export default CompanyList;