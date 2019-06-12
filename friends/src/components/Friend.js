import React from 'react';

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
    </div>
  )
}

export default Friend;