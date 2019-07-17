import firebase from 'firebase'

class FirebaseSvc {
  constructor() {
    if (!firebase.apps.length) { //avoid re-initializing
      firebase.initializeApp({
        apiKey: "AIzaSyDDBia9FbIGALRaCrpi6dTm2u9n7SitsxU",
        authDomain: "ashterchat.firebaseapp.com",
        databaseURL: "https://ashterchat.firebaseio.com",
        projectId: "ashterchat",
        storageBucket: "",
        messagingSenderId: "769846037185",
        appId: "1:769846037185:web:861871279f19f7ee"
      });
    }
  }
  login = async (users, success_callback, failed_callback) => {
    await firebase.auth()
      .signInWithEmailAndPassword(users.email, users.password)
      .then(success_callback, failed_callback);
  }
}

createAccount = async (users) => {
  firebase.auth()
    .createUserWithEmailAndPassword(users.email, users.password)
  .then(function() {
    var userf = firebase.auth().currentUser;
    userf.updateProfile({ displayName: users.name})
    .then(function() {
      alert("User " + users.name + " was created successfully.");
    }, function(error) {
      console.warn("Error update displayName.");
    });
  }, function(error) {
    console.error("got error:" + error.message);
    alert("Create account failed.");
  });
}
const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;