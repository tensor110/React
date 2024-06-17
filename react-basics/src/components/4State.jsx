import React, { Component } from 'react'

class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Welcome"
      }
    }

    changeMessage(){
        this.setState({
            message: "Thank You"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Like</button>
      </div>
    )
  }
}

export default State
