import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import * as SurveyTheme from "survey-core/themes";
import "../index.css";
import { useCallback } from "react";

interface surveyJson {
    json: {},
    onClose: any
}

function FeedbackSurvey({ json, onClose }:surveyJson) {
    console.log(json);
    const survey = new Model(json);

    survey.applyTheme(SurveyTheme.SharpDark);
    const surveyComplete = useCallback((sender: any) => {
        handleSurveyResults(
            'http://127.0.0.1:8000/post/',
            sender.data
        )
        console.log(sender.data);
        onClose()
    }, []);

    survey.onComplete.add(surveyComplete);

    return (<Survey model={survey} />);
}

async function handleSurveyResults(url: string, json: any) {
    console.log(JSON.stringify(json, null, 3));
    await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(["feedback_survey_res", json])
      })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            console.log(`status of post call: ${data}`)
          })
        } else {
          console.log('error from backend.');
        }
      })
      .catch(error => {
        console.log('error fetching data');
      });
};

export default FeedbackSurvey;