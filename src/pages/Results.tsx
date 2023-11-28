import React,  { useState, useEffect } from 'react';
import ResultContainer from '../components/ResultContainer';

function Render () {
    const [citiesResponse, setCitiesResponse] = useState<any>({});
    const [loading, setLoading] = useState<any>(true);
    const [error, setError] = useState<any>(null);

    const surveyResponse = JSON.parse(localStorage.getItem("response") || '{}');

    useEffect(() => {
        async function handleSurveyResults(url: string, json: any) {
            console.log(JSON.stringify(json, null, 3));
            await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify(json)
              })
              .then(response => {
                if (response.ok) {
                  response.json().then(data => {
                    console.log(JSON.parse(data));
                    setCitiesResponse(JSON.parse(data));
                    setLoading(false);
                  })
                } else {
                  console.log('error from backend.');
                }
              })
              .catch(error => {
                setError(error);
                setLoading(false);
              });
        };

        handleSurveyResults(
            'http://127.0.0.1:8000/post/',
            surveyResponse
        )
    }, []);

    if (loading) {
        return(
        <div className='flex flex-col justify-center items-center'>
            <div>Loading...</div>
        </div>
        );
    }

    if (error) {
        return(
        <div className='flex flex-col justify-center items-center'>
            <div>Error: {error.message}</div>
        </div>
        );
    }

    return(
        <div className='space-y-3'>
            <ResultContainer cityName={Object.keys(citiesResponse)[0]} bullets={citiesResponse[Object.keys(citiesResponse)[0]]} />
            <ResultContainer cityName={Object.keys(citiesResponse)[1]} bullets={citiesResponse[Object.keys(citiesResponse)[1]]} />
            <ResultContainer cityName={Object.keys(citiesResponse)[2]} bullets={citiesResponse[Object.keys(citiesResponse)[2]]} />
            <ResultContainer cityName={Object.keys(citiesResponse)[3]} bullets={citiesResponse[Object.keys(citiesResponse)[3]]} />
            <ResultContainer cityName={Object.keys(citiesResponse)[4]} bullets={citiesResponse[Object.keys(citiesResponse)[4]]} />
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