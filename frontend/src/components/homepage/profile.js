import React, { useState, useEffect } from "react";
import {
    Box,
    Stack,
    Button,
    InputLabel,
    Select,
    MenuItem
} from "@mui/material";
import { useTheme } from "@mui/material";
import axios from "axios";
import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import MainAppBar from './mainmenu';

const Profile = (props) => {
    const theme = useTheme()
    const [user, setUser] = useState({
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

    return (
        <div style={{ height: 400, width: '100%' }}>
            <MainAppBar />
            <Stack align="center" justify="center" spacing={2} sx={{ width: "90vw" }}>
                <h1> My Profile </h1>
                <InputLabel>First Name</InputLabel>
                <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>Smitty</Box>
                <InputLabel>Last Name</InputLabel>
                <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>Werner Man Jensen</Box>
                <InputLabel>Email</InputLabel>
                <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>SmanJensen@Gmail.com </Box>
                <InputLabel>Phone Number</InputLabel>
                <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>112313212312 </Box>
            </Stack>
            )
        </div>
    )}

            export default Profile;