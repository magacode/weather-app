import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ErrorBoundary from '../components/error-boundary';
import WeatherContainer from '../containers/weather-container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

const App = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ErrorBoundary>
            <WeatherContainer />  
          </ErrorBoundary>  
        </Grid>      
      </Grid>
    </div>
  );
}

export default App;