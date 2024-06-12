import React, { Component } from "react";

class FormHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      topic: "React"
    };
  }
  handleUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleTopic = e =>{
    this.setState({
      topic: e.target.value,
    });
  }

  handleSubmit = e =>{
    e.preventDefault()   //To avoid cleanup data after submit
  }
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="">Username</label>
          <input
            type="text"
            name=""
            id=""
            value={this.state.username}
            onChange={this.handleUsername}
          />
          <h1>Username- {this.state.username}</h1>
        </form>
        <form>
          <label htmlFor="">Topic</label>
          <select name="" id="" value={this.state.topic} onChange={this.handleTopic}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
          <h1>Topic- {this.state.topic}</h1>
        </form>
        <form action="" onSubmit={this.handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormHandling;
