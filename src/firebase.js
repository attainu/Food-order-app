import firebase from "firebase";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyDC7raHqnuctW6SWrjU-lvDGdIuEhOzhFs",
  authDomain: "fir-a3d17.firebaseapp.com",
  databaseURL: "https://fir-a3d17.firebaseio.com",
  projectId: "fir-a3d17",
  storageBucket: "fir-a3d17.appspot.com",
  messagingSenderId: "213169710405",
  appId: "1:213169710405:web:443b4e3ba30804cd2dca2c",
};

firebase.initializeApp(config);
const storage = firebase.storage();

export { storage, firebase as default };
