import React, {useEffect, useState} from 'react';
import { Button } from '@material-ui/core';

export default function User(props) {
  // const [user, setUser] = useState(null);
  // useEffect(async () => {
  //   const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const currentUser = (await resp).json();
  //   setUser(currentUser);
  // });

  return (
    <div>
      <h2>{props.userId}</h2>
      <Button color="primary" variant="contained">User button</Button>
    </div>
  );
}
