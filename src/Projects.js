import React from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import AcademicProject from './AcademicProject.js';
import CodingProject from './CodingProject.js';


const Projects = () => {

    return (
        <div id="Projects">
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ paddingLeft: '0px', paddingRight: '0px', marginTop: '30px' }}
                className='projects-wrapper'>

                <Grid item md={6} xs={12}
                    style={{ marginBottom: '30px' }}
                    className='projects-item'>
                    <CodingProject
                        projectType='Coding Projects' />
                </Grid>

                <Grid item md={6} xs={12}
                    style={{ marginBottom: '30px' }}
                    className='projects-item'>
                    <AcademicProject
                        projectType='Academic Projects' />
                </Grid>

                {/* <Grid item xs={4}
            style={{backgroundColor:'rgba(205, 255, 219,0.8)', height:'400px'}}>
            <Typography
                display="block"
                justifyContent="center"
                align="center"
                variant="h3"
                style={{opacity:'100%', fontWeight:'bold', fontSize:'40px', color:'black', marginTop:'25%'}}>
                    Projects
                </Typography>
            </Grid> */}

            </Grid>
        </div>

    )
}

export default Projects;