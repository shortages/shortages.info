// import * as firebaseConfig from "./firebase-config";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { Shortage } from "./index.d";

interface User {
  id?: string;
  email?: string;
}

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}

admin.initializeApp();
const db = admin.firestore();

// const express = require("express");
// const cors = require("cors");

const app = express();

// Automatically allow cross-origin requests
app.use(cors());

// Add middleware to authenticate requests
// app.use(myMiddleware);

// build multiple CRUD interfaces:

app.use((req, res, next) => {
  const idToken = req.get("Authorization");
  console.log("Authorization: ", idToken);
  if (idToken) {
    admin
      .auth()
      .verifyIdToken(idToken)
      .then(decoded => {
        const user: User = {};
        user.id = decoded.uid;
        user.email = decoded.firebase.identities.email[0];
        req.user = user;

        console.log(`Set userId ${req.user.id} and email ${req.user.email}`);
        next();
      })
      .catch(error => {
        console.error(error);
        res.status(401).end();
      });
  }
});

app.post("/shortage", async (req, res) => {
  try {
    const doc: Shortage = {
      ...req.body
    };

    await db
      .collection("shortage")
      .doc()
      .set(doc);
  } catch (e) {
    console.error(e);
  }

  res.send({ ok: true });
});

app.post("/account", async (req, res) => {
  console.log("req.body", req.body);
  console.log("req.user.id", req.user.id);
  console.log("req.user.email", req.user.email);
  res.status(200).send({
    ok: true
  });
});

// app.get("/:id", (req, res) => res.send(Widgets.getById(req.params.id)));
// app.put("/:id", (req, res) =>
//   res.send(Widgets.update(req.params.id, req.body))
// );
// app.delete("/:id", (req, res) => res.send(Widgets.delete(req.params.id)));
// app.get("/", (req, res) => res.send(Widgets.list()));

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);
