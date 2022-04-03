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
import { Link } from 'react-router-dom';

const Register = (props) => {

  const theme = useTheme()
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    hashed: "",
    password: "",
  });
  const [view, setView] = useState("driver");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const config = {
    headers: {
      "Authorization": `Key key=123456789`,
      "Content-Type": "application/json",
      "Cache-Control": 'no-cache',
      "Pragma": 'no-cache',
      "Expires": '0'
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/", config)
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => console.log(err));
  }, []);

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
        Register Account
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Stack spacing={2} sx={{ width: "50vw" }}>
          <InputLabel>First Name</InputLabel>
          <Input name="firstname" onChange={handleChange} />
          <InputLabel>Last Name</InputLabel>
          <Input name="lastname" onChange={handleChange} />
          <InputLabel>Email</InputLabel>
          <Input name="email" onChange={handleChange} />
          <InputLabel>Password</InputLabel>
          <Input type="password" name="password" onChange={event => setPassword(event.target.value)} />
          <InputLabel>Confirm Password</InputLabel>
          <Input type="password" name="confirmPass" onChange={event => setConfirmPass(event.target.value)} />
          <PasswordChecklist
            rules={["minLength", "specialChar", "number", "capital", "match"]}
            minLength={5}
            value={password}
            valueAgain={confirmPass}
            onChange={(isValid) => { }}
          />
          <InputLabel>Phone Number</InputLabel>
          <Input name="phone" type="tel" onChange={handleChange} />
          <Button variant="contained" disableFocusRipple={true} sx={{ color: theme.palette.text.primary }} onClick={handleSubmit}>
            Register
          </Button>
          <Link to="/login">
            <Button variant="contained">
              Have an account?
            </Button>
          </Link>
        </Stack>
      </Box>
    </div>
  );
};

export default Register;