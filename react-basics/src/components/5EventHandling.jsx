import React, {Component} from 'react'

// Functional Component 
// function EventHandling() {
//     function clickHandler(){
//         console.log("Button Clicked")
//     }
//   return (
//     <div>
//       <button onClick={clickHandler}>Click</button>
//     </div>
//   )
// }

// Class Component
class EventHandling extends Component {
  render() {
    function clickHandler(){
        console.log("Button Clicked")
    }
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}


export default EventHandling