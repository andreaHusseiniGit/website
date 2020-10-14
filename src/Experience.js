import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Item from './Item.js';
import Scroll from './Scroll.js';

const Experience = () => {
    return (
        <div id="Experience">
            <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center"
                style={{ paddingLeft: '20px', paddingRight: '20px', marginTop: '30px', marginBottom: '30px' }}>

                <Grid item md={6} xs={12}>
                    <Typography
                        display="block"
                        justifyContent="center"
                        align="center"
                        variant="h3"
                        className='experience-text'
                        style={{
                            opacity: '100%', fontWeight: 'bold', fontSize: '40px', color: 'white',
                            backgroundColor: 'rgba(0,0,0,0.7', height: '310px', paddingTop: '120px'
                        }}>
                        Work Experience
                </Typography>
                </Grid>

                <Grid item md={6} xs={12}>
                    <Scroll
                        color='rgba(252, 158, 71, 0.8)'>
                        <Item
                            jobTitle='Quantum Computing Intern'
                            company='Riverlane: Jun-Sep 2020'
                            text='Working in a software-oriented quantum computing startup in a 10 week internship program. 
                    Researching and implementing benchmarking algorithms into Deltaflow.OS using dataflow programming. This 
                    internship gave me an insight into quantum computing and working in the industry, largely enhanced my programming 
                    skills and taught me industry-level project management and how to present my results.' />
                        <Item
                            jobTitle='IB Tutor'
                            company='Elite IB: Apr 2019 - Apr 2020'
                            text='Tutoring IB Mathematics and Physics of all levels online to students in their last 2 years of high school.
                    Preparing materials and worksheets for lessons and guiding students in their exam preparation. This job taught me 
                    time management, organization and how to present complicated concepts uisng simple language, examples and visuals.' />
                        <Item
                            jobTitle='Science Presenter'
                            company='Fun Scientists: Feb 2019 - Apr 2020'
                            text='Demonstrating and teaching fun science experiments at local primary schools and events across the UK 
                    with the aim of promoting science literacy and sparking interest in young children. Interacting with high profile 
                    clients at private events enhancing my presentation and public speaking skills.' />
                        <Item
                            jobTitle='Mission Researcher'
                            company='Asteria: Jan 2020 - Apr 2020'
                            text='Working as a mission researcher in a student-led satellite project with the aim of launching a small satellite 
                        from Scotland. Conduncting research and writing a mission statement and research proposal for our sponsors justifying 
                        the costs and purpose of the mission.' />
                    </Scroll>
                </Grid>

            </Grid>
        </div>
    )
}

export default Experience;