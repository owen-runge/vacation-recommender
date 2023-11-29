import React,  { useState, useEffect, Fragment } from 'react';
import ResultContainer from '../components/ResultContainer';
import FeedbackModal from '../components/FeedbackModal';
import FeedbackSurvey from './FeedbackSurvey';

interface RenderProps {
    citiesResponse: { [ id: string ]: string[] }
}

function Render ({ citiesResponse }: RenderProps) {

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
    const [showModal, setShowModal] = useState(false);
    const [modalShownBefore, setModalShownBefore] = useState(false);
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
                body: JSON.stringify(["main_survey_res", json])
              })
              .then(response => {
                if (response.ok) {
                  response.json().then(data => {
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
        <div className='flex flex-col justify-center items-center bg-dark text-white text-base font-jetbrainsmono min-h-screen max-h-full'>
            <div>Loading...</div>
        </div>
        );
    }

    if (error) {
        return(
        <div className='flex flex-col justify-center items-center bg-dark text-white text-base font-jetbrainsmono min-h-screen max-h-full'>
            <div>Error: {error.message}</div>
        </div>
        );
    }


    const cityNames = [Object.keys(citiesResponse)[0], Object.keys(citiesResponse)[1], Object.keys(citiesResponse)[2], Object.keys(citiesResponse)[3], Object.keys(citiesResponse)[4]];
    console.log(cityNames);

    const feedbackSurveyJson = {
        "title": "Your Feedback Matters.",
        "description": "Please provide your feedback so we can better improve our recommendations.",
        "focusFirstQuestionAutomatic": false,
        "completedHtml": "<div style=\"min-height: 100vh; max-height: 100%; background-color: #1B1B1B;\">\n<h3 style=\"color: white; position: absolute; bottom: 0; left: 0; padding-left: 10px; padding-bottom: 430px;\">Thanks for your Feedback!</h3>\n</div>\n",
        "elements": [
            {
                "type": "ranking",
                "name": "climate-ranking",
                "title": "Please rank the five cities on their climate.",
                "isRequired": true,
                "requiredErrorText": "This question is required.",
                "choices": [
                    cityNames[0],
                    cityNames[1],
                    cityNames[2],
                    cityNames[3],
                    cityNames[4]
                ],
            },
            {
                "type": "ranking",
                "name": "transport-ranking",
                "title": "Please rank the five cities on their transport availability.",
                "isRequired": true,
                "requiredErrorText": "This question is required.",
                "choices": [
                    cityNames[0],
                    cityNames[1],
                    cityNames[2],
                    cityNames[3],
                    cityNames[4]
                ],
            },
            {
                "type": "ranking",
                "name": "activity-ranking",
                "title": "Please rank the five cities on their activities.",
                "isRequired": true,
                "requiredErrorText": "This question is required.",
                "choices": [
                    cityNames[0],
                    cityNames[1],
                    cityNames[2],
                    cityNames[3],
                    cityNames[4]
                ],
            },
            {
                "type": "ranking",
                "name": "safety-ranking",
                "title": "Please rank the five cities on their safety.",
                "isRequired": true,
                "requiredErrorText": "This question is required.",
                "choices": [
                    cityNames[0],
                    cityNames[1],
                    cityNames[2],
                    cityNames[3],
                    cityNames[4]
                ],
            },
            {
                "type": "ranking",
                "name": "cuisine-ranking",
                "title": "Please rank the five cities on their cuisines.",
                "isRequired": true,
                "requiredErrorText": "This question is required.",
                "choices": [
                    cityNames[0],
                    cityNames[1],
                    cityNames[2],
                    cityNames[3],
                    cityNames[4]
                ],
            },
        ],
        "showQuestionNumbers": "off",
        "questionTitleLocation": "left",
        "questionDescriptionLocation": "underInput",
        "questionErrorLocation": "bottom",
        "completeText": "Submit",
        "widthMode": "auto",
        "width": "588px"
    }
    
    const handleModalClose = () => {
        setTimeout(() => {
            setShowModal(false);
            setModalShownBefore(true);
        }, 1000);
    };

    return (
        <Fragment>
            <div className='bg-dark text-white text-base font-jetbrainsmono min-h-screen max-h-full' onMouseLeave={() => setShowModal(true)}>
                <h1 className='text-inherit text-5xl font-bold py-10 px-5'>Your Top 5 Cities</h1>
                <Render citiesResponse={citiesResponse} />
                <FeedbackModal isVisible={showModal && !modalShownBefore} onClose={() => {setShowModal(false); setModalShownBefore(true);}} >
                    <div>
                        <FeedbackSurvey json={feedbackSurveyJson} onClose={handleModalClose} />
                    </div>
                </FeedbackModal>
            </div>
        </Fragment>
    );
};

export default Results;