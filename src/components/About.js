import React, { Component } from 'react';
import { withStyles, Grid, Button, Collapse, Fade, Typography } from '@material-ui/core';
import Resume from './Resume.js';

import khoa from '../assets/khoapic3.jpg';
const styles = {
  container: {
    width: '90vw',
    display: 'flex',
    margin: 'auto',
    // flexDirection: 'column',
    justifyContent: 'center',
  },
  resumeButton: {
    margin: 'auto',
    marginBottom: 0,
    width: 150,
  },
  resumeLink: {
    textDecoration: 'none',
    fontSize: 12,
    marginBottom: 20,
    marginTop: 4,
    margin: 'auto',
  },
  profilePic: {
    display: 'inline-block',
    borderRadius: 10,
    width: 200,
  },
  profile: {
    marginTop: '4vh',
    width: '70%',
    margin: 'auto',
  },
  blurb: {
    verticalAlign: 'top',
    justifyContent: 'center',
    display: 'inline-block',
    width: '60%',
    marginLeft: 20,
  },
};

class About extends Component {

  state = {
    resume: false,
  }

  showResume = () => {
    this.setState({ resume: !this.state.resume });
  }
  render() {
    const { classes } = this.props;
    return (
      <Fade in={true} timeout={600}>
        <Grid
          container
          direction='column'
          className={classes.container}
        >
          <Button className={classes.resumeButton} variant='outlined' onClick={this.showResume}>{this.state.resume ? 'Close' : 'Resumé'}</Button>
          <a target='_blank' rel='noopener noreferrer' className={classes.resumeLink} href='https://s3-us-west-2.amazonaws.com/khoascloud/Khoa+Huynh+-+Resume.pdf'>or download Resumé</a>
          <Collapse in={this.state.resume}>
            <Resume />
          </Collapse>
          <div className={classes.profile}>
            <img className={classes.profilePic} src={khoa} />
            <Typography className={classes.blurb} variant='body1'>
            
              With a background in both psychology and software development, my aim is to create the best user experience between technology and the end users, with a particular interest in ensuring the best user experience for underrepresented populations.

              <br />
              <br />
              <br />
              <br />

              <strong>Interests: </strong> Photography, Cinematography, Hiking, and Pizza.

            </Typography>

          </div>
        </Grid>
      </Fade>
    );
  }
}

export default withStyles(styles)(About);