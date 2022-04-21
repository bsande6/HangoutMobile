import * as React from 'react';
// #FOLD_BLOCK
import {
    ViewState,
    GroupingState,
    IntegratedGrouping,
} from '@devexpress/dx-react-scheduler';
// #FOLD_BLOCK
import {
    Scheduler,
    WeekView,
    DayView,
    Appointments,
    Toolbar,
    DateNavigator,
    ViewSwitcher,
    AllDayPanel,
    AppointmentTooltip,
    AppointmentForm,
    GroupingPanel,
    Resources,
} from '@devexpress/dx-react-scheduler-material-ui';
import { connectProps } from '@devexpress/dx-react-core';
import { styled, alpha } from '@mui/material/styles';
import Lens from '@mui/icons-material/Lens';
import Event from '@mui/icons-material/Event';
import AccessTime from '@mui/icons-material/AccessTime';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import classNames from 'clsx';

import { data, types, colors } from '../../mockdata/data';

const grouping = [{
    resourceName: 'priorityId',
}];

const filterTasks = (items, priorityId) => items.filter(task => (
    !priorityId || task.priorityId === priorityId
));

const PREFIX = 'Demo';
// #FOLD_BLOCK
const classes = {
    flexibleSpace: `${PREFIX}-flexibleSpace`,
    prioritySelector: `${PREFIX}-prioritySelector`,
    content: `${PREFIX}-content`,
    contentContainer: `${PREFIX}-contentContainer`,
    text: `${PREFIX}-text`,
    title: `${PREFIX}-title`,
    icon: `${PREFIX}-icon`,
    contentItemIcon: `${PREFIX}-contentItemIcon`,
    grayIcon: `${PREFIX}-grayIcon`,
    colorfulContent: `${PREFIX}-colorfulContent`,
    lens: `${PREFIX}-lens`,
    textCenter: `${PREFIX}-textCenter`,
    dateAndTitle: `${PREFIX}-dateAndTitle`,
    titleContainer: `${PREFIX}-titleContainer`,
    container: `${PREFIX}-container`,
    bullet: `${PREFIX}-bullet`,
    prioritySelectorItem: `${PREFIX}-prioritySelectorItem`,
    priorityText: `${PREFIX}-priorityText`,
    priorityShortText: `${PREFIX}-priorityShortText`,
    cellLowPriority: `${PREFIX}-cellLowPriority`,
    cellMediumPriority: `${PREFIX}-cellMediumPriority`,
    cellHighPriority: `${PREFIX}-cellHighPriority`,
    headerCellLowPriority: `${PREFIX}-headerCellLowPriority`,
    headerCellMediumPriority: `${PREFIX}-headerCellMediumPriority`,
    headerCellHighPriority: `${PREFIX}-headerCellHighPriority`,
};
// #FOLD_BLOCK
const stylesByPriority = colors.reduce((acc, priority) => ({
    ...acc,
    [`cell${priority.text.replace(' ', '')}`]: {
        backgroundColor: alpha(priority.color[400], 0.1),
        '&:hover': {
            backgroundColor: alpha(priority.color[400], 0.15),
        },
        '&:focus': {
            backgroundColor: alpha(priority.color[400], 0.2),
        },
    },
    [`headerCell${priority.text.replace(' ', '')}`]: {
        backgroundColor: alpha(priority.color[400], 0.1),
        '&:hover': {
            backgroundColor: alpha(priority.color[400], 0.1),
        },
        '&:focus': {
            backgroundColor: alpha(priority.color[400], 0.1),
        },
    },
}), {});
// #FOLD_BLOCK
const groupingStyles = ({ theme }) => ({
    [`&.${classes.cellLowPriority}`]: stylesByPriority.cellLowPriority,
    [`&.${classes.cellMediumPriority}`]: stylesByPriority.cellMediumPriority,
    [`&.${classes.cellHighPriority}`]: stylesByPriority.cellHighPriority,
    [`&.${classes.headerCellLowPriority}`]: stylesByPriority.headerCellLowPriority,
    [`&.${classes.headerCellMediumPriority}`]: stylesByPriority.headerCellMediumPriority,
    [`&.${classes.headerCellHighPriority}`]: stylesByPriority.headerCellHighPriority,
    [`& .${classes.icon}`]: {
        paddingLeft: theme.spacing(1),
        verticalAlign: 'middle',
    },
});

// #FOLD_BLOCK
const StyledToolbarFlexibleSpace = styled(Toolbar.FlexibleSpace)(() => ({
    [`&.${classes.flexibleSpace}`]: {
        margin: '0 auto 0 0',
    },
}));

const StyledFormControl = styled(FormControl)(({ theme: { spacing } }) => ({
    [`&.${classes.prioritySelector}`]: {
        minWidth: 140,
        marginLeft: spacing(2),
        '@media (max-width: 500px)': {
            minWidth: 0,
            fontSize: '0.75rem',
            marginLeft: spacing(0.5),
        },
    },
}));

// #FOLD_BLOCK
const StyledPrioritySelectorItem = styled('div')(({ theme: { palette, spacing }, color }) => ({
    [`& .${classes.bullet}`]: {
        backgroundColor: color ? color[400] : palette.divider,
        borderRadius: '50%',
        width: spacing(2),
        height: spacing(2),
        marginRight: spacing(2),
        display: 'inline-block',
    },
    [`&.${classes.prioritySelectorItem}`]: {
        display: 'flex',
        alignItems: 'center',
    },
    [`& .${classes.priorityText}`]: {
        '@media (max-width: 500px)': {
            display: 'none',
        },
    },
    [`& .${classes.priorityShortText}`]: {
        '@media (min-width: 500px)': {
            display: 'none',
        },
    },
}));
// #FOLD_BLOCK
const StyledWeekViewTimeTableCell = styled(WeekView.TimeTableCell)(groupingStyles);
// #FOLD_BLOCK
const StyledTooltipContent = styled('div')(({ theme: { spacing, typography, palette }, color }) => ({
    [`&.${classes.content}`]: {
        padding: spacing(3, 1),
        paddingTop: 0,
        backgroundColor: palette.background.paper,
        boxSizing: 'border-box',
        width: '400px',
    },
    [`& .${classes.contentContainer}`]: {
        paddingBottom: spacing(1.5),
    },
    [`& .${classes.text}`]: {
        ...typography.body2,
        display: 'inline-block',
    },
    [`& .${classes.title}`]: {
        ...typography.h6,
        color: palette.text.secondary,
        fontWeight: typography.fontWeightBold,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'normal',
    },
    [`& .${classes.icon}`]: {
        verticalAlign: 'middle',
    },
    [`& .${classes.contentItemIcon}`]: {
        textAlign: 'center',
    },
    [`& .${classes.grayIcon}`]: {
        color: palette.action.active,
    },
    [`& .${classes.colorfulContent}`]: {
        color: color[300],
    },
    [`& .${classes.lens}`]: {
        width: spacing(4.5),
        height: spacing(4.5),
        verticalAlign: 'super',
    },
    [`& .${classes.textCenter}`]: {
        textAlign: 'center',
    },
    [`& .${classes.dateAndTitle}`]: {
        lineHeight: 1.1,
    },
    [`& .${classes.titleContainer}`]: {
        paddingBottom: spacing(2),
    },
    [`& .${classes.container}`]: {
        paddingBottom: spacing(1.5),
    },
}));

// #FOLD_BLOCK
const StyledDayViewDayScaleCell = styled(DayView.DayScaleCell)(groupingStyles);

const StyledWeekViewDayScaleCell = styled(WeekView.DayScaleCell)(groupingStyles);

const StyledGroupingPanelCell = styled(GroupingPanel.Cell)(groupingStyles);

const StyledDayViewTimeTableCell = styled(DayView.TimeTableCell)(groupingStyles);

const DayViewTimeTableCell = ({
    groupingInfo, ...restProps
}) => {
    const groupId = groupingInfo[0].id;
    return (
        <StyledDayViewTimeTableCell
            className={classNames({
                [classes.cellLowPriority]: groupId === 1,
                [classes.cellMediumPriority]: groupId === 2,
                [classes.cellHighPriority]: groupId === 3,
            })}
            groupingInfo={groupingInfo}
            {...restProps}
        />
    );
};
// #FOLD_BLOCK
const DayViewDayScaleCell = ({
    groupingInfo, ...restProps
    // #FOLD_BLOCK
}) => {
    const groupId = groupingInfo[0].id;
    return (
        <StyledDayViewDayScaleCell
            className={classNames({
                [classes.headerCellLowPriority]: groupId === 1,
                [classes.headerCellMediumPriority]: groupId === 2,
                [classes.headerCellHighPriority]: groupId === 3,
            })}
            groupingInfo={groupingInfo}
            {...restProps}
        />
    );
};
// #FOLD_BLOCK
const WeekViewTimeTableCell = ({
    groupingInfo, ...restProps
    // #FOLD_BLOCK
}) => {
    const groupId = groupingInfo[0].id;
    return (
        <StyledWeekViewTimeTableCell
            className={classNames({
                [classes.cellLowPriority]: groupId === 1,
                [classes.cellMediumPriority]: groupId === 2,
                [classes.cellHighPriority]: groupId === 3,
            })}
            groupingInfo={groupingInfo}
            {...restProps}
        />
    );
};
// #FOLD_BLOCK
const WeekViewDayScaleCell = ({
    groupingInfo, ...restProps
    // #FOLD_BLOCK
}) => {
    const groupId = groupingInfo[0].id;
    return (
        <StyledWeekViewDayScaleCell
            className={classNames({
                [classes.headerCellLowPriority]: groupId === 1,
                [classes.headerCellMediumPriority]: groupId === 2,
                [classes.headerCellHighPriority]: groupId === 3,
            })}
            groupingInfo={groupingInfo}
            {...restProps}
        />
    );
};
// #FOLD_BLOCK
const GroupingPanelCell = ({
    group, ...restProps
    // #FOLD_BLOCK
}) => {
    const groupId = group.id;
    return (
        <StyledGroupingPanelCell
            className={classNames({
                [classes.headerCellLowPriority]: groupId === 1,
                [classes.headerCellMediumPriority]: groupId === 2,
                [classes.headerCellHighPriority]: groupId === 3,
            })}
            group={group}
            {...restProps}
        >
        </StyledGroupingPanelCell>
    );
};

const PrioritySelectorItem = ({
    color, text: resourceTitle,
}) => {
    const text = resourceTitle || 'Show All';
    const shortText = resourceTitle ? text.substring(0, 1) : 'All';

    return (
        <StyledPrioritySelectorItem className={classes.prioritySelectorItem} color={color}>
            <span className={classes.bullet} />
            <span className={classes.priorityText}>{text}</span>
            <span className={classes.priorityShortText}>{shortText}</span>
        </StyledPrioritySelectorItem>
    );
};

const PrioritySelector = ({
    priorityChange, priority,
}) => {
    const currentPriority = priority > 0 ? colors[priority - 1] : {};
    return (
        <StyledFormControl className={classes.prioritySelector} variant="standard">
            <Select
                disableUnderline
                value={priority}
                onChange={(e) => {
                    priorityChange(e.target.value);
                }}
                renderValue={() => (
                    <PrioritySelectorItem text={currentPriority.text} color={currentPriority.color} />
                )}
            >
                <MenuItem value={0}>
                    <PrioritySelectorItem />
                </MenuItem>
                {colors.map(({ id, color, text }) => (
                    <MenuItem value={id} key={id.toString()}>
                        <PrioritySelectorItem color={color} text={text} />
                    </MenuItem>
                ))}
            </Select>
        </StyledFormControl>
    );
};

const FlexibleSpace = (({
    priority, priorityChange, ...restProps
}) => (
    <StyledToolbarFlexibleSpace {...restProps} className={classes.flexibleSpace}>
        <PrioritySelector priority={priority} priorityChange={priorityChange} />
    </StyledToolbarFlexibleSpace>
));

const TooltipContent = ({
    appointmentData, formatDate, appointmentResources,
    // #FOLD_BLOCK
}) => {
    const resource = appointmentResources[0];
    return (
        <StyledTooltipContent className={classes.content} color={resource.color}>
            <Grid container alignItems="flex-start" className={classes.titleContainer}>
                <Grid item xs={2} className={classNames(classes.textCenter)}>
                    <Lens className={classNames(classes.lens, classes.colorfulContent)} />
                </Grid>
                <Grid item xs={10}>
                    <div>
                        <div className={classNames(classes.title, classes.dateAndTitle)}>
                            {appointmentData.title}
                        </div>
                        <div className={classNames(classes.text, classes.dateAndTitle)}>
                            {formatDate(appointmentData.startDate, { day: 'numeric', weekday: 'long' })}
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid container alignItems="center" className={classes.contentContainer}>
                <Grid item xs={2} className={classes.textCenter}>
                    <AccessTime className={classes.icon} />
                </Grid>
                <Grid item xs={10}>
                    <div className={classes.text}>
                        {`${formatDate(appointmentData.startDate, { hour: 'numeric', minute: 'numeric' })}
                - ${formatDate(appointmentData.endDate, { hour: 'numeric', minute: 'numeric' })}`}
                    </div>
                </Grid>
            </Grid>
            <Grid container alignItems="center" key={`${resource.fieldName}_${resource.id}`}>
                <Grid
                    className={classNames(classes.contentItemIcon, classes.icon, classes.colorfulContent)}
                    item
                    xs={2}
                >
                </Grid>
                <Grid item xs={10}>
                    <span className={classNames(classes.text, classes.colorfulContent)}>
                        {resource.text}
                    </span>
                </Grid>
            </Grid>
        </StyledTooltipContent>
    );
};

export default class Calendar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: '2018-05-14',
            currentViewName: 'Day',
            data: data,
            currentPriority: 0,
            resources: [{
                fieldName: 'priorityId',
                title: 'Priority',
                instances: colors,
            }],
        };
        this.currentViewNameChange = (currentViewName) => {
            this.setState({ currentViewName });
        };
        this.currentDateChange = (currentDate) => {
            this.setState({ currentDate });
        };
        this.priorityChange = (value) => {
            const { resources } = this.state;
            const nextResources = [{
                ...resources[0],
                instances: value > 0 ? [colors[value - 1]] : colors,
            }];

            this.setState({ currentPriority: value, resources: nextResources });
        };
        this.flexibleSpace = connectProps(FlexibleSpace, () => {
            const { currentPriority } = this.state;
            return {
                priority: currentPriority,
                priorityChange: this.priorityChange,
            };
        });
    }

    componentDidUpdate() {
        this.flexibleSpace.update(); // #IMPORTANT_LINE
    }

    render() {
        const {
            data, currentDate, currentViewName, currentPriority, resources,
        } = this.state;

        return (
            <Paper>
                <Scheduler
                    data={filterTasks(data, currentPriority)}
                    height={660}
                >
                    <ViewState
                        currentDate={currentDate}
                        currentViewName={currentViewName}
                        onCurrentViewNameChange={this.currentViewNameChange}
                        onCurrentDateChange={this.currentDateChange}
                    />
                    <GroupingState
                        grouping={grouping}
                    />

                    <DayView
                        startDayHour={6}
                        endDayHour={24}
                        timeTableCellComponent={DayViewTimeTableCell}
                        dayScaleCellComponent={DayViewDayScaleCell}
                    />
                    <WeekView
                        startDayHour={6}
                        endDayHour={24}
                        timeTableCellComponent={WeekViewTimeTableCell}
                        dayScaleCellComponent={WeekViewDayScaleCell}
                    />

                    <Appointments />
                    <Resources
                        data={resources}
                    />
                    <IntegratedGrouping />

                    <GroupingPanel
                        cellComponent={GroupingPanelCell}
                    />
                    <Toolbar flexibleSpaceComponent={this.flexibleSpace} />
                    <DateNavigator />
                    <ViewSwitcher />
                    <AppointmentTooltip
                        contentComponent={TooltipContent}
                        showOpenButton
                        showCloseButton
                    />
                    <AppointmentForm readOnly />
                </Scheduler>
            </Paper>
        );
    }
}
