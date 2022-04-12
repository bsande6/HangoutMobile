import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Stack, Typography, Box, Button } from '@mui/material'
import MainAppBar from './mainmenu';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// fetch('http://localhost:8000/get_friends_list')
//         .then(response => response.json())
//         .then(data => setTotalReactPackages(data.total));

const Friends = (props) => {
  const columns = [
    { field: 'id', headerName: '#', width: 130 },
    { field: 'first', headerName: 'First Name', width: 130 },
    { field: 'last', headerName: 'Last Name', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'dateSince', headerName: 'Friends Since', type: 'date', width: 130 },
    {
      field: "Profile",
      renderCell: (cellValues) => {
        return (
          <Link to="/friendprofile">
            <Button
              variant="contained"
              color="primary"
            >
              View
            </Button>
          </Link>
        );
      },
      width: 150
    },
    {
      field: "Remove Friend",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="secondary"
          >
            Remove
          </Button>
        );
      },
      width: 150
    }
  ];

  /* const [state, setState] = useState({friends:""});
  const [state, setState] = useState({})
  async function friends() {
    const friends = await fetch('http://localhost:8000/get_friends_list')
      .then(response => response.json())
      .then(response => {setState(response)})
  }
    
  .then(response => {setState({response})});
  friends()
  console.log(response)
  console.log(state[0])
  const rows = []
  for (var i =0; i < state.length; i++) {
    state[i].fields.id = i
    rows.push(state[i].fields)
  } */

  const rows = [
    { id: 1, first: 'Joe', last: 'Biden', status: 'available', dateSince: '6/15/21' },
    { id: 2, first: 'Kamala', last: 'Harris', status: 'busy', dateSince: '4/6/20' },
  ];

  return (

    <div style={{ height: 400, width: '100%' }}>
      <MainAppBar />
      <Stack direction="column" alignItems="center" sx={{ padding: 2 }}></Stack>
      <Typography align='center' variant="h2" sx={{ fontWeight: 500 }}>
        My Friends
      </Typography>
      <Stack direction="column" alignItems="center" sx={{ padding: 2 }}></Stack>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <Stack direction="column" alignItems="center" sx={{ padding: 2 }}>
        <Typography align='center' variant="h2" sx={{ fontWeight: 500 }}>
          Find Friends
        </Typography>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search users"
            inputProps={{ 'aria-label': 'search users' }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
        <Stack direction="row" alignItems="center" sx={{ padding: 2 }}>
          <Button
            variant="contained"
            color="primary"
          >
            based on hobbies
          </Button>
          <Button
            variant="contained"
            color="primary"
          >
            based on location
          </Button>
          <Button
            variant="contained"
            color="primary"
          >
            from contacts
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};
export default Friends;