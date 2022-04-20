import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    Toolbar,
    MonthView,
    WeekView,
    ViewSwitcher,
    Appointments,
    AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import { Stack } from "@mui/material";

import { friendevents } from '../../mockdata/friendevents';

const PREFIX = 'Demo';
const classes = {
    content: `${PREFIX}-content`,
    header: `${PREFIX}-header`,
    closeButton: `${PREFIX}-closeButton`,
    buttonGroup: `${PREFIX}-buttonGroup`,
    button: `${PREFIX}-button`,
    picker: `${PREFIX}-picker`,
    wrapper: `${PREFIX}-wrapper`,
    icon: `${PREFIX}-icon`,
    textField: `${PREFIX}-textField`,
    addButton: `${PREFIX}-addButton`,
};

const StyledDiv = styled('div')(({ theme }) => ({
    [`& .${classes.icon}`]: {
        margin: theme.spacing(2, 0),
        marginRight: theme.spacing(2),
    },
    [`& .${classes.header}`]: {
        overflow: 'hidden',
        paddingTop: theme.spacing(0.5),
    },
    [`& .${classes.textField}`]: {
        width: '100%',
    },
    [`& .${classes.content}`]: {
        padding: theme.spacing(2),
        paddingTop: 0,
    },
    [`& .${classes.closeButton}`]: {
        float: 'right',
    },
    [`& .${classes.picker}`]: {
        marginRight: theme.spacing(2),
        '&:last-child': {
            marginRight: 0,
        },
        width: '50%',
    },
    [`& .${classes.wrapper}`]: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(1, 0),
    },
    [`& .${classes.buttonGroup}`]: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 2),
    },
    [`& .${classes.button}`]: {
        marginLeft: theme.spacing(2),
    },
}));

export default class FriendCalendar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: friendevents,
            currentDate: '2018-06-27',
            startDayHour: 9,
            endDayHour: 19,
        };
    }
    render() {
        const {
            currentDate,
            data,
            startDayHour,
            endDayHour,
        } = this.state;
        return (
            <Stack align="center" justify="center" spacing={2}>
                <Paper>
                    <Scheduler
                        data={data}
                        height={660}
                    >
                        <ViewState
                            currentDate={currentDate}
                        />
                        <WeekView
                            startDayHour={startDayHour}
                            endDayHour={endDayHour}
                        />
                        <MonthView />
                        <AllDayPanel />
                        <Appointments />
                        <Toolbar />
                        <ViewSwitcher />
                    </Scheduler>
                </Paper>
            </Stack>
        );
    }
}