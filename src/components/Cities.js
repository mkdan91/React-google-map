import React from 'react';

const Cities = (props) => {

    const cities = () => {
        return props.data.sort().map(city => {
            return (
                <p onClick={(e) => props.handler(city)}>
                    {city}
                </p>
            );
        });
    }
    return ( <div className="col">{cities()}</div>);
};
export default Cities;