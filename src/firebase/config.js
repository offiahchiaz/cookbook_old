import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC3geS80fbKtSvzGB8X9XVzEF56Rdv_PiE",
  authDomain: "cookbook-de967.firebaseapp.com",
  projectId: "cookbook-de967",
  storageBucket: "cookbook-de967.appspot.com",
  messagingSenderId: "169546400651",
  appId: "1:169546400651:web:62ea3b09fd765a7ffba58e"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }