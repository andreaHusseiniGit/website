import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Skill from './Skill';

const Skills = () => {
    return (
        <div id="Skills">
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ paddingLeft: '30px', paddingRight: "0", marginRight: '0', marginTop: '30px', marginBottom: '30px' }}>

                <Grid item xs={12}>
                    <Typography
                        display="block"
                        justifyContent="center"
                        align="center"
                        variant="h4"
                        style={{
                            opacity: '100%', fontWeight: 'bold', fontSize: '40px', marginBottom: '20px', color: 'black',
                            marginLeft: '0', paddingLeft: '0'
                        }}>
                        Skills
                </Typography>
                </Grid>

                <Skill
                    skillName='Python' />
                <Skill
                    skillName='Javascript' />
                <Skill
                    skillName='HTML & CSS' />
                <Skill
                    skillName='React' />
                <Skill
                    skillName='Material UI' />
                <Skill
                    skillName='LateX' />
                <Skill
                    skillName='Mathematica' />
                <Skill
                    skillName='SQL' />
                <Skill
                    skillName='MS Office' />

            </Grid>
        </div>
    )
}

export default Skills;