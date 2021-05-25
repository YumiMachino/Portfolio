import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Fab} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import { Link, NavLink } from 'react-router-dom';
import {useState, useEffect} from 'react';
import HideOnScroll from './HideOnScroll';
import BackToTop from "./BackToTop";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Avatar from '@material-ui/core/Avatar';
import {deepPurple } from '@material-ui/core/colors';

/*
Style setting
 */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  userLogo: {
    marginLeft: theme.spacing(2),
  },
  btnHover: {
    margin:'10px',
    '&:hover': {
      border: '1px solid #fff',
    },
    '&.active': {
      border: '1px solid red',
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
          <IconButton edge="start" className={classes.userLogo} color="inherit" aria-label="menu" >
            <Avatar href="#top" className={classes.purple}>YM</Avatar>
          </IconButton>

          <div style={{flexGrow: 1}} />
          <div>
            <Button href="#top" color="inherit" className={classes.btnHover}>HOME</Button>
            <Button href="#about" color="inherit"  className={classes.btnHover}  >ABOUT</Button>
            <Button href="#work" color="inherit" className={classes.btnHover}>WORK</Button>
            <Button href="#contact" color="inherit" className={classes.btnHover}>CONTACT</Button>
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>

    <Toolbar  id="back-to-top-anchor"/>
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