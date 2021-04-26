import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Amazon4 from '../images/Amazon4.png';
import Amazon6 from '../images/Amazon6.jpg';
import Amazon7 from '../images/Amazon7.png';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item md={4}>
          <Paper className={classes.paper}>
          <img src={Amazon4}/>
          < Typography variant="h4" > Watch anywhere </Typography>
           < Typography variant="h6"> 
           Enjoy from the web or with the Prime Video app on your phone, tablet, or select Smart TVs — on up to 3 devices at once.
           
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper className={classes.paper}> <img src={Amazon6}/>
          < Typography variant="h4" > Download and go </Typography>
           < Typography variant="h6"> 
           Watch offline on the Prime Video app when you download titles to your iPhone, iPad, Tablet, or Android device.
           
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper className={classes.paper}> <img src={Amazon7}/>
          < Typography variant="h4" >Data saver</Typography>
           < Typography variant="h6"> 
           Control data usage while downloading and watching videos on select phones or tablets.
           
            </Typography>
          </Paper>
        </Grid>
      
      </Grid>
    </div>
  );
}
