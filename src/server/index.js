const fs = require("firebase-admin")

const serviceAccount = require("../../firebase.json")

fs.initializeApp({
  credential: fs.credential.cert(serviceAccount),
})
const db = fs.firestore()

const usersDb = db.collection("t")
const liam = usersDb.doc("lragozzine")
await liam.set({
  first: "Liam",
  last: "Ragozzine",
  address: "133 5th St., San Francisco, CA",
  birthday: "05/13/1990",
  age: "30",
})
