import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Amazon2 from '../images/Amazon2.jpg';
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
           < Typography variant="h4" style={{color:'#FFFFFF', marginTop:'70px'}}> One membership, many benefits  </Typography>
           < Typography variant="h6" style={{color:'#FFFFFF',  marginTop:'20px'}}> 
           Your Prime membership now also includes ad-free music along with unlimited free, fast delivery on eligible items, exclusive access to deals & more. 
           
            </Typography>
            <Button variant="contained"  style={{backgroundColor:'#1393b0', width:'300px',  marginTop:'30px'}}>
        Get Started
      </Button>
      

            </div>
          
          </Paper>
        </Grid>
        <Grid item md={7}>
          <Paper className={classes.paper} >
              <img src={Amazon2 }/>

          </Paper>
          
        </Grid>
        
      </Grid>
    </div>
  );
}
