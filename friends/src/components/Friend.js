import React from 'react';

function Friend(props) {
  return (
    <div className="friend">
      <p>{props.friend.name}</p>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </div>
  )
}

export default Friend;