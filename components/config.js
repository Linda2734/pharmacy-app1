import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { initializeFirestore } from "firebase/firestore";

`import firebase from 'firebase/app';
import firestore from 'firebase/firestore';`



//TODO: Add your firebase config in here
export const firebaseConfig = {
         apiKey: "AIzaSyDhosqCsNYqhBJ0dvVFtupFCp0SpgXqlMs",
        authDomain: "pharmacy-app-a81d8.firebaseapp.com",
        databaseURL: "https://pharmacy-app-a81d8-default-rtdb.firebaseio.com",
        projectId: "pharmacy-app-a81d8",
        storageBucket: "pharmacy-app-a81d8.appspot.com",
        messagingSenderId: "232437046276",
        appId: "1:232437046276:web:b3402077d930b128722951"
};

// firebase.firestore().enableLogging(true);


// const app = initializeApp(firebaseConfig)
// // const db = getFirestore(app)
// const db = initializeFirestore(app, {
//         experimentalForceLongPolling: true
//       })

// export {db}
