import React from 'react';

const Error = ({ error }) => {
    return (
        <div>
            <h5 style={{ color: 'red' }}>{error}</h5>
        </div>
    )
}

export default Error;