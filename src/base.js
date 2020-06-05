import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBvgEgt8Ub2S9Yc1AQ2kqsWOZaarGTmvXw',
  authDomain: 'recette-book-app.firebaseapp.com',
  databaseURL: 'https://recette-book-app.firebaseio.com',
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
