import React, { useState, useEffect, ChangeEvent } from "react";
import Box from "@material-ui/core/Box";
import AButton from "./AButton";
import ATextField from "./ATextField";
import firebase from "firebase";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Account, AccountDetailsInputProps } from "../types";
import useStateFields from "../lib/hooks/useStateFields"
import { toast } from 'react-toastify'
import { useDispatch } from "react-redux";
import { actions } from "../state/actions";

const SAVED_ACCOUNT_DETAILS = "savedAccountDetails"

const initialState : Account = {
  email: "",
  first_name: "",
  last_name: "",
  org_name: "",
  position: "",
}

type AccountFields = "first_name" | "last_name" | "position" | "org_name" | "email"



export default ({ onVerified } : AccountDetailsInputProps) => {

  const [verified, setVerified] = useState(false);
  const [account, setField] = useStateFields<Account, AccountFields>(initialState)
  const [hydrated, setHydrated] = useState(false)
  const dispatch = useDispatch()
  // const [account, setAccount] = useState(allState)


  useEffect(() => {
    const savedAccountDetails = window.localStorage.getItem(SAVED_ACCOUNT_DETAILS)

    console.log("Loaded saved account details", savedAccountDetails ? JSON.parse(savedAccountDetails) : null)

    if (savedAccountDetails) {
      const savedAccount : Account = JSON.parse(savedAccountDetails)

      setField('first_name', savedAccount.first_name)
      setField('last_name', savedAccount.last_name)
      setField('position', savedAccount.position)
      setField('org_name', savedAccount.org_name)
      setField('email', savedAccount.email)
      setHydrated(true)
    }
  }, [])

  const setFieldValue = (field : AccountFields) => (event : ChangeEvent<HTMLInputElement>) => 
    setField(field, event.target.value)
  


  const createAccount = () => {
    const email = account.email

    console.log("Saving state", account);
    window.localStorage.setItem(SAVED_ACCOUNT_DETAILS, JSON.stringify(account))
    console.log("Submitting", email);

    if (email) {
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
        })
        .catch(function(error) {
          console.error(error);
        });
    }
  };

 
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const setField = (field : Field) => (event : ChangeEvent<HTMLInputElement>) => {
  //   // console.log(`Setting ${field} ${event.target.value}`);

  //   dispatch({
  //     type: SET_ACCOUNT_DETAIL_ACTION,
  //     field,
  //     value: (event.target as HTMLInputElement).value
  //   } as SetAccountDetailAction);
  //   return false;
  // };

  useEffect(() => {

    // TODO 
    if (hydrated) {
      if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        const user = firebase.auth().currentUser
        if (user) {
          console.log("ID Token", user.getIdToken())
        } else {
          console.log("No current user :(")
        }
        
        if (account.email) {
          firebase.auth().signInWithEmailLink(account.email, window.location.href).then((result : firebase.auth.UserCredential) => {
            
            console.log("Sign in result", result)
            console.log("Current User", firebase.auth().currentUser)

            const user = firebase.auth().currentUser
            
            return (user ? user.getIdToken() : "")

          }).then(token => {
            console.log("ID token", token)

            dispatch(actions.createAccount(account, token))
          })
          .catch(error => {
            console.error("Failed to sign in", error)
            toast.error("Sign in error")
          })
        } else {
          toast.error("Please open the email from the same device")
        }
        
        setVerified(true);
        if (onVerified) {
          onVerified();
        }
      }
    }
  }, [hydrated]);

  return (
    <Box marginBottom="1em">
      <ATextField
        required
        // disabled={disabled}
        value={account.org_name}
        onChange={setFieldValue("org_name")}
        label="Organisation"
        width="100%"
      />

      <Box display="flex" flexDirection="row">
        <ATextField
          required
          // disabled={disabled}
          label="First Name"
          value={account.first_name}
          onChange={setFieldValue("first_name")}
          marginRight="1em"
        />
        <ATextField
          required
          // disabled={disabled}
          label="Last Name"
          value={account.last_name}
          onChange={setFieldValue("last_name")}
        />

      </Box>
      <ATextField
        required
        // disabled={disabled}
        value={account.position}
        onChange={setFieldValue("position")}
        label="Position / Title"
        width="100%"
      />

      <Box display="flex" alignItems="center">
        <ATextField
          required
          disabled={verified}
          label="Email"
          value={account.email}
          onChange={setFieldValue("email")}
          width="100%"
          // onChange={e => onChange(e.target.value)}
        />
        {/* {verified ? (
          <Box margin="1em">
            <VerifiedUserIcon color="primary" />
          </Box>
        ) : (
          <></>
        )} */}
        
      </Box>

      {verified ? (
        <></>
      ) : (
        <Box display="flex" justifyContent="flex-end">
          <AButton onClick={createAccount}>
            Verify email
          </AButton>
        </Box>
      )}
    </Box>
  );
};
