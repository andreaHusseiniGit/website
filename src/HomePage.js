import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const HomePage = () => {

    const [toggle, setToggle] = useState(false);

    return (<div
        style={{ color: 'white' }}>
        <Grid container
            direction="row"
            justify="flex-start"
            alignItems="left"
            // style={{
            //     backgroundImage: `url(${"images/orange.jpg"})`,
            //     backgroundPosition: 'center',
            //     backgroundSize: 'cover',
            //     backgroundRepeat: 'no-repeat',
            //     height: '800px',
            //     margin: '0',
            //     padding: "0"
            // }}
            color='white'
            spacing={2}
            style={{ position: 'relative', height: '800px' }}
            className='img-background'>
            <img
                src="/images/orange.jpg"
                style={{
                    position: 'absolute', width: '100vw', height: '800px',
                    objectFit: 'cover', zIndex: '-1'
                }}
                className='img-background'>
            </img>
            <Grid item sm={6} xs={0}>
            </Grid>

            <Grid item sm={6} xs={12}
                style={{ marginTop: '30px' }}
                className='homepage-text'>
                <Typography
                    display="block"
                    justifyContent="center"
                    align="left"
                    variant="h4"
                    color='inherit'
                    style={{
                        opacity: '100%', paddingRight: '30px', paddingTop: '20px', paddingLeft: '0',
                        paddingBottom: '0px', fontWeight: 'bold', margin: '0', fontSize: '40px'
                    }}
                    className='hey'>
                    Hey, I'm
                    </Typography>
                <Typography
                    display="block"
                    justifyContent="center"
                    align="left"
                    variant="h2"
                    color='inherit'
                    style={{
                        opacity: '100%', paddingRight: '30px', paddingTop: '0', paddingLeft: '0',
                        paddingBottom: '20px', fontWeight: 'bold', margin: '0', fontSize: '100px'
                    }}
                    className='name'>
                    Andrea Husseiniova
                    </Typography>
                <Button
                    variant="contained"
                    color='white'
                    className='homepage-button toolbar-button'
                    style={{ border: '1px solid #fc9e47', backgroundColor: 'white', color: 'black' }}
                    onClick={() => window.location.href = "#AboutMe"}>
                    Get to know me
                    </Button>
            </Grid>


        </Grid>
    </div>
    )
}

export default HomePage;