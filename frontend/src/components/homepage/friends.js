import React, { useState }  from 'react'
import { DataGrid } from '@mui/x-data-grid';

import {Stack, Typography, Box, Button} from '@mui/material'
import MainAppBar from './mainmenu';

// fetch('http://localhost:8000/get_friends_list')
//         .then(response => response.json())
//         .then(data => setTotalReactPackages(data.total));

const Friends = (props) => {
  const columns = [
    { field: 'id', headerName: '#', width: 130},
    { field: 'first', headerName: 'First Name', width: 130},
    { field: 'last', headerName: 'Last Name', width: 130},
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'dateSince', headerName: 'Friends Since', type: 'date', width: 130 },
    {
      field: "Profile",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
          >
            View
          </Button>
        );
      }
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
      }
    }
  ];

  
  // const [state, setState] = useState({friends:""});
  const [state, setState] = useState({})
  async function friends() {
    const friends = await fetch('http://localhost:8000/get_friends_list')
      .then(response => response.json())
      .then(response => {setState(response)})
  }
    
    // .then(response => {setState({response})});
  // friends()
  // console.log(response)
  console.log(state[0])
  const rows = []
  for (var i =0; i < state.length; i++) {
    state[i].fields.id = i
    rows.push(state[i].fields)
  }

  
  // const rows = [
  //   { id: 1, first: state[0].firstname, last: 'Biden', status: 'available', dateSince: '6/15/21'},
  //   { id: 2, first: 'Kamala', last: 'Harris', status: 'busy', dateSince: '4/6/20'},
  // ];

  return (
    
    <div style={{ height: 400, width: '100%' }}>
      <MainAppBar/>
        <Stack direction="column" alignItems="center" sx={{padding : 2}}></Stack>
        <Typography align='center' variant="h2" sx={{ fontWeight: 500 }}>
         My Friends
         </Typography>
         <Stack direction="column" alignItems="center" sx={{padding : 2}}></Stack>
       <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
        
    </div>
);
};
export default Friends;