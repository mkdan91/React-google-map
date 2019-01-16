import React from 'react';

const Countries = (props) => {

    const countries = () => {
        return props.data.sort().map((country, index) => {
            return (
                <p ref={index == 0 ? props.markedRef : undefined} onClick={(e) => props.handler(country)}>  {country}  </p>
            );
        });
    }
    return (
        <div className="col">{countries()}</div>
    );
};
export default Countries;
