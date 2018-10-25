import React, { Component, Fragment } from 'react';
import { withStyles, Typography } from '@material-ui/core';

const styles = {
  introText: {
    width: '80%',
    margin: 'auto',
    marginTop: '5vh',
    fontSize: 14,
    textAlign: 'center',
    color: '#808080',
  },
  text: {
    width: '100%',
    margin: 'auto',
    marginTop: '30vh',
    fontSize: 32,
    textAlign: 'center',
    letterSpacing: 6,
    color: '#808080',
  },
};

class Photos extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Typography className={classes.introText} variant='overline'>In his free time, Khoa enjoys to go on hikes and also is interested in photography. Here are a few of his photos.</Typography>
        <Typography className={classes.text} variant='overline'>coming soon</Typography>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Photos);