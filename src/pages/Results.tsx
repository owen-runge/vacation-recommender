//import React, { useState, useEffect } from 'react';
import React from 'react';

// async function fetchResults () {
//     const cities_response = JSON.parse(localStorage.getItem("cities") || '{}');
//     const cites_list_elements: any[] = [];
//     cities_response.forEach((item: string) => {
//         cites_list_elements.push(<li>{item}</li>)
//     })
//     return cites_list_elements;
// };

// function RenderResult () {
//     const [cityElem, setCityElem] = useState('Loading...');

//     useEffect(() => {
//         fetchResults().then(
//             result => setCityElem(result));
//     },[]);
// };

function Render () {
    const cities_response = JSON.parse(JSON.parse(localStorage.getItem("cities") || '{}'));
    const cities_list_items = cities_response.map((c: string) => <li key={c}>{c}</li>);

    return(
        <div>
            <ul>
                {cities_list_items}
            </ul>
        </div>
    );
}

const Results = () => {
    return (
        <div>
            <h1>Top 5 cities</h1>
            <Render/>
        </div>
    );
};

export default Results;