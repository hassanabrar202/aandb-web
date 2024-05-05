import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
console.log(process.env)
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_APPDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MSGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;


export function setLocalData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Function to get data from local storage
export function getLocalData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}