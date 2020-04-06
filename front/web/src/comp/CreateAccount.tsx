import React, { useState } from "react";
import { useStyles } from "../lib/styles";
import AccountDetailsInput from "./AccountDetailsInput";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import AButton from "./AButton";
import ShippingAddress from "./ShippingAddress";
// import ShortageInfo from "./ShortageInfo";
import { styled } from "@material-ui/core/styles";
import { Shortage, Address } from '../types'
import { useDispatch } from 'react-redux'
import { actions } from "../state/actions"

const Header = styled("div")({
  marginTop: "1em"
});

export default () => {
  const classes = useStyles();
  // const [email, setEmail] = useState<string|null>("");

  const [disabled, setDisabled] = useState(true);

  const [address, setAddress] = useState<Address|null>(null);
  const [shortage, setShortage] = useState<Shortage|null>(null);

  const dispatch = useDispatch()

  // console.log("ADDRESS", address);
  // console.log("SHORTAGE", shortage);


  const submit = () => {
    console.log("address", address)
    console.log("shortage", shortage)
    // console.log("Submitting", email);


    // dispatch(actions.postShortage()
  };


  return (
    <Box
      // maxWidth="48em"
      // textAlign="center"
      display="flex"
      flexDirection="column"
      // alignContent="center"
      alignItems="center"
      // justifyContent="center"
    >
      <Paper className={classes.formCard}>
        <span>Create an account</span>

        <AccountDetailsInput
          // value={email}
          // onChange={email => setEmail(email)}
          onVerified={() => setDisabled(false)} ></AccountDetailsInput>


        {/* <Header>Step 2: Describe shortage</Header> */}

        {/* <ShortageInfo onChange={setShortage} disabled={disabled} /> */}

        {/* <Header>Step 3: Shipping Address</Header> */}
        {/* <ShippingAddress onChange={setAddress} disabled={disabled} /> */}
{/* 
        <div>
          <AButton
            color="red"
            onClick={() => submit()}
            disabled={disabled || !address || !shortage}
          >
            Submit
          </AButton>
        </div> */}
      </Paper>
    </Box>
  );
};
