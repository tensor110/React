import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }
  render() {
// --- if-else ---
    //   if (this.state.isLoggedIn)
    //     return <div>Logged In</div>
    //   else
    //     return <div>Is not logged in</div>


// --- Element Variables ---
// let message
// if (this.state.isLoggedIn)
//     message =  <div>Logged In</div>
//   else
//     message = <div>Is not logged in</div>
// return(
//     <div>{message}</div>
// )

 
// --- Ternary Conditional Operator ---
// return(
//     this.state.isLoggedIn?
//     (<div>Logged In</div>):
//     (<div>Is not logged in</div>)
// )

// --- Short Circuit Operator ---
// It is used to display only if statement, it doesn't display else statement 
return this.state.isLoggedIn && <div>Logged In</div>

  }
}

export default ConditionalRendering
