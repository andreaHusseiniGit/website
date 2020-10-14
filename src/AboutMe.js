import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const AboutMe = () => {
    return (
        <div id="AboutMe">
            <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center"
                color='white'
                className='aboutme'
                style={{ marginTop: '30px', paddingLeft: '300px', paddingRight: '300px', marginBottom: '30px' }}>

                <Grid item md={8} xs={12}>
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        style={{ backgroundColor: 'rgba(252, 158, 71, 0.5)', color: 'black', padding: '50px' }}>
                        <Grid item>
                            <Typography
                                display="block"
                                justifyContent="center"
                                align="left"
                                variant="h4"
                                style={{ opacity: '100%', fontWeight: 'bold', fontSize: '40px', marginBottom: '20px' }}
                                className='aboutme-title'>
                                About Me
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                className='aboutme-text'>
                                Throughout my final years of high school, I discovered my passion for physics and dedicated my free time to
                                reading physics books and going to public lectures. When I came to university, I realized that what fascinates
                                me about physics the most, is how you can use it in combination with rigorous mathematics to describe problems
                                reaching from the behavior of particles at the quantum level to the dynamics of galaxies and the history of our entire
                                cosmos. I am currently most interested in quantum computing, quantum information and cryptography and how these
                                fields can come together to solve the pressing issues of today like privacy and the ability to model quantum
                                systems. In my free time I like to learn about web development (which is how this website came about), play
                                golf and cook.
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid item md={2} xs={0}>
                    </Grid>

                </Grid>
                <Grid item md={2} sm={12}
                    className='profile'>
                    <div
                        style={{
                            width: '200px', height: '200px', position: 'relative', overflow: 'hidden',
                            borderRadius: '50%', marginLeft: '30px', marginRight: '0'
                        }}>
                        <img
                            src='/images/formal.jpg'
                            style={{ display: 'inline', height: 'auto', width: '200px' }}>
                        </img>
                    </div>
                </Grid>
            </Grid>
        </div>

    )
}

export default AboutMe;