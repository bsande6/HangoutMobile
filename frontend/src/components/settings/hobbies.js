import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MainAppBar from '../homepage/mainmenu';
import { Typography, Box, Button } from '@mui/material';
import axios from "axios";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const hobbies = [
  'swimming',
  'writing',
  'drawing',
  'acting',
  'baking',
  'reading',
  'playing video games',
  'running',
  'walking',
  'working out',
  'biking',
  'studying',
  'cleaning',
  'collecting',
  'cooking',
  'crafts',
  'dancing',
  'fashion',
  'fishing',
  'music',
  'soccer',
  'baseball',
  'basketball',
  'photography',
  'singing',
];

export default function MultipleSelect() {
  const theme = useTheme()
  const [user, setUserHobbies] = React.useState([]);

  const config = {
    headers: {
      "Authorization": `Key key=123456789`,
      "Content-Type": "application/json",
      "Cache-Control": 'no-cache',
      "Pragma": 'no-cache',
      "Expires": '0'
    }
  }
  
  const handleSubmit = (event) => {
    console.log(JSON.stringify(user));
    axios
      .post("http://localhost:5000/api/authenticate", user, config)
      .then((response) => console.log(response.status))
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setUserHobbies(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <MainAppBar />
      <Typography align="center" variant="h3">
        Choose 5 Hobbies
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="hobbies">Hobbies</InputLabel>
          <Select
            labelId="hobbies"
            id="hobbies"
            multiple
            value={user}
            onChange={handleChange}
            input={<OutlinedInput label="Hobbie" />}
            MenuProps={MenuProps}
          >
            {hobbies.map((hobbie) => (
              <MenuItem
                key={hobbie}
                value={hobbie}
              >
                {hobbie}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" disableFocusRipple={true} sx={{ color: theme.palette.text.primary }} onClick={handleSubmit}>
          Done
        </Button>
      </Box>
    </div>
  );
}