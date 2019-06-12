import React from 'react';
import { Link } from 'react-router-dom';

function FriendsList(props) {
  function routeToFriend(event, friend) {
    event.preventDefault();
    props.history.push(`/friend-list/${friend.id}`);
  }
  return (
    <main>
      {props.friends.map(friend => (
        <div onclick={event => routeToFriend(event, friend)} key={friend.id}>
          <p>{friend.name}</p>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </div>
      ))
      }
    </main >
  )
}

export default FriendsList;