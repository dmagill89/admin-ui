import React from 'react';

export default function UserHeader(props) {
  return (
    <header>
      <h2>User Details: </h2> {props.children}
    </header>
  );
}