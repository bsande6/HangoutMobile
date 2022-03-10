import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Button,
  Input,
  InputLabel,
  Typography,
  Tab,
  Tabs,
  Select,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material";
import axios from "axios";
import PasswordChecklist from "react-password-checklist";

const Hobbies = (props) => {

  const theme = useTheme()
  const [user, setUser] = useState({
    hobbie1: "",
    hobbie2: "",
    hobbie3: "",
    hobbie4: "",
    hobbie5: "",
  });
  const [hobbies, setHobbies] = useState([]);

  const config = {
    headers : {
      "Authorization" : `Key key=123456789`,
      "Content-Type" : "application/json",
      "Cache-Control" : 'no-cache',
      "Pragma" : 'no-cache',
      "Expires" : '0'
    }
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setUser({
      ...user,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    console.log(JSON.stringify(user));
    axios
      .post("http://localhost:5000/api/authenticate", user, config)
      .then((response) => console.log(response.status))
      .catch((err) => console.log(err));
  };

  return (
    <div>
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
        <Stack spacing={2} sx={{ width: "50vw" }}>
            <Select
              value={user.hobbies}
              autoWidth
              label="hobbies"
              name="hobbies"
              onChange={handleChange}
            >
              {hobbies.map((hobbies) => (
                <MenuItem value={hobbies.id}>{hobbies.name}</MenuItem>
              ))}
            </Select>
            <Select
              value={user.hobbies}
              autoWidth
              label="hobbies"
              name="hobbies"
              onChange={handleChange}
            >
              {hobbies.map((hobbies) => (
                <MenuItem value={hobbies.id}>{hobbies.name}</MenuItem>
              ))}
            </Select>
            <Select
              value={user.hobbies}
              autoWidth
              label="hobbies"
              name="hobbies"
              onChange={handleChange}
            >
              {hobbies.map((hobbies) => (
                <MenuItem value={hobbies.id}>{hobbies.name}</MenuItem>
              ))}
            </Select>
            <Select
              value={user.hobbies}
              autoWidth
              label="hobbies"
              name="hobbies"
              onChange={handleChange}
            >
              {hobbies.map((hobbies) => (
                <MenuItem value={hobbies.id}>{hobbies.name}</MenuItem>
              ))}
            </Select>
            <Select
              value={user.hobbies}
              autoWidth
              label="hobbies"
              name="hobbies"
              onChange={handleChange}
            >
              {hobbies.map((hobbies) => (
                <MenuItem value={hobbies.id}>{hobbies.name}</MenuItem>
              ))}
            </Select>
          <Button variant="contained" disableFocusRipple={true} sx={{color: theme.palette.text.primary }} onClick={handleSubmit}>
            Done
          </Button>
        </Stack>

      </Box>
    </div>
  );
};

export default Hobbies;