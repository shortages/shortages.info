import React, { useState } from "react";
import { useStyles } from "../lib/styles";
import VerifyEmail from "./VerifyEmail";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import AButton from "./AButton";
import ShippingAddress from "./ShippingAddress";
import ShortageInfo from "./ShortageInfo";
import { styled } from "@material-ui/core/styles";

const Header = styled("div")({
  marginTop: "1em"
});

export default () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const [disabled, setDisabled] = useState(true);

  const [address, setAddress] = useState(null);
  const [shortage, setShortage] = useState(null);

  // console.log("ADDRESS", address);
  // console.log("SHORTAGE", shortage);

  const submit = () => {
    console.log("Submitting", email);
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
        <span>Step 1: Verify work email</span>

        <VerifyEmail
          value={email}
          onChange={setEmail}
          onVerified={() => setDisabled(false)}
        />

        <Header>Step 2: Describe shortage</Header>

        <ShortageInfo onChange={setShortage} disabled={disabled} />

        <Header>Step 3: Shipping Address</Header>
        <ShippingAddress onChange={setAddress} disabled={disabled} />

        <div>
          <AButton
            color="red"
            onClick={() => submit()}
            disabled={disabled || !address || !shortage}
          >
            Submit
          </AButton>
        </div>
      </Paper>
    </Box>
  );
};
