import React from 'react'
import Chat from '../shared/Chat'
import { useLocation } from 'react-router-dom'

function ChatView(props) {
	const location = useLocation()
	let username = location.state
	return (
	  <Chat username={username}/>
	)
  
}

export default ChatView
