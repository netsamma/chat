const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Pusher = require('pusher');
const pusher = new Pusher({
  appId: '1565028',
  key: '4c421a35144eb7295cae',
  secret: 'cb7d4de8f3505c12e8e6',
  cluster: 'eu',
  useTLS: true
});
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('PORT', process.env.PORT || 5000);

app.get('/', (req, res) => {
  res.send('blah');
});


app.post('/message', (req, res) => {
  console.log(req);
  const payload = req.body;
  pusher.trigger('chat-channel', 'message', {
    // username: req.body.username,
    username: "Pippo",
    // message: req.body.message
    message: "Messaggio di prova"
  });
  res.send(payload)
});

// app.post("/pusher/auth", (req, res) => {
//   const socketId = req.body.socket_id;

//   // Replace this with code to retrieve the actual user id and info
//   const user = {
//     id: "some_id",
//     user_info: {
//       name: "John Smith",
//     },
//     watchlist: ['another_id_1', 'another_id_2']
//   };
//   const authResponse = pusher.authenticateUser(socketId, user);
//   res.send(authResponse);
// });


app.listen(app.get('PORT'), () => 
  console.log('Listening at ' + app.get('PORT'))
)
