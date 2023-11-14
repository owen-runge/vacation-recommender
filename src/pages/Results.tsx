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
    console.log(cities_response);
    const cityOne = Object.keys(cities_response)[0];
    const cityTwo = Object.keys(cities_response)[1];
    const cityThree = Object.keys(cities_response)[2];
    const cityFour = Object.keys(cities_response)[3];
    const cityFive = Object.keys(cities_response)[4];
    const cityOneBullets = cities_response[Object.keys(cities_response)[0]].map((c: string) => <li key={c} className='text-white'>{c}</li>);
    const cityTwoBullets = cities_response[Object.keys(cities_response)[1]].map((c: string) => <li key={c} className='text-white'>{c}</li>);
    const cityThreeBullets = cities_response[Object.keys(cities_response)[2]].map((c: string) => <li key={c} className='text-white'>{c}</li>);
    const cityFourBullets = cities_response[Object.keys(cities_response)[3]].map((c: string) => <li key={c} className='text-white'>{c}</li>);
    const cityFiveBullets = cities_response[Object.keys(cities_response)[4]].map((c: string) => <li key={c} className='text-white'>{c}</li>);

    return(
        <div>
            <div className='px-4'>
                <h3 key={'cityOne'} className='text-inherit'>{cityOne}</h3>
                <ul className='space-y-0.5 list-disc'>
                    {cityOneBullets}
                </ul>
            </div>
            <div className='px-4'>
                <h3 key={'cityTwo'} className='text-inherit'>{cityTwo}</h3>
                <ul className='space-y-0.5 list-disc'>
                    {cityTwoBullets}
                </ul>
            </div>
            <div className='px-4'>
                <h3 key={'cityThree'} className='text-inherit'>{cityThree}</h3>
                <ul className='space-y-0.5 list-disc'>
                    {cityThreeBullets}
                </ul>
            </div>
            <div className='px-4'>
                <h3 key={'cityFour'} className='text-inherit'>{cityFour}</h3>
                <ul className='space-y-0.5 list-disc'>
                    {cityFourBullets}
                </ul>
            </div>
            <div className='px-4 pb-4'>
                <h3 key={'cityFive'} className='text-inherit'>{cityFive}</h3>
                <ul className='space-y-0.5 list-disc'>
                    {cityFiveBullets}
                </ul>
            </div>
        </div>
    );
}

const Results = () => {
    return (
        <div className='bg-dark text-white text-base font-jetbrainsmono min-h-screen max-h-full'>
            <h1 className='text-inherit text-5xl font-bold py-10 px-5'>Top 5 cities</h1>
            <Render/>
        </div>
    );
};

export default Results;