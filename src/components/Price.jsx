import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Amazon1 from '../images/Amazon1.jpg';
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
        <Grid item md={5} style={{backgroundColor:'#0a0a0a'}}>
          <Paper className={classes.paper} >
              <div style={{backgroundColor:'#0a0a0a'}}>
           < Typography variant="h4" style={{color:'#FFFFFF', marginTop:'70px'}}> Welcome to Prime Video </Typography>
           < Typography variant="h6" style={{color:'#FFFFFF',  marginTop:'20px'}}> 
           Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals
           
            </Typography>
            <Button variant="contained"  style={{backgroundColor:'#1393b0',  marginTop:'30px'}}>
        Get Prime at 129 per month
      </Button>
      < Typography   style={{color:'#FFFFFF',  marginTop:'10px'}}> 
          With any credit card or select debit cards 
           
            </Typography>

            <Button variant="contained" style={{backgroundColor:'#1393b0', marginTop:'30px'}}>
        Join Prime at 999 per year
      </Button>
      < Typography  style={{color:'#FFFFFF', marginTop:'10px'}} > 
      With all electronic payment methods and Pay on Delivery for select PINs
           
            </Typography>

            </div>
          
          </Paper>
        </Grid>
        <Grid item md={7}>
          <Paper className={classes.paper} >
              <img src={Amazon1 }/>

          </Paper>
          
        </Grid>
        
      </Grid>
    </div>
  );
}
