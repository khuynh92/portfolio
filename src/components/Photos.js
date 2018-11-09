import React, { Component, Fragment } from 'react';
import { withStyles, Typography, Grid, Card, Fade } from '@material-ui/core';

import fall from '../assets/fall.jpg';

import bandera from '../assets/bandera.jpg';
import heatherMaple from '../assets/heatherMaple.jpg';
import infinity from '../assets/infinity.jpg';

import highRock1 from '../assets/highRock1.jpg';
import highRock2 from '../assets/highRock2.jpg';
import highRock3 from '../assets/highRock3.jpg';

import melawka1 from '../assets/melawka1.jpg';
import rattle1 from '../assets/rattle1.jpg';
import rattle2 from '../assets/rattle2.jpg';

import snowlake1 from '../assets/snowlake1.jpg';
import snowlake2 from '../assets/snowlake2.jpg';
import tunnel1 from '../assets/tunnel1.jpg';






const styles = {
  container: {
    width: '90vw',
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  wideImage: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    height: '40vh',
    maxHeight: 300,
  },
  smallImage: {
    marginTop: 10,
    marginBottom: 10,
    width: '38%',
    maxHeight: 300,
    height: '40vh',
  },
  middleImage: {
    marginTop: 10,
    marginBottom: 10,
    maxHeight: 300,
    width: '38%',
    marginLeft: '1%',
    marginRight: '1%',
    height: '40vh',
  },
  threeRow: {
    width: '100%',
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  introText: {
    width: '80%',
    margin: 'auto',
    marginTop: '5vh',
    marginBottom: '5vh',
    fontSize: 14,
    textAlign: 'center',
    color: '#808080',
  },
};

class Photos extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Fade in={true} timeout={600}>
          <Grid className={classes.container}>
            <Typography className={classes.introText} variant='overline'>In his free time, Khoa enjoys taking pictures.</Typography>
            <Card className={classes.wideImage} elevation={8}>
              <img src={fall} className={classes.image} />
            </Card>

            <div className={classes.threeRow}>
              <Card className={classes.smallImage} elevation={8}>
                <img src={heatherMaple} className={classes.image} />
              </Card>
              <Card className={classes.middleImage} elevation={8}>
                <img src={infinity} className={classes.image} />
              </Card>
              <Card className={classes.smallImage} elevation={8}>
                <img src={bandera} className={classes.image} />
              </Card>
            </div>

            <div className={classes.threeRow}>
              <Card className={classes.smallImage} elevation={8}>
                <img src={highRock2} className={classes.image} />
              </Card>
              <Card className={classes.middleImage} elevation={8}>
                <img src={highRock3} className={classes.image} />
              </Card>
              <Card className={classes.smallImage} elevation={8}>
                <img src={highRock1} className={classes.image} />
              </Card>
            </div>

            <div className={classes.threeRow}>
              <Card className={classes.smallImage} elevation={8}>
                <img src={rattle1} className={classes.image} />
              </Card>
              <Card className={classes.middleImage} elevation={8}>
                <img src={melawka1} className={classes.image} />
              </Card>
              <Card className={classes.smallImage} elevation={8}>
                <img src={rattle2} className={classes.image} />
              </Card>
            </div>

            <div className={classes.threeRow}>
              <Card className={classes.smallImage} elevation={8}>
                <img src={snowlake1} className={classes.image} />
              </Card>
              <Card className={classes.middleImage} elevation={8}>
                <img src={tunnel1} className={classes.image} />
              </Card>
              <Card className={classes.smallImage} elevation={8}>
                <img src={snowlake2} className={classes.image} />
              </Card>
            </div>


          </Grid>
        </Fade>

      </Fragment>
    );
  }
}

export default withStyles(styles)(Photos);