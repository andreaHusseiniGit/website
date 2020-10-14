import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const Item = (props) => {
    const [toggle, setToggle] = useState(false);
    const AccordionSummary = withStyles({
        root: {
            flexDirection: "column"
        },
        content: {
            marginBottom: "0px",
        },
        expandIcon: {
            marginRight: 0,
            paddingTop: 0
        }
    })(MuiAccordionSummary);

    return (<Grid container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ color: 'black', marginTop: '0px', marginBottom: '10px' }}>

        <Grid item xs={12}
            style={{ color: 'black' }}>
            <Typography
                display="block"
                justifyContent="center"
                align="center"
                variant="h6"
                style={{ opacity: '100%', fontWeight: 'bold', marginBottom: '0' }}>
                {props.jobTitle}
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <hr style={{ border: '1px solid black', opacity: '50%', width: '50%' }}></hr>
        </Grid>

        <Grid item xs={12}>
            <Typography
                display="block"
                justifyContent="center"
                align="center"
                variant="body1"
                style={{ opacity: '100%', marginBottom: '0' }}>
                {props.company}
            </Typography>
        </Grid>

        <Grid item xs={12}
            display="block"
            justifyContent="center"
            align="center">
            <Accordion style={{
                backgroundColor: 'transparent', border: 'none', boxShadow: 'none',
                width: '60%', marginTop: '0', paddingTop: '0'
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.text}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* <Button color='inherit' variant='outlined'
                    style={{border:'transparent'}}
                    onClick={()=>{
                        setToggle(!toggle)
                    }}><ExpandMoreIcon/></Button> */}
        </Grid>

        {/* <Grid item xs={12}>
            <Typography
                display="block"
                justifyContent="center"
                align="center"
                variant="body1"
                style={{ opacity: '100%', marginBottom: '0' }}
                className={`paragraph ${toggle && 'active'}`}>
                {props.text}
            </Typography>
        </Grid> */}

    </Grid>

    )
}

export default Item;