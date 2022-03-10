import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

import {
  Box,
  Stack,
  Button,
  Input,
  InputLabel,
  Typography,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material";
import axios from "axios";

const Login = (props) => {
  const theme = useTheme();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const config = {
    headers: {
      Authorization: `Key key=123456789`,
      "Content-Type": "application/json",
      "Cache-Control" : 'no-cache',
      "Pragma" : 'no-cache',
      "Expires" : '0'
    },
  };

  const navigate = useNavigate()

  const authenticate = useCallback(() => {
   return navigate('/feed', {replace : false}), [navigate]
  })

  const handleChange = (event) => {
    const value = event.target.value;
    setUser({
      ...user,
      [event.target.name]: value,
    });
  };

  const HandleSubmit = (event) => {
    console.log(JSON.stringify(user));
    axios
      .post("http://localhost:5000/api/authenticate", user, config)
      .then((response) => console.log(response.status))
      .catch((err) => console.log(err));
  };
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        margin : 10,
        padding : 2
      }}
    >
      <Typography align="center" variant="h3">
        Login
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Stack spacing={2} sx={{ width: "50vw" }}>
          <InputLabel>Email</InputLabel>
          <Input name="email" onChange={handleChange} />
          <InputLabel>Password</InputLabel>
          <Input type="password" name="password" onChange={handleChange} />
          <Button
            variant="contained"
            disableFocusRipple={true}
            sx={{ color: theme.palette.text.primary }}
            onClick={authenticate}
          >
            Login
          </Button>
          <Link to="/">
            <Button variant="contained">
              New to Hangout?
            </Button>
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Login;