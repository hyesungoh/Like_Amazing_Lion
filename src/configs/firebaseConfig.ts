import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import * as config from "config";

const firebaseConfig: object = {
    apiKey: config.FB_API_KEY,
    authDomain: config.FB_AUTH_DOMAIN,
    projectId: config.FB_PROJECT_ID,
    storageBucket: config.FB_STORAGE_BUCKET,
    messagingSenderId: config.FB_MESSAGING_SENDER_ID,
    appId: config.FB_APP_ID,
}

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
