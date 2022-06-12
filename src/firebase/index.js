import * as firebase from 'firebase/app'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBIgga7xBX53wPwxrTyN7N-bPTypzBDUuA",
  authDomain: "database-72d13.firebaseapp.com",
  projectId: "database-72d13",
  storageBucket: "database-72d13.appspot.com",
  messagingSenderId: "890481094452",
  appId: "1:890481094452:web:52f13dde826cedde783f61",
  measurementId: "G-5LWRE15Q15"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)