import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import AddFriendForm from './AddFriendForm';

class FriendsList extends React.Component {

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  //// add addFriend(friend) with an axios 'post'

  addFriend = friend => {
    console.log("Adding Friend")
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  //// pass addFriend down to AddFriendForm


  render() {
    return (
      <main>
        <AddFriendForm id={(this.props.friends.length + 1)} addFriend={this.addFriend} />
        {this.props.friends.map(friend => (
          <Link exact="true" to={`/friend-list/${friend.id}`} key={friend.id}>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </Link>
        ))
        }
      </main >
    )
  }
}

export default FriendsList;