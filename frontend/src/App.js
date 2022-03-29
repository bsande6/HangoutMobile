import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";

import Register from "./components/register";
import Login from "./components/login";
import Profile from "./components/profile";
import Friends from "./components/friends";
import EditProfile from "./components/editprofile";
import Hobbies from "./components/hobbies";
import Location from "./components/location";
import Feed from "./components/feed";
import Post from "./components/post";


function App() {
  const theme = createTheme({
    palette: {
      type: "dark",
      text: {
        primary: "#ffffff",
        secondary: "#000000",
      },
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#f48fb1",
      },
      background: {
        default: "#404040",
        paper: "#8c8c8c",
      },
    },
    typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/friends" element={<Friends/>} />
          <Route path="/editprofile" element={<EditProfile/>} />
          <Route path="/hobbies" element={<Hobbies/>} />
          <Route path="/location" element={<Location/>} />
          <Route path="/post" element={<Post/>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
