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
        project: 'Kinetic Gravity Braiding',
        company:
            'PhD. Ignacy Sawicki, CEICO',
        description: "Collaborative research working with my supervisor to further develop the KGB theory both analytically and numerically. Using Mathematica to obtain numerical solutions of a system of coupled differential equations and drawing conclusions about the theory from those results.",
    },
    {
        project: 'Gravitational Microlensing',
        company:
            'Institute of Astronomy, University of Cambridge',
        description: 'Research project under the supervision of Prof. Wyn Evans creating a classifier to filter microlensing events. Identifying microlensing events using point-source-point-lens model and parallax model; model fitting, classification and visualization using Python. Currently in the process of writing up for publication.',
    },
    {
        project: 'Origin of Cool Gas',
        company:
            'PhD. Romeel Dave, University of Edinburgh',
        description: 'Masters project to examine the origin and purpose of cool gas in galaxies using the SIMBA cosmological simulation. Looking at properties and distribution of HI and HII gas and comparing simulation data to observations. Developing a timeline for the project and taking part in weekly research group meetings.',
    },
    {
        project: 'Winner of terra_nova Hack',
        company:
            'University of Edinburgh',
        description: 'Developing Pancake Ice Analysis Tool (PIAT) in a team of 3 to monitor pancake ice formation and the factors that play a role in the process using Earth observational data. Awarded the “Best Project” and “Best Data Visualization” prize',
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
        width: '100%',
    },
}));


const AcademicProject = (props) => {
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
                                style={{ opacity: '100%', marginBottom: '0', paddingTop: '10px' }}>
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

export default AcademicProject;