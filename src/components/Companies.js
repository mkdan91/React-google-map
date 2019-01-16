import React from 'react';

const Companies = (props) => {
    const companies = () => {
        return props.data.map(([company, street]) => {
            return (
                <p onClick={(e) => props.handler(street)}> {company} </p>
            );
        });
    }
    return (
        <div className="col">{companies()}</div>
    );
};
export default Companies;