import firebase from 'firebase';
import "firebase/database";
import 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyChIeb_SS3QX4yGZhNiEw7FJk2D947MXjI",
    authDomain: "personal-dashboard-ee96c.firebaseapp.com",
    databaseURL: "https://personal-dashboard-ee96c-default-rtdb.firebaseio.com",
    projectId: "personal-dashboard-ee96c",
    storageBucket: "personal-dashboard-ee96c.appspot.com",
    messagingSenderId: "313598205663",
    appId: "1:313598205663:web:43363fede5c0ca0c3a536a",
    measurementId: "G-4BLVD9QDM3"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();


export const getImage = (id, callback) => {
    var defaultDatabase = firebase.database();
    let ref = defaultDatabase.ref("/");
    let imageURL = ref.child(`images/${id}`);
    imageURL.on('value', (snapshot) => {
      callback(snapshot.val());
    })
  };