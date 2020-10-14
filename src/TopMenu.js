import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const TopMenu = () => {
  return (<AppBar position="static"
    style={{ color: 'black', background: 'rgba(255, 255, 255, 0.1)' }}>
    <Toolbar>
      <Button edge="start" color="inherit" aria-label="menu" className='toolbar-button'
        onClick={() => window.location.href = "#AboutMe"}>
        About me
              </Button>
      <Button edge="start" color="inherit" aria-label="menu" className='toolbar-button'
        onClick={() => window.location.href = "#Experience"}>
        Work Experience
              </Button>
      <Button edge="start" color="inherit" aria-label="menu" className='toolbar-button'
        onClick={() => window.location.href = "#Skills"}>
        Skills
              </Button>
      <Button edge="start" color="inherit" aria-label="menu" className='toolbar-button'
        onClick={() => window.location.href = "#Projects"}>
        Projects
              </Button>
      {/* <Button color="inherit"
        style={{ marginLeft: 'auto' }}>Contact Me</Button> */}
    </Toolbar>
  </AppBar>

  )
}

export default TopMenu;