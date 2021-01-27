import React from 'react';
import { Link } from 'react-router-dom';

function Friend(props) {
  const friend = props.friends.find(
    person => `${person.id}` === props.match.params.id
  );

  if (!props.friends.length || !friend) {
    return <h2>Loading buddy data...</h2>;
  }

  return (
    <div className="friend">
      <p>{friend.name}</p>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
      <Link exact="true" to="/">Home</Link>
    </div>
  )
}

export default Friend;