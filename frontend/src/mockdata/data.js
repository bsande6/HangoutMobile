import { green, deepOrange, lightBlue } from '@mui/material/colors';


export const data = [
    {
        title: 'Kenley',
        priorityId: 1,
        startDate: new Date(2018, 4, 14, 9, 0, 0),
        endDate: new Date(2018, 4, 14, 12, 0, 0),
        id: 14,
    }, {
        title: 'Brad',
        priorityId: 1,
        startDate: new Date(2018, 4, 14, 13, 0, 0),
        endDate: new Date(2018, 4, 14, 15, 30, 0),
        id: 15,
    }, {
        title: 'Noah',
        priorityId: 2,
        startDate: new Date(2018, 4, 15, 9, 0, 0),
        endDate: new Date(2018, 4, 15, 12, 0, 0),
        id: 17,
    }, {
        title: 'Samuel',
        priorityId: 1,
        startDate: new Date(2018, 4, 15, 11, 0, 0),
        endDate: new Date(2018, 4, 15, 14, 15, 0),
        id: 18,
    }, {
        title: 'Kenley',
        priorityId: 2,
        startDate: new Date(2018, 4, 16, 11, 0, 0),
        endDate: new Date(2018, 4, 16, 14, 0, 0),
        id: 22,
    }, {
        title: 'Brad',
        priorityId: 2,
        startDate: new Date(2018, 4, 14, 10, 0, 0),
        endDate: new Date(2018, 4, 14, 13, 0, 0),
        id: 23,
    },
];

export const types = [
    {
        text: 'Available',
        id: 1,
    }, {
        text: 'Busy',
        id: 2,
    },
];

export const colors = [
    { id: 1, text: 'Available', color: green },
    { id: 2, text: 'Busy', color: deepOrange },
];