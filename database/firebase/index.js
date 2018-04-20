import { initializeApp } from 'firebase'

const db = initializeApp({
  apiKey: "AIzaSyBp9OXdXADdqpdh9bvqXY8Bx2-Ys3B4fR8",
  authDomain: "todo-rebel-arief.firebaseapp.com",
  databaseURL: "https://todo-rebel-arief.firebaseio.com",
  projectId: "todo-rebel-arief",
  storageBucket: "todo-rebel-arief.appspot.com",
  messagingSenderId: "312514151177"
})

export const firebase = db.database()


