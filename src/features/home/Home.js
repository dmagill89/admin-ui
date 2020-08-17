import React from 'react';

export default function Home(props) {
  const {users} = props;

  return (
    <>
      <h2>Home</h2>
      {users.map(user => <div>{user.name}</div>)}
    </>
  );
}