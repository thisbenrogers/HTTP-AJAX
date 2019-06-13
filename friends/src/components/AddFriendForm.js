import React from 'react';
import axios from "axios";

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

  // TODO add 'value' to each input on form set to this.state.friend.WHATEVER

  // TODO add componentDidUpdate(prevProps) { if statement to setState}

  // TODO add changeHandler() and reference it in an onChange in each input on the form

  // TODO add handleSubmit(event) to 1. prevent default, 2. this.props.addFriend(this.state.friend), 3. reset the state object to empty fields



  render() {
    return (
      <div>
        <h2>Add New Friend</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            type="text"
            name="age"
            placeholder="age"
          />
          <input
            type="text"
            name="email"
            placeholder="email"
          />
        </form>
      </div>
    )
  }
}

export default AddFriendForm;