import React from 'react';
import axios from "axios";

class AddFriendForm extends React.Component {
  state = {
    friend: {
      id: "",
      name: "",
      age: "",
      email: ""
    }
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  ////  add 'value' to each input on form set to this.state.friend.WHATEVER

  //// add componentDidUpdate(prevProps) { if statement to setState}
  //// add activeFriend property to our App state constructor

  componentDidUpdate(prevProps) {
    if (this.props.activeFriend && prevProps.activeFriend !== this.props.activeFriend) {
      this.setState({
        friend: this.props.activeFriend
      })
    }
  }

  //// add changeHandler() and reference it in an onChange in each input on the form

  changeHandler = event => {
    console.log("handling change");
    event.persist();
    let value = event.target.value;
    if (event.target.name === 'age') {
      value = parseInt(value, 10);
    }
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [event.target.name]: value,
        id: this.props.id
      }
    }));
  };


  //// add handleSubmit(event) to 1. prevent default, 2. this.props.addFriend(this.state.friend), 3. reset the state object to empty fields

  handleSubmit = event => {
    console.log("handling submit");
    event.preventDefault();
    this.props.addFriend(this.state.friend);
    this.setState({
      friend: {
        id: "",
        name: "",
        age: "",
        email: ""
      }
    })
  }


  render() {
    return (
      <div>
        <h2>Add New Friend</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.friend.name}
          />
          <input
            type="text"
            name="age"
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.friend.age}
          />
          <input
            type="text"
            name="email"
            onChange={this.changeHandler}
            placeholder="email"
            value={this.state.friend.email}
          />
          <button>Add New Friend</button>
        </form>
      </div>
    )
  }
}

export default AddFriendForm;