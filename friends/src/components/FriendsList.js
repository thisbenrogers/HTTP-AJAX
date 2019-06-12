import React from 'react';
import { Link } from 'react-router-dom';

import AddFriendForm from './AddFriendForm';

function FriendsList(props) {
  return (
    <main>
      <AddFriendForm />
      {props.friends.map(friend => (
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

export default FriendsList;