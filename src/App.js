import React, { useEffect, useState} from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Link, Router } from '@reach/router';
import Home from './features/home/Home';
import User from './features/user/User';
import UserDetails from './features/user/UserDetails'
import UserIndex from './features/user/UserIndex';

function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
     async function fetchUsers() {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await resp.json();
      setUsers(users);
     }
     fetchUsers();
  });

  return (
    <section>
      <header>
        <h1>Admin UI</h1>
      </header>
      <nav>
        <Link to="/">Home</Link> {" "}
        <Link to="counter">Counter</Link>
        <Link to="user">User Details</Link>
      </nav>
      <Router>
        <Home path="/" users={users}/>
        <Counter path="counter"></Counter>
        <UserDetails path="user">
          <UserIndex path="/"></UserIndex>
          <User path=":userId"></User>
        </UserDetails>
      </Router>
    </section>
  );
}

export default App;
