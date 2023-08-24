const dotenv = require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Pusher = require('pusher');

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: 'eu',
  useTLS: true
});

// console.log("Key", process.env.PUSHER_KEY);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: [
    'http://localhost:3000', 
    'http://localhost:5000', 
    'http://localhost:4200',
    'https://chat-iota-six-34.vercel.app',
]
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('PORT', process.env.PORT || 8000);

app.get('/', (req, res) => {
  res.send('blah');
});

// Use Postman
app.post('/api/messages', async (req, res) => {
  console.log(req.body);
  try {
    const payload = req.body.text;
    if(!process.env.PUSHER_KEY){
      throw new Error("Pusher key non settata")
    }
    await pusher.trigger('private-channel', 'message', {
      username: req.body.username,
      text: req.body.text
    });
  } catch (error) {
  }
  res.send(req.body.text)
});


app.listen(app.get('PORT'), () => 
  console.log('Listening at ' + app.get('PORT'))
)
