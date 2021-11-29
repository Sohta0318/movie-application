const admin = require("firebase-admin")

const serviceAccount = require("./firebase.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

var db = admin.firestore()

var docRef = db.collection("test").doc("5")

var setAda = docRef.set({
  first: "Sohta",
  last: "Iguchi",
  born: 1999,
})
