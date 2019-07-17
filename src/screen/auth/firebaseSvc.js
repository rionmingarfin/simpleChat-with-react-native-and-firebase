import firebase from 'firebase'

class FirebaseSvc {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyDk4kfNQQJl3vGxBdFwbPVj3m_7QM7Ns04",
                authDomain: "simplechat-d58fc.firebaseapp.com",
                databaseURL: "https://simplechat-d58fc.firebaseio.com",
                projectId: "simplechat-d58fc",
                storageBucket: "",
                messagingSenderId: "969039521493",
                appId: "1:969039521493:web:34da4d136e28e0d2"
            });
        }
    }
  login = async(user, success_callback, failed_callback) => {
       await firebase.auth()
         .signInWithEmailAndPassword(user.email, user.password)
       .then(success_callback, failed_callback);
    }
  }
  const firebaseSvc = new FirebaseSvc();
  export default firebaseSvc;