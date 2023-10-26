import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import * as SurveyTheme from "survey-core/themes";
import "../index.css";
import { json } from "./json";
//import { saveAs } from 'file-saver';
//import * as jsonfile from 'jsonfile';
//import * as fs from 'fs';

function SurveyComponent() {
    const survey = new Model(json);
    survey.applyTheme(SurveyTheme.SharpDark);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
        // const path = './surveyResults.json';
        // fs.writeFile(path, JSON.stringify(sender.data, null, 3), (error: any) => {
        //     if (error) {
        //         console.log('An error has occured', error);
        //         return;
        //     }
        //     console.log('data successfully written to file.');
        // });
    });
    return (<Survey model={survey} />);
}

export default SurveyComponent;