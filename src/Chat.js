import React, {Component} from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import base from './base'

class Chat extends Component{

    constructor(){
        super()

        this.state = {
            messages: []
        }
    }

    addMessage = (body) =>{
        const messages = [...this.state.messages]
        messages.push({
            id: Date.now(),
            user: this.props.user,
            body
        })

        this.setState({messages})
    }

    render(){
        return(
            <div className= "chat" style= {styles}>
                <ChatHeader room= {this.props.room}/>
                <MessageList messages={this.state.messages}/>
                <MessageForm addMessage={this.addMessage} />
            </div>
        )
    }

    componentDidMount(){
        base.syncState(this.props.room, {
            context: this,
            state: 'messages',
            asArray: true
        })
    }
}

const styles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }

export default Chat