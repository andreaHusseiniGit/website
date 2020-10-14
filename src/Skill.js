import React from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const Skill = (props) => {
    return (
        <Grid item md={2} sm={4} xs={6}>
            <div style={{ backgroundColor: 'black', border: '2px solid #fc7b03' }}
                className='skill hexagon'>
                <span>
                    <Typography
                        display="block"
                        justifyContent="center"
                        align="center"
                        variant="body1"
                        style={{ opacity: '100%', fontWeight: 'bold', marginTop: '20%', color: 'white' }}>
                        {props.skillName}
                    </Typography>
                </span>
            </div>
        </Grid>

    )
}

export default Skill;