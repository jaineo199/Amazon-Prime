import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Amazonlogo from '../images/Amazon.png';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft:'1000px'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{  backgroundColor:'#001a33'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} >
            <img style={{ width:'175px', height:'62px'}} src={Amazonlogo}/>
          </IconButton>
         
          <LanguageIcon className={classes.title}/>
          <AccountCircleIcon/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
