import React from 'react'
import Chat from '../shared/Chat'
import { useParams } from 'react-router-dom'

function ChatView() {
	const { username } = useParams()
	return (
	  <Chat username={username}/>
	)
  
}

export default ChatView
