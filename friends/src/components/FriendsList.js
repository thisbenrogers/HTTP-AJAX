import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import AddFriendForm from './AddFriendForm';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
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
  };

  //// pass addFriend down to AddFriendForm

  updateFriends = newFriends => {
    this.setState({ friends: newFriends });
  };

  render() {
    return (
      <main>
        <AddFriendForm addFriend={this.addFriend} />
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