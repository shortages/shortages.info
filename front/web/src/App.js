import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import AButton from "./comp/AButton";
import CreateAccount from "./comp/CreateAccount";

import firebase from "firebase";
import firebaseConfig from "./firebase-config";
const firebaseui = require("firebaseui");

firebase.initializeApp(firebaseConfig);

function App() {
  // useEffect(() => {
  //   // const ui = new firebaseui.auth.AuthUI(firebase.auth());

  //   firebase.auth().useDeviceLanguage();

  //   console.log(" window.location.href", window.location.href);
  //   if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
  //     console.log("Signed in with email", window.location.href);

  //     // ui.start('#firebaseui-auth-container', {
  //     //   signInOptions: [
  //     //     {
  //     //       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //     //       signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
  //     //     }
  //     //   ],
  //     //   // Other config options...
  //     // });
  //   }
  //   // ui.start("#firebaseui-auth-container", {
  //   //   signInOptions: [
  //   //     {
  //   //       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //   //       signInMethod:
  //   //         firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
  //   //     }
  //   //   ]
  //   //   // Other config options...
  //   // });
  // }, []);

  return (
    <div className="App">
      <AButton variant="contained" color="red">
        Announce a shortage
      </AButton>
      <CreateAccount></CreateAccount>
      <div id="firebaseui-auth-container" />
    </div>
  );
}

export default App;
