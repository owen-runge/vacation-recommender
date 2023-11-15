import React from 'react';
import ResultContainer from '../components/ResultContainer';

function Render () {
    const cities_response = JSON.parse(JSON.parse(localStorage.getItem("cities") || '{}'));
    console.log(cities_response);
    // const cityOne = Object.keys(cities_response)[0];
    // const cityTwo = Object.keys(cities_response)[1];
    // const cityThree = Object.keys(cities_response)[2];
    // const cityFour = Object.keys(cities_response)[3];
    // const cityFive = Object.keys(cities_response)[4];
    // const cityOneBullets = cities_response[Object.keys(cities_response)[0]].map((c: string) => <li key={c} className='text-white'>{c}</li>);
    // const cityTwoBullets = cities_response[Object.keys(cities_response)[1]].map((c: string) => <li key={c} className='text-white'>{c}</li>);
    // const cityThreeBullets = cities_response[Object.keys(cities_response)[2]].map((c: string) => <li key={c} className='text-white'>{c}</li>);
    // const cityFourBullets = cities_response[Object.keys(cities_response)[3]].map((c: string) => <li key={c} className='text-white'>{c}</li>);
    // const cityFiveBullets = cities_response[Object.keys(cities_response)[4]].map((c: string) => <li key={c} className='text-white'>{c}</li>);

    return(
        <div className='space-y-3'>
            <ResultContainer cityName={Object.keys(cities_response)[0]} bullets={cities_response[Object.keys(cities_response)[0]]} />
            <ResultContainer cityName={Object.keys(cities_response)[1]} bullets={cities_response[Object.keys(cities_response)[1]]} />
            <ResultContainer cityName={Object.keys(cities_response)[2]} bullets={cities_response[Object.keys(cities_response)[2]]} />
            <ResultContainer cityName={Object.keys(cities_response)[3]} bullets={cities_response[Object.keys(cities_response)[3]]} />
            <ResultContainer cityName={Object.keys(cities_response)[4]} bullets={cities_response[Object.keys(cities_response)[4]]} />
        </div>
    );
}

const Results = () => {
    return (
        <div className='bg-dark text-white text-base font-jetbrainsmono min-h-screen max-h-full'>
            <h1 className='text-inherit text-5xl font-bold py-10 px-5'>Your Top 5 Cities</h1>
            <Render/>
        </div>
    );
};

export default Results;