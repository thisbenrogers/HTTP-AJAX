import React from 'react';

class AddFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        id: "",
        name: "",
        age: "",
        email: ""
      }
    };
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
    event.persist();
    let value = event.target.value;
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [event.target.name]: value
      }
    }));
  };


  //// add handleSubmit(event) to 1. prevent default, 2. this.props.addFriend(this.state.friend), 3. reset the state object to empty fields

  handleSubmit = event => {
    event.preventDefault();
    this.addFriend(this.state.friend);
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
        <form onSubmit={this.props.handleSubmit}>
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