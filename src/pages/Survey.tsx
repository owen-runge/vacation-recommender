import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import * as SurveyTheme from "survey-core/themes";
import "../index.css";
import { json } from "./json";
import { useCallback } from "react";

function SurveyComponent() {
    const survey = new Model(json);
    survey.applyTheme(SurveyTheme.SharpDark);
    const surveyComplete = useCallback((sender: any) => {
        handleSurveyResults(
            'http://127.0.0.1:8000/post/',
            sender.data
        )
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
        body: JSON.stringify(json)
      })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            localStorage.setItem("cities",JSON.stringify(data));
            console.log(JSON.parse(localStorage.getItem("cities") || '{}'));
          })
        } else {
          console.log('error from backend.');
        }
      })
      .catch(error => {
        console.log('error fetching data');
      });
};

export default SurveyComponent;