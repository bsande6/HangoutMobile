import * as React from 'react';
import axios from "axios";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from '@emotion/react';
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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Location = (props) => {
    const theme = useTheme();

    return (
        <div style={{ height: 400, width: '100%' }}>
            <Stack direction="column" alignItems="center" sx={{ padding: 2 }}></Stack>
            <Typography align='center' variant="h2" sx={{ fontWeight: 500 }}>
                Location and Privacy Preferences
            </Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Allow access to location" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Allow access to contacts" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Enable notifications" />

            </FormGroup>
            <Box sx={{ border: 1, borderRadius: 3, width: "75vw", margin: 2, padding: 2, paddingBottom: 20 }}>
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                    Insert map here*
                </Typography>
            </Box>
            <Button variant="contained" disableFocusRipple={true} sx={{ color: theme.palette.text.primary }}>
                Done
            </Button>
            <Stack direction="column" alignItems="center" sx={{ padding: 2 }}></Stack>
        </div>
    );
};
export default Location;