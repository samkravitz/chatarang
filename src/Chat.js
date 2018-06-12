import React, {Component} from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component{

    constructor(){
        super()

        this.state = {
            messages: [
                {
                    id: 1,
                    userName: 'samkravitz',
                    body: 'Chatting up a storm yo'
                },
        
                {
                    id: 2,
                    userName: 'dstrusssss',
                    body: 'This guy is so annoying I hate my job',
                }
            ]
        }
    }

    render(){
        return(
            <div className= "chat">
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm />
            </div>
        )
    }
}

export default Chat