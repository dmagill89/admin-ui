import React from 'react';
import UserHeader from './UserHeader';

export default function UserDetails(props) {

  return (
    <UserHeader>
      {props.children}
    </UserHeader>
  );
}