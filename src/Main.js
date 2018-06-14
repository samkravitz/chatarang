import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {

    state = {
        room: 'random'
    }

    roomToGeneral = () => {
        this.setState({room: 'general'})
    }

    roomToRandom = () => {
        this.setState({room: 'random'})
    }



    render() {
        return (
        <div className="Main" style={styles}>
            <Sidebar
            user={this.props.user}
            signOut={this.props.signOut}
            roomToGeneral= {this.roomToGeneral}
            roomToRandom= {this.roomToRandom}
            />
            <Chat user={this.props.user} room= {this.state.room} />
        </div>
        )
    }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main