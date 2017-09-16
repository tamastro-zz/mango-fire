const express = require('express')
const cron = require('node-cron')
const cors = require('cors')
const firebase = require('firebase')
const app = express()

app.use(cors())

var config = {
  apiKey: "AIzaSyD1V4lqU8dCUpQkZUEbRXEOWtbifhfpA6Q",
  authDomain: "tamastro-12.firebaseapp.com",
  databaseURL: "https://tamastro-12.firebaseio.com",
  projectId: "tamastro-12",
  storageBucket: "tamastro-12.appspot.com",
  messagingSenderId: "118127145065"
};
const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()

app.get('/mango', (req, res) => {
  const growth = [
    'https://maxpull-tlu7l6lqiu.stackpathdns.com/wp-content/uploads/2015/09/mango-pot.jpg',
    'http://image.homeclick.com/product-zoom/distinctive-designs-t-651-7-h4.jpg',
    'http://balconygardenweb.com/wp-content/uploads/2015/06/mango-tree-1.jpg'
  ]
  let index = 0
  res.send(true)
  let grow = cron.schedule('*/10 * * * * *', () => {
    db.ref('Mango').set({
      phase: index,
      src: growth[index]
    })
    index++

    if (index >= growth.length)
      grow.stop()
  })
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server Start')
})