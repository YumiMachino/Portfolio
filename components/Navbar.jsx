import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom';
import {useState, useEffect} from 'react';
import HideOnScroll from './HideOnScroll';
import BackToTop from "./BackToTop";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {deepPurple } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Fab, Toolbar, Typography, Button, IconButton, Avatar, Hidden, Drawer } from '@material-ui/core';


/*
Style setting
 */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  userLogo: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
    },
  },
  btnHover: {
    margin:'10px',
    transition: '0.5s',
    '&:hover': {
      border: '1px solid #fff',   
    },
    [theme.breakpoints.down('sm')]: {
       '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      },
    },
  },
   purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: '#303f9f',
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));


export default function Navbar() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const flag = () => {
    setDrawerOpen(!drawerOpen);
  }
 
  const handleClick = () => {
    drawerOpen ? setDrawerOpen(false) : setDrawerOpen(true);
  }

  return (
    <div className={classes.root}>
     
      <HideOnScroll>
       <AppBar 
          position="fixed" 
          style={{
            backgroundColor: "black",
            color: 'white',
            height: '100px',
            justifyContent: 'space-evenly'
          }}
      >
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.userLogo} 
            color="inherit" 
            aria-label="menu"
             >
            <Avatar 
              href="#top" 
              className={classes.purple}>
                YM
                </Avatar>
          </IconButton>

          <div style={{flexGrow: 1}} />
          <Hidden xsDown>
            <Button 
              href="#top" 
              color="inherit" 
              className={classes.btnHover}>
                HOME
                </Button>
            <Button 
              href="#about" 
              color="inherit"  
              className={classes.btnHover}>
                ABOUT
                </Button>
            <Button 
              href="#work" 
              color="inherit" 
              className={classes.btnHover}>
                WORK
                </Button>
            <Button 
              href="#contact" 
              color="inherit" 
              className={classes.btnHover}>
                CONTACT
                </Button>
            </Hidden> 

            <Hidden smUp>
              <MenuIcon onClick={handleClick} />
              <Drawer 
                anchor='top' 
                open ={drawerOpen} 
                onClose={flag} 
                variant="temporary" 
                transitionDuration={500} 
                >
                  <Button 
                    href="#top" 
                    color="inherit" 
                    className={classes.btnHover} 
                    onClick={flag}>
                      HOME
                      </Button>
                  <Button 
                    href="#about" 
                    color="inherit"  
                    className={classes.btnHover} 
                    onClick={flag}
                     >ABOUT
                     </Button>
                  <Button 
                    href="#work" 
                    color="inherit" 
                    className={classes.btnHover} 
                    onClick={flag}>
                      WORK
                      </Button>
                  <Button 
                    href="#contact" 
                    color="inherit" 
                    className={classes.btnHover} 
                    onClick={flag} >
                      CONTACT
                      </Button>           
              </Drawer>
            </Hidden>

        </Toolbar>
      </AppBar>
    </HideOnScroll>

    <Toolbar id="back-to-top-anchor"/>
    <BackToTop>
      <Fab 
        color="primary" 
        size="large" 
        aria-label="scroll back to top"
        >
        <KeyboardArrowUpIcon />
      </Fab>
    </BackToTop>
    </div>
  );
}
