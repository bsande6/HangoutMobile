import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";

import Register from "./components/begin/register";
import Login from "./components/begin/login";
import Profile from "./components/homepage/profile";
import Friends from "./components/homepage/friends";
import EditProfile from "./components/settings/editprofile";
import Hobbies from "./components/settings/hobbies";
import Location from "./components/settings/location";
import Feed from "./components/homepage/feed";
import FriendProfile from "./components/homepage/friendprofile";
import Calendar from "./components/status/setcalendar";
import Caltest from "./components/tests/caltest";

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
          <Route path="/feed" element={<Feed/>} />
          <Route path="/friendprofile" element={<FriendProfile/>} />
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/test" element={<Caltest/>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;