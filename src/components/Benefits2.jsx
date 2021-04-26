import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Amazon3 from '../images/Amazon3.jpg';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
 
    textAlign: 'center',
    // color: theme.palette.text.secondary,
   

  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >

      <Grid item md={6}>
          <Paper className={classes.paper} >
              <img src={Amazon3}/>

          </Paper>
          
        </Grid>
        
        <Grid item md={6} style={{backgroundColor:'#0a0a0a'}}>
          <Paper className={classes.paper} >
              <div style={{backgroundColor:'#0a0a0a'}}>
           < Typography variant="h4" style={{color:'#FFFFFF', marginTop:'70px'}}> Even better with Fire TV Stick  </Typography>
           < Typography variant="h6" style={{color:'#FFFFFF',  marginTop:'20px'}}> 
           The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds. 
           
            </Typography>
            <Button variant="contained"  style={{backgroundColor:'#1393b0', width:'300px',  marginTop:'30px'}}>
        Get Started
      </Button>
      

            </div>
          
          </Paper>
        </Grid>
      
      </Grid>
    </div>
  );
}
