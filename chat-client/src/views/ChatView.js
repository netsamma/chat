import React from 'react'
import { useLocation } from 'react-router-dom'
import ChatFunction from '../shared/ChatFunction';

function ChatView(props) {
	const location = useLocation()
	let username = location.state
	return (
	//   <Chat username={username}/>
	  <ChatFunction username={username}/>
	)
  
}

export default ChatView
