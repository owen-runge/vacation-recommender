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
import { spawnSync } from 'child_process';
import { readFile } from 'jsonfile';
import { useCallback } from "react";

function SurveyComponent() {
    const survey = new Model(json);
    survey.applyTheme(SurveyTheme.SharpDark);
    const surveyComplete = useCallback((sender: any) => {
        handleSurveyResults(
            sender.data
        )
    }, []);

    survey.onComplete.add(surveyComplete);
    // survey.onComplete.add(async (sender, options) => {
    //     console.log(JSON.stringify(sender.data, null, 3));
    //     // const path = './surveyResults.json';
    //     // fs.writeFile(path, JSON.stringify(sender.data, null, 3), (error: any) => {
    //     //     if (error) {
    //     //         console.log('An error has occured', error);
    //     //         return;
    //     //     }
    //     //     console.log('data successfully written to file.');
    //     // });
    //     const pythonProcess = await spawnSync('python3', [
    //         '../scripts/PYTHONFILENAME.py',
    //         'FUNCTIONNAME',
    //         JSON.stringify(sender.data),
    //         '../scripts/modelResults.json'
    //     ]);
    //     const result = pythonProcess.stdout?.toString()?.trim();
    //     const error = pythonProcess.stderr?.toString()?.trim();

    //     const status = result === 'OK';
    //     if (status) {
    //         const buffer = await readFile('../scripts/modelResults.json');
    //         const resultParsed = JSON.parse(buffer?.toString());
    //         console.log(resultParsed);
    //     } else {
    //         console.log(error);
    //     }
    // });
    return (<Survey model={survey} />);
}

async function handleSurveyResults(json: any) {
    console.log(JSON.stringify(json, null, 3));
        // const path = './surveyResults.json';
        // fs.writeFile(path, JSON.stringify(sender.data, null, 3), (error: any) => {
        //     if (error) {
        //         console.log('An error has occured', error);
        //         return;
        //     }
        //     console.log('data successfully written to file.');
        // });
        const pythonProcess = await spawnSync('python3', [
            '../scripts/test.py',
            'model_output',
            JSON.stringify(json),
            '../scripts/modelResults.json'
        ]);
        const result = pythonProcess.stdout?.toString()?.trim();
        const error = pythonProcess.stderr?.toString()?.trim();

        const status = result === 'OK';
        if (status) {
            const buffer = await readFile('../scripts/modelResults.json');
            const resultParsed = JSON.parse(buffer?.toString());
            console.log(resultParsed);
        } else {
            console.log(error);
        }
}

export default SurveyComponent;