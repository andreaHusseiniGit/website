import React from 'react';
import { Typography, Grid, Link } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = () => {
    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            display='flex'
            style={{ height: '100px', backgroundColor: 'rgba(0,0,0,0.7)', paddingBottom: '20px' }}>

            <Grid item xs={12}>
                <Typography
                    display="block"
                    justifyContent="center"
                    align="center"
                    style={{ color: 'white', fontWeight: 'bold', marginBottom: '0', paddingBottom: '0', paddingTop: '20px' }}>
                    CONTACTS
                </Typography>
            </Grid>

            <Grid item sm={6} xs={12}
                className='footer-content'>
                <Typography
                    display="block"
                    justifyContent="center"
                    align="center"
                    style={{ color: 'white', marginTop: '0', paddingTop: '0' }}>
                    andrea.husseiniova@gmail.com
                </Typography>
            </Grid>

            <Grid item sm={6} xs={12}>
                <Typography
                    display="block"
                    justifyContent="center"
                    align="center"
                    style={{ color: 'white' }}>
                    <a href='https://github.com/andreaHusseiniGit'>
                        <GitHubIcon className='icon' style={{ color: 'white', paddingRight: '10px' }} />
                    </a>
                    <a href='https://www.linkedin.com/in/ahusseiniova/'>
                        <LinkedInIcon className='icon' style={{ color: 'white' }} />
                    </a>
                </Typography>
            </Grid>

        </Grid >

    )
}

export default Footer;