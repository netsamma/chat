import { useRef, useEffect } from "react";
import { Component } from "react";
// import { w3cwebsocket as W3CWebSocket } from "websocket";
import Pusher from 'pusher-js';
import axios from 'axios';
import "./Chat.css";

// Server node
// const client = new W3CWebSocket("ws://localhost:8080/chat");
// const client = new WebSocket('wss://chat-server-spring.herokuapp.com/chat');

// const server_url = "http://localhost:8000";
//const server_url ="https://chat-iota-six-34.vercel.app/chat-server-node.vercel.app"
const server_url = "https://chat-server-node.vercel.app";

// const messages = [
//   {id:"1", text:"Dummy message 1"},
//   {id:"2", text:"Dummy message 2"}
// ];

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      messages: [], 
      message: { username: props.username, text: "" } 
    };
  }

  handleChange(e) {
    this.setState({
      message: {
        ...this.state.message,
        text: e.target.value,
      },
    });
  }

  // Manda il messaggio salvato sullo state e lo azzera
  sendMessage = () => {
    // client.send(JSON.stringify(this.state.message));
    this.setState({
      message: {
        ...this.state.message,
        text: "",
      },
    });
    let channelName = 'chat-channel';
    axios.post(`${server_url}/api/message?channel=${channelName}`,this.state.message )
  };

  componentDidMount() {

    Pusher.logToConsole = true;

    // Server node (custom) su Heroku

    // client.onopen = () => {
    //   console.log("WebSocket Client Connected");
    // };
    // client.onmessage = (message) => {
    //   console.log(message);
    //   message = JSON.parse(message.data)
    //   let id = this.state.messages.length
    //   this.setState({
    //     messages: [
    //       ...this.state.messages,
    //       {
    //         id: id+1,
    //         username: message.username,
    //         text: message.text,
    //       },
    //     ],
    //   });
    //   console.log(this.state.messages);
    // };
    // client.onclose = () => {
    //   console.log("WebSocket connection closed");
    // };


    // Server Pusher

    const pusher = new Pusher('4c421a35144eb7295cae', {
      cluster: 'eu',
      encrypted: true
    });

    var channel = pusher.subscribe('chat-channel');
    channel.bind('message', (data) => {
      this.setState(prevState => ({
        messages: [...prevState.messages, data]
      }))
   });




  }

  componentDidUpdate(){
  }

  render() {
    return (
      <div>
        <div className="chatbox">
          <div className="chat-heading">
            <h3 className="white">Chat React Arces</h3>
          </div>
          <div id="messages" className="messages">
            {this.state.messages.map((message) => {
              return (
                <div className="message-wrapper" key={message.id ? message.id : 0}>
                  <div className="message-from">~{message.username}</div>
                  <div className="message-text">
                    <div className="bg-blue">{message.text}</div>
                  </div>
                </div>
              );
            })}
            <AlwaysScrollToBottom />
          </div>
          <div className="message-input">
            <input
              className="message-input-text"
              value={this.state.message.text || ""}
              onChange={this.handleChange.bind(this)}
            ></input>
            <button
              className="message-input-send"
              onClick={() => this.sendMessage()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}


const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};


export default Chat;

// Fonti
// https://www.freecodecamp.org/news/how-to-build-a-react-js-chat-app-in-10-minutes-c9233794642b/
