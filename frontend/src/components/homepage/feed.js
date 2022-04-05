import React from 'react';
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
            <Stack direction="column" alignItems="center" sx={{ padding: 2 }}></Stack>
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
export default Feed;