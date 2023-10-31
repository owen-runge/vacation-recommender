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
    const cities_list_items = cities_response.map((c: string) => <li key={c} className='text-white'>{c}</li>);

    return(
        <div>
            <ul className='pl-4 space-y-0.5'>
                {cities_list_items}
            </ul>
        </div>
    );
}

const Results = () => {
    return (
        <div className='bg-dark h-screen'>
            <h1 className='text-white font-bold p-3'>Top 5 cities</h1>
            <Render/>
        </div>
    );
};

export default Results;