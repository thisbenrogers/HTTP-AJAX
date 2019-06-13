import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import axios from "axios";

import AddFriendForm from "./components/AddFriendForm";
import FriendsList from "./components/FriendsList";
import Friend from "./components/Friend";

import './index.css';

class App extends React.Component {
  // add constructor and CDM
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        id: "",
        name: "",
        age: "",
        email: ""
      },
      activeFriend: null
    };
  }

  //// add addFriend(friend) with an axios 'post'

  addFriend = friend => {
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/friend-list');
      })
      .catch(err => console.log(err));
  }

  //// pass addFriend down to AddFriendForm

  updateFriends = newFriends => {
    this.setState({ friends: newFriends });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="header">Friends List</h1>
        </nav>

        <Route
          exact
          path="/"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
            />
          )}
        />
        <Route
          path="/friend-list/:id"
          render={props => <Friend {...props} friends={this.state.friends} />}
        />
        <Route
          path="/friend-form"
          render={props => (
            <AddFriendForm {...props} addFriend={this.addFriend} updateFriends={this.updateFriends} />
          )}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
