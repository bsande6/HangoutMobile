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
import MainAppBar from '../homepage/mainmenu';
import { Link } from 'react-router-dom';
import FriendCalendar from '../status/viewcalendar';
import GiveActivity from './activity';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Feed = (props) => {
    const theme = useTheme();

    return (
        <div style={{ height: 400, width: '100%' }}>
            <MainAppBar />
            <Stack direction="column" alignItems="center" sx={{ padding: 2 }}>
                <GiveActivity></GiveActivity>
                <Stack direction="row" alignItems="center" sx={{ padding: 2 }}>
                    <Box sx={{ border: 1, borderRadius: 3, margin: 2, padding: 2, paddingBottom: 2 }}>
                        <Stack direction="column" spacing={2} alignItems="center" sx={{ padding: 2 }}>
                            <Typography variant="h5" sx={{ fontWeight: 500 }}>
                                {" "}
                                Friends
                            </Typography>
                            <Link to="/friends">
                                <Button variant="contained"> test </Button>
                            </Link>
                        </Stack>
                    </Box>
                    <Box sx={{ border: 1, borderRadius: 3, margin: 2, padding: 2, paddingBottom: 2 }}>
                        <Stack direction="column" spacing={2} alignItems="center" sx={{ padding: 2 }}>
                            <Typography variant="h5" sx={{ fontWeight: 500 }}>
                                {" "}
                                Friends
                            </Typography>
                            <Link to="/friends">
                                <Button variant="contained"> test </Button>
                            </Link>
                        </Stack>
                    </Box>
                    <Box sx={{ border: 1, borderRadius: 3, margin: 2, padding: 2, paddingBottom: 9 }}>
                        <Stack direction="column" spacing={2} alignItems="center" sx={{ padding: 2 }}>
                            <Typography variant="h5" sx={{ fontWeight: 500 }}>
                                {" "}
                                Friends
                            </Typography>
                            <Link to="/friends">
                                <Button variant="contained"> test </Button>
                            </Link>
                        </Stack>
                    </Box>
                </Stack>
                <FriendCalendar></FriendCalendar>
            </Stack>
        </div>
    );
};
export default Feed;

/* import React from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import {
    Box,
    Stack,
    Button,
    Input,
    InputLabel,
    Typography,
    TextField,
    Grid,
    Tooltip,
    Fab,
} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MainAppBar from './mainmenu';

const cards = [1];
const status = [1];

const Feed = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <MainAppBar/>
            <Stack direction="column" alignItems="center" sx={{ padding: 2 }}></Stack>
            <Typography align='center' variant="h4" sx={{ fontWeight: 500 }}>
                My Feed
            </Typography>
            <Stack direction="column" align="center" justify="center" spacing={2} sx={{ width: "50vw" }}></Stack>
            <CssBaseline />
            <main>
                <Container sx={{ py: 0 }} maxWidth="md">
                    <Grid container spacing={2}>
                        {cards.map((card) => (
                            <Grid item key={card} md={16}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Santa Claus
                                        </Typography>
                                        <Typography>
                                            Looking to go to the new mini golf place tonight, hmu if you are free!
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to="/post">
                                            <Button >View</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Container sx={{ py: 2 }} maxWidth="md">
                    <Grid container spacing={2}>
                        {status.map((card) => (
                            <Grid item key={card} md={16}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Rudolph
                                        </Typography>
                                        <Typography>
                                            Status: Available
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            </main>
        </div>

    );
}
export default Feed; */