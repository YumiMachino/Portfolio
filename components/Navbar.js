import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import { Link, NavLink } from 'react-router-dom';


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
  }
}));



export default function Navbar() {
  const classes = useStyles();



  return (
    <div className={classes.root}>
      <AppBar 
          position="fixed" 
          style={{
            backgroundColor: 'black',
            color: '#fff',
            height: '100px',
            justifyContent: 'space-evenly'
          }}
      >
        <Toolbar>
          <IconButton edge="start" className={classes.userLogo} color="inherit" aria-label="menu" >
            <PersonIcon fontSize='large'/>
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
    </div>
  );
}