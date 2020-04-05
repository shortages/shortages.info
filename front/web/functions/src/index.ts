// import * as firebaseConfig from "./firebase-config";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { Shortage } from "./index.d";

admin.initializeApp();
const db = admin.firestore();

// const express = require("express");
// const cors = require("cors");

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Add middleware to authenticate requests
// app.use(myMiddleware);

// build multiple CRUD interfaces:

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

// app.get("/:id", (req, res) => res.send(Widgets.getById(req.params.id)));
// app.put("/:id", (req, res) =>
//   res.send(Widgets.update(req.params.id, req.body))
// );
// app.delete("/:id", (req, res) => res.send(Widgets.delete(req.params.id)));
// app.get("/", (req, res) => res.send(Widgets.list()));

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);
