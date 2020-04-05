import * as React from "react";

import AButton from "./comp/AButton";
import CreateAccount from "./comp/CreateAccount";

import firebase from "firebase";
import firebaseConfig from "./firebase-config";

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

  const onAnnounce = () => {
    console.log("Announce a shortage clicked")
    console.log("Announce a shortage ok")
  }

  return (
    <div className="App">
      <AButton variant="contained" onClick={onAnnounce}>
        Announce shortage
      </AButton>
      <CreateAccount></CreateAccount>
      <div id="firebaseui-auth-container" />
    </div>
  );
}

export default App;
