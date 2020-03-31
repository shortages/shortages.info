import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import AButton from "./AButton";
import ATextField from "./ATextField";
import firebase from "firebase";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

export default ({ value, onChange, onVerified }) => {
  const email = value;

  const [verified, setVerified] = useState(false);

  const verifyEmail = () => {
    console.log("Submitting", email);

    firebase
      .auth()
      .sendSignInLinkToEmail(email, {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be whitelisted in the Firebase Console.
        url: "http://localhost:3000/finishSignUp",
        // This must be true.
        handleCodeInApp: true
      })
      .then(function() {
        console.log("Sending sign in link to email", email);
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch(function(error) {
        console.error(error);
        // Some error occurred, you can inspect the code: error.code
      });
  };

  useEffect(() => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      onChange(window.localStorage.getItem("emailForSignIn"));
      setVerified(true);
      if (onVerified) {
        onVerified();
      }
    }
  }, []);

  return (
    <Box marginBottom="1em">
      <Box display="flex" alignItems="center">
        <ATextField
          required
          disabled={verified}
          label="Contact Email"
          value={value}
          width="100%"
          onChange={e => onChange(e.target.value)}
        />
        {verified ? (
          <Box margin="1em">
            <VerifiedUserIcon color="primary" />
          </Box>
        ) : (
          <></>
        )}
      </Box>
      {verified ? (
        <></>
      ) : (
        <Box display="flex" justifyContent="flex-end">
          <AButton color="blue" onClick={verifyEmail}>
            Verify email
          </AButton>
        </Box>
      )}
    </Box>
  );
};
