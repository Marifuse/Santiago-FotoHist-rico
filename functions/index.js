const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)
const express = require('express');
const cors = require('cors')
const router = express();
router.use(cors({ origin: true }))
router.get("/picture/:id", async (req, res) => {
  const picture = await admin
    .firestore()
    .collection("pictures")
    .doc(req.params.id)
    .get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        return { id:doc.id, data: doc.data() }
    } else {
        console.log("No such document!");
        return {}
    }
  });
  res.send(picture);
});
router.get("/pictures", async (req, res) => {
  const pictures = await admin
    .firestore()
    .collection("pictures")
    .get();
  var lista = [];
  pictures.docs.forEach(doc => {
    lista.push({ id: doc.id, data: doc.data() });
  });
  res.send(lista);
});
router.post("/picture", async (req, res) => {
  const picture = await admin
    .firestore()
    .collection("pictures")
    .add(req.body)
    .then(docRef => {
      return docRef.id
    });
  res.send(picture);
});
router.put("/picture/:id", async (req, res) => {
  const picture = await admin
    .firestore()
    .collection("pictures")
    .doc(req.params.id)
    .update(req.body).then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data()
    } else {
        console.log("No such document!");
        return {}
    }
  });
  res.send(picture);
});
router.delete("/picture/:id", async (req, res) => {
  const picture = await admin
    .firestore()
    .collection("pictures")
    .doc(req.params.id)
    .delete();
  res.send(picture);
});
exports.pictures = functions.https.onRequest(router);
