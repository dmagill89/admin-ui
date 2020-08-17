import React from 'react';
import { navigate } from '@reach/router';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, Button } from '@material-ui/core';


export default function Home(props) {
  const {users} = props;
  const nav = (id) => {
    debugger;
    navigate(`/user/${id}`);
  };

  return (
    <>
      <h2>Home</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>email</TableCell>
              <TableCell>phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>
                    <Link onClick={() => nav(user.id)}>{user.name}</Link>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
} 