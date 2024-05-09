
import React, { useEffect, useState } from 'react'
import "./Chat.css";
import Pusher from 'pusher-js';

const server_url = "https://chat-server-node.vercel.app";
//const server_url = "localhost:8000";
const channelName = 'chat-channel';


const ChatFunction = (props) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState({username: props.username, text: "" })

    useEffect(() => {

    //   setMessages([
    //     {id:1, "username":props.username, "text":"Messaggio 1"}, 
    //     {id:2, "username":props.username, "text":"Messaggio 2"},
    //     {id:3, "username":props.username, "text":"Messaggio 3"},
    // ])
    //   return () => {
    //   }

      // Server Pusher
      const pusher = new Pusher('4c421a35144eb7295cae', {
        cluster: 'eu',
        encrypted: true
      });
      var channel = pusher.subscribe('chat-channel');
      channel.bind('message', (data) => {
        setMessages(messages => [...messages, data])
      });

    },[])

    const handleChange = (e) => {
      setMessage({"username":props.username, "text":e.target.value})
    }

    const sendMessage = () => {
      fetch(`${server_url}/api/message?channel=${channelName}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      })
    }

    return (
        <div className='chatbox'>
            <div className="chat-heading">
                <h3 className="white">Chat React Arces</h3>
            </div>
            <div id="messages" className="messages">
                {messages.map((message) => {
                return (
                    <div className="message-wrapper" key={message.id}>
                        <div className="message-from">~{message.username}</div>
                        <div className="message-text">
                            <div className="bg-blue">{message.text}</div>
                        </div>
                    </div>
                );
                })}
            </div>
            <div className="message-input">
            <input
              className="message-input-text"
              type="text"
              value={message.text}
              onChange={handleChange}
            ></input>
            <button
              className="message-input-send"
              onClick={() => sendMessage()}
            >
              Send
            </button>
          </div>
        </div>
  )
}

export default ChatFunction