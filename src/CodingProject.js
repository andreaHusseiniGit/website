import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import GitHubIcon from '@material-ui/icons/GitHub';
import SchoolIcon from '@material-ui/icons/School';

const AutoPlaySwipeableViews = (SwipeableViews);

const tutorialSteps = [
    {
        project: 'Kirket',
        company:
            'independent standalone web application',
        description: "Working in a team of two to develop a cricket scoring web application to ease the scoring process and display team and player statistics using data science visualizations. In charge of the majority of front-end development using CSS, Javascript, React and Material UI.",
    },
    {
        project: 'Hotel Reservation System',
        company:
            'EmbedIT, HomeCredit International a.s.',
        description: 'Independent programming project developing a single web page application to demonstrate the functionality of a hotel reservation system. This project included both front-end (React & Javascript) and back-end (C#) development and a cross-platform mobile application using Xamarin Forms.',
    },
    {
        project: 'QuHackEd: Quantum Emulation',
        company:
            'University of Edinburgh',
        description: 'Awarded second place for implementing the Quantum Emulation Algorithm for a single qubit in a team of 5 students. Running the produced code on Rigetti QPU and achieving an 80%+ accuracy. Presenting our results to an audience with varying levels of quantum computing knowledge.',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: 'rgba(252, 158, 71, 0.7)',
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 600,
        overflow: 'hidden',
        width: '100%'
    },
}));


const CodingProject = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <div
            className={classes.root}
            style={{ marginRight: 'auto', marginLeft: 'auto' }}>
            <Paper square elevation={0} className={classes.header}
                style={{}}>
                <Typography>{tutorialSteps[activeStep].label} {props.projectType}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={step.label}
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}>
                        {Math.abs(activeStep - index) <= 2 ? (<>
                            <Typography
                                display="block"
                                justifyContent="center"
                                align="center"
                                variant="h4"
                                style={{ opacity: '100%', marginBottom: '0', paddingTop: '10px', height: '100%' }}>
                                {step.project}
                            </Typography>
                            <Typography
                                display="block"
                                justifyContent="center"
                                align="center"
                                variant="h6"
                                style={{ opacity: '100%', marginBottom: '0' }}>
                                {step.company}
                            </Typography>
                            <hr style={{ border: '0.5px solid #fc7b03', width: '60%', opacity: '70%' }}></hr>
                            <Typography
                                display="block"
                                justifyContent="center"
                                align="center"
                                variant="body1"
                                style={{ opacity: '100%', marginBottom: '0', paddingRight: '10px', paddingLeft: '10px' }}>
                                {step.description}
                            </Typography>
                            <Typography
                                display="block"
                                justifyContent="center"
                                align="right"
                                variant="body1"
                                style={{ opacity: '100%', marginBottom: '0', marginRight: '20px', paddingBottom: '20px', paddingTop: '10px' }}>
                                {props.projectType === 'Coding Projects' ? <GitHubIcon /> : <SchoolIcon />}
                            </Typography>
                        </>) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                style={{ backgroundColor: 'rgba(252, 158, 71, 0.7)' }}
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                </Button>
                }
            />
        </div>
    )
}

export default CodingProject;