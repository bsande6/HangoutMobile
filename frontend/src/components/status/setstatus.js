import React, { useState, useEffect } from "react";
import MainAppBar from '../homepage/mainmenu';
import { Stack } from "@mui/material";

const Status = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <MainAppBar />
            <Stack align="center" justify="center" spacing={2} sx={{ width: "50vw" }}>
                <h1> this is where users can edit their current status and set future status </h1>
            </Stack>
        </div>
    );
}
    export default Status