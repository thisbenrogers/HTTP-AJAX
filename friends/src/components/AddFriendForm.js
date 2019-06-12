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