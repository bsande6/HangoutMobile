import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Button,
  Input,
  InputLabel,
} from "@mui/material";
import { useTheme } from "@mui/material";
import axios from "axios";
import {Link} from 'react-router-dom';
import MainAppBar from '../homepage/mainmenu';

const EditProfile = (props) => {

  const [user,setUser] = useState({
    firstname: "",
    lastname: "",
    email: "", 
    phone: "",
  });

    const handleChange = (event) => {
        const value = event.target.value;
        setUser({
          ...user,
          [event.target.name]: value,
        });
      };
      const config = {
        headers : {
          "Authorization" : `Key key=123456789`,
          "Content-Type" : "application/json",
          "Cache-Control" : 'no-cache',
          "Pragma" : 'no-cache',
          "Expires" : '0'
        }
      }
     
      const handleSubmit = (event) => {
        console.log(JSON.stringify(user));
        axios
          .post("http://localhost:5000/api/authenticate", user, config)
          .then((response) => console.log(response.status))
          .catch((err) => console.log(err));
      };

      return (
        <div>
          <MainAppBar/>
          <h1> Edit Profile </h1>
          <Stack spacing={2} sx={{ width: "50vw" }}>
              <InputLabel>First Name</InputLabel>
              <Input component="span" sx={{ p: 2, border: '1px dashed grey' }}></Input>
              <InputLabel>Last Name</InputLabel>
              <Input component="span" sx={{ p: 2, border: '1px dashed grey' }}></Input>
              <InputLabel>Email</InputLabel>
              <Input component="span" sx={{ p: 2, border: '1px dashed grey' }}></Input>
              <InputLabel>Phone Number</InputLabel>
              <Input component="span" sx={{ p: 2, border: '1px dashed grey' }}> </Input> 
        <Link to = "/Profile">
          <Button variant = "contained"> 
            Submit Changes
          </Button>
          </Link>
              </Stack>
        </div>
      )
}

export default EditProfile; 