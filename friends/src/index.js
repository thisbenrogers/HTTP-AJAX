import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
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
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  rootElement
);
