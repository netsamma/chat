const dotenv = require('dotenv').config()
const express = require('express');
const cors = require('cors');
const Pusher = require('pusher');
const fs = require('fs');

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: 'eu',
  useTLS: true
});

const app = express();
// Parse application/json
app.use(express.json());
// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: [
    'http://localhost:3000', 
    'http://localhost:5000', 
    'http://localhost:4200',
    'http://localhost:8000',
    'https://chat-iota-six-34.vercel.app',
    'https://ignaziosammarco.vercel.app/',
    'https://chat-netsamma.vercel.app/',
]
}));

app.set('PORT', process.env.PORT || 8000);

app.get('/', (req, res) => {
  res.send('blah');
});

app.get('/chat', (req, res) => {
    fs.readFile('chat.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data.toString());
      return res.end();
    });
});


// Use Postman
app.post('/api/message', async (req, res) => {
  console.log(req.body);
  try {
    const payload = req.body.text;
    if(!process.env.PUSHER_KEY){
      throw new Error("Pusher key non settata")
    }
    await pusher.trigger('chat-channel', 'message', {
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
