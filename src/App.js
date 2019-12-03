import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from '@material-ui/core/Chip';

import FixedColumnLayout from './components/grid/fixed_column';
import ColumnDirection from './components/grid/column_direction';
import FixedPosition  from "./components/appbar/appbar_fixed";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const Container = props => <Grid container {...props} />;
const Item = props => <Grid item xs={12} sm={6} md={3} {...props} />; 

const App = withStyles(styles)(({ classes,justify }) => (
  <div className={classes.root}>
    <FixedPosition/>
  <FixedColumnLayout width={6}/>
  <ColumnDirection/>
    <Container spacing={4}>
      <Item>
        <Paper className={classes.paper}>
        <Container justify="center" spacing={1}>
            <Grid item>
              <Chip label="xs=12" />
            </Grid>
            <Grid item>
              <Chip label="sm=6" />
            </Grid>
            <Grid item>
              <Chip label="md=3" />
            </Grid>
          </Container>  
        </Paper>
      </Item>
      <Item>
        <Paper className={classes.paper}>
        <Container justify="space-between" spacing={1}>
            <Grid item>
              <Chip label="xs=12" />
            </Grid>
            <Grid item>
              <Chip label="sm=6" />
            </Grid>
            <Grid item>
              <Chip label="md=3" />
            </Grid>
          </Container>
        </Paper>
      </Item>
      <Item>
        <Paper className={classes.paper}>
        <Container justify="space-around" spacing={1}>
            <Grid item>
              <Chip label="xs=12" />
            </Grid>
            <Grid item>
              <Chip label="sm=6" />
            </Grid>
            <Grid item>
              <Chip label="md=3" />
            </Grid>
          </Container>
        </Paper>
      </Item>
      <Item>
        <Paper className={classes.paper}>
        <Container justify={justify} spacing={1}>
            <Grid item>
              <Chip label="xs=12" />
            </Grid>
            <Grid item>
              <Chip label="sm=6" />
            </Grid>
            <Grid item>
              <Chip label="md=3" />
            </Grid>
          </Container>
        </Paper>
      </Item>
    </Container>
  </div>
));

export default App;
