import fetch from 'node-fetch';
import querystring from 'querystring';
// import routeController from './routeController';
// import { json } from 'body-parser';

const makeAPIQuery = (paramsObj, additionalParams) => {
    if(!paramsObj.hasOwnProperty("zpwa")){
        paramsObj["zpwa"]=true
    }
    return querystring.stringify({ ...paramsObj, ...additionalParams });
};

const makeRequestPromise = (url) => {
    const headers = new fetch.Headers();

    
    headers.set("User-Agent", "Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Mobile Safari/537.36");

    headers.set('Accept', 'application/json');
    const options = {
        headers,
        // redirect: 'manual',
        redirect: "manual"
    };

    return fetch(url, options)
        .then(response => response.json())
        .catch(console.log);
};



export {
    makeRequestPromise, makeAPIQuery
}