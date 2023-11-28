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
      localStorage.setItem("response",JSON.stringify(sender.data));
    }, []);

    survey.onComplete.add(surveyComplete);

    return (<Survey model={survey} />);
}

export default SurveyComponent;