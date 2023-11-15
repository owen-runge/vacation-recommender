import React from 'react';

// interface for ResultContainer props
interface cityInfo {
    cityName: string;       // name of city is a string
    bullets: string[];      // bullets for city is an array of strings
}

// container that formats each city on the results page
// props:
// - cityName: name of the city
// - bullets: the relevant bullet points for each city
function ResultContainer (props:cityInfo) {
    const cityName = props.cityName;
    const cityBullets = props.bullets.map((c: string) => <li key={c} className='text-white'>{c}</li>);

    return (
        <div className='text-white text-base font-jetbrainsmono'>
            <div className='bg-custom-foreground p-4  mx-5 border-2 rounded border-custom-border'>
                <h1 className='text-inherit text-3xl'>{cityName}</h1>
                <ul className='text-inherit text-base font-jetbrainsmono list-disc list-inside px-8 space-y-1'>
                    {cityBullets}
                </ul>
            </div>
        </div>
    );
};

export default ResultContainer;