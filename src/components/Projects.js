import React, { Component, Fragment } from 'react';
import { withStyles, Card, Grid, Typography, Collapse, Button, Divider } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

import chewsitGif from '../assets/chewsitGif.gif';
import weightedRandomizerGif from '../assets/weightedRandomizerGif.gif';
import simpleServerGif from '../assets/simpleServerGif.gif';
import etapGif from '../assets/etapGif.gif';
import { styles } from '../style/projectStyles.js';

import { ChevronUp, ChevronDown } from 'mdi-material-ui';

class Projects extends Component {

  state = {
    chewsit: false,
    etap: false,
    simpleServer: false,
    weightedRandomizer: false,
  }

  onHover = () => {
    // this.setState({ [card]: true });
  }

  onExit = () => {
    // this.setState({ [card]: false });
  }

  cardClicked = async (card) => {
    
    let newState = { ...this.state };
    let newStateArray = Object.keys(newState);

    newStateArray.forEach(element => element !== card ? newState[element] = false : newState[element] = !this.state[element]);

    this.setState(newState);
  }

  close = (card) => {
    this.setState({[card]: false});
  }

  expand = async (card) => {

    let newState = { ...this.state };
    let newStateArray = Object.keys(newState);

    newStateArray.forEach(element => newState[element] = false);

    await this.setState(newState);
    this.setState({ [card]: !this.state[card], ['expand' + card]: !this.state['expand' + card] });
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Fade in={true} timeout={600}>
          <Grid
            container
            className={classes.container}
          >
            <Typography className={classes.helperText} variant='overline'>Click on a project to view the details.</Typography>

            <div className={classes.cardContainer}>
              <Collapse in={this.state.chewsit} collapsedHeight='340px' timeout={800} style={{ width: '100%', marginBottom: 20 }}>
                <Card className={classes.innerCardContainer}>
                  <Fade in={!this.state.chewsit} timeout={800}>
                    <Card className={!this.state.chewsit ? classes.chewsitCard : classes.none} onMouseEnter={() => this.onHover('chewsit')} onClick={() => this.cardClicked('chewsit')} >
                      <Typography variant='h3' className={classes.chewsitText}>chewsit</Typography>
                    </Card>
                  </Fade>
                  <Fade in={this.state.chewsit} timeout={800}>
                    <Card className={this.state.chewsit ? classes.chewsitFadeCard : classes.none} onMouseLeave={() => this.onExit('chewsit')} onClick={() => this.cardClicked('chewsit')} >
                      <img src={chewsitGif} style={{ width: '100%', marginBottom: 20 }} />
                    </Card>
                  </Fade>
                  {!this.state.chewsit && <Button className={classes.expandButton} onClick={() => this.expand('chewsit')}><ChevronDown />expand<ChevronDown /></Button>}
                  <div className={classes.infoDiv}>
                    <Typography variant='h5'>chewsit</Typography>
                    <Divider style={{ marginTop: 20 }} />
                    <Typography variant='overline'><b>Deployed Link: </b><a href='https://chewsit.site/'>chewsit.site</a></Typography>
                    <Divider />
                    <Typography variant='overline'><b>GitHub: </b><a href='https://github.com/khuynh92/chewsit-client'>github.com/khuynh92/chewsit-client</a></Typography>
                    <Divider style={{ marginBottom: 20 }} />
                    <Typography variant='body2' style={{ textIdent: 20 }}>A simplified restaurant discovery website. Designed to help users decide where to eat quickly by minimizing the amount of distractors on screen. With chewsit, you have the option to set food preferences. You also have the option to save favorite restaurants. Review or Edit your favorite restaurants anytime by going to the menu.</Typography>
                    <br />
                    <Typography variant='subtitle1'><b>Technologies Used</b></Typography>
                    <ul className={classes.ul}>
                      <li className={classes.li}>JavaScript</li>
                      <li className={classes.li}>React.js</li>
                      <li className={classes.li}>Redux</li>
                      <li className={classes.li}>MongoDB (NoSQL)</li>
                      <li className={classes.li}>Node.js</li>
                      <li className={classes.li}>Express.js</li>
                      <li className={classes.li}>Material UI</li>
                      <li className={classes.li}>OAuth 2</li>
                      <li className={classes.li}>Google Maps API</li>
                      <li className={classes.li}>Yelp Fusion API</li>
                    </ul>
                  </div>
                  {this.state.chewsit && <Button className={classes.expandButton} onClick={() => this.close('chewsit')}><ChevronUp />close<ChevronUp /></Button>}
                </Card>
              </Collapse>

              <Collapse in={this.state.simpleServer} collapsedHeight='340px' timeout={800} style={{ width: '100%', marginBottom: 20 }}>
                <Card className={classes.innerCardContainer}>
                  <Fade in={!this.state.simpleServer} timeout={800}>
                    <Card className={!this.state.simpleServer ? classes.card : classes.none} onMouseEnter={() => this.onHover('simpleServer')} onClick={() => this.cardClicked('simpleServer')} >
                      <Typography variant='h3' className={classes.weightedRandomizerText}>Simple Server</Typography>
                    </Card>
                  </Fade>
                  <Fade in={this.state.simpleServer} timeout={800}>
                    <Card className={this.state.simpleServer ? classes.simpleServerFadeCard : classes.none} onMouseLeave={() => this.onExit('simpleServer')} onClick={() => this.cardClicked('simpleServer')} >
                      <img src={simpleServerGif} style={{ width: '100%', marginBottom: 20 }} />
                    </Card>
                  </Fade>
                  {!this.state.simpleServer && <Button className={classes.expandButton} onClick={() => this.expand('simpleServer')}><ChevronDown />expand<ChevronDown /></Button>}
                  <div className={classes.infoDiv}>
                    <Typography variant='h5'><u>Simple Server</u></Typography>
                    <Divider style={{ marginTop: 20 }} />
                    <Divider />
                    <Typography variant='overline'><b>GitHub: </b><a href='https://github.com/khuynh92/simple-auth'>github.com/khuynh92/simple-auth</a></Typography>
                    <Divider style={{ marginBottom: 20 }} />
                    <Typography variant='body2' style={{ textIdent: 20 }}>An easy to start up Node.js back end server. Provides basic/bearer authentication and route protection. Allows additional MongoDB models to be implemented. This server also utilizes Role Based Access Control, which can be utilized on the front end client.
                    </Typography>
                    <br />
                    <Typography variant='subtitle1'><b>Technologies Used</b></Typography>
                    <ul className={classes.ul}>
                      <li className={classes.li}>JavaScript</li>
                      <li className={classes.li}>Node.js</li>
                      <li className={classes.li}>Express.js</li>
                      <li className={classes.li}>MongoDB (NoSQL)</li>
                      <li className={classes.li}>Role Based Access Control</li>
                    </ul>
                  </div>
                  {this.state.simpleServer && <Button className={classes.expandButton} onClick={() => this.close('simpleServer')}><ChevronUp />close<ChevronUp /></Button>}
                </Card>
              </Collapse>
            </div>

            <div className={classes.cardContainer}>

              <Collapse in={this.state.etap} collapsedHeight='340px' timeout={800} style={{ width: '100%', marginBottom: 20 }}>
                <Card className={classes.innerCardContainer}>
                  <Fade in={!this.state.etap} timeout={800}>
                    <Card className={!this.state.etap ? classes.etapCard : classes.none} onMouseEnter={() => this.onHover('etap')} onMouseLeave={() => this.onExit('etap')} onClick={() => this.cardClicked('etap')} >
                      <Typography variant='h3' className={classes.etapText}>Electronic ETAP</Typography>
                    </Card>
                  </Fade>
                  <Fade in={this.state.etap} timeout={800}>
                    <Card className={this.state.etap ? classes.etapFadeCard : classes.none} onMouseEnter={() => this.onHover('etap')} onMouseLeave={() => this.onExit('etap')} onClick={() => this.cardClicked('etap')} >
                      <img src={etapGif} style={{ height: '95%', borderRadius: 5 }} />
                    </Card>
                  </Fade>
                  {!this.state.etap && <Button className={classes.expandButton} onClick={() => this.expand('etap')}><ChevronDown />expand<ChevronDown /></Button>}
                  <div className={classes.infoDiv}>
                    <Typography variant='h5'><u>Electronic ETAP</u></Typography>
                    <Divider style={{ marginTop: 20 }} />
                    <Divider />
                    <Typography variant='overline'><b>Deployed Link: </b><br /><a href='https://sgc2018-etap-web.herokuapp.com/'>sgc2018-etap-web.herokuapp.com/</a></Typography>
                    <Divider />
                    <Typography variant='overline'><b>GitHub: </b><br /><a href='https://github.com/SeattleGiveCamp/SGC2018_etap-web'>github.com/SeattleGiveCamp/SGC2018_etap-web</a></Typography>
                    <Divider style={{ marginBottom: 20 }} />
                    <Typography variant='body2' style={{ textIdent: 20 }}>Electronic Escaped Trash Assessment Protocol (Electronic ETAP) is a proof of concept web application designed for Zero Waste Washington and the United States  Environmental Protection Agency. This mobile-first web app will be the prototype to transition from the current data collection system to a paperless design. Electronic ETAP Will first be tested in Washington, and then rolled out nationwide.
                    </Typography>
                    <br />
                    <Typography variant='body2' style={{ textIdent: 20 }}>Electronic ETAP was create from the ground up over a 2 day period at Seattle Givecamp 2018
                    </Typography>
                    <br />
                    <Typography variant='subtitle1'><b>Technologies Used</b></Typography>
                    <ul className={classes.ul}>
                      <li className={classes.li}>JavaScript</li>
                      <li className={classes.li}>React.js</li>
                      <li className={classes.li}>Redux</li>
                      <li className={classes.li}>MongoDB (NoSQL)</li>
                      <li className={classes.li}>Node.js</li>
                      <li className={classes.li}>Express.js</li>
                      <li className={classes.li}>Material UI</li>
                    </ul>
                  </div>
                  {this.state.etap && <Button className={classes.expandButton} onClick={() => this.close('etap')}><ChevronUp />close<ChevronUp /></Button>}
                </Card>
              </Collapse>

              <Collapse in={this.state.weightedRandomizer} collapsedHeight='340px' timeout={800} style={{ width: '100%', marginBottom: 20 }}>
                <Card className={classes.innerCardContainer}>
                  <Fade in={!this.state.weightedRandomizer} timeout={800}>
                    <Card className={!this.state.weightedRandomizer ? classes.weightedRandomizerCard : classes.none} onMouseEnter={() => this.onHover('weightedRandomizer')} onClick={() => this.cardClicked('weightedRandomizer')} >
                      <Typography variant='h3' className={classes.weightedRandomizerText}>Weighted Randomizer</Typography>
                    </Card>
                  </Fade>
                  <Fade in={this.state.weightedRandomizer} timeout={800}>
                    <Card className={this.state.weightedRandomizer ? classes.weightedRandomizerFadeCard : classes.none} onMouseLeave={() => this.onExit('weightedRandomizer')} onClick={() => this.cardClicked('weightedRandomizer')} >
                      <img src={weightedRandomizerGif} style={{ width: '100%', marginBottom: 20 }} />
                    </Card>
                  </Fade>
                  {!this.state.weightedRandomizer && <Button className={classes.expandButton} onClick={() => this.expand('weightedRandomizer')}><ChevronDown />expand<ChevronDown /></Button>}
                  <div className={classes.infoDiv}>
                    <Typography variant='h5'><u>Weighted Randomizer</u></Typography>
                    <Divider style={{ marginTop: 20 }} />
                    <Divider />
                    <Typography variant='overline'><b>NPM: </b><a href='https://www.npmjs.com/package/@icantbelieveitsnotrandom/weighted-randomizer'>npm Link</a></Typography>
                    <Divider />
                    <Typography variant='overline'><b>GitHub: </b><a href='https://github.com/icantbelieveitsnotrandom/imeanireallycantbelieveitsnotrandom#readme'>GitHub Link</a></Typography>
                    <Divider style={{ marginBottom: 20 }} />
                    <Typography variant='body2' style={{ textIdent: 20 }}>Customizable weight randomization function for arrays, published on npm. Users have the option to user a single array, or multiple arrays, depending on how they want to structure their data.</Typography>
                    <br />
                    <Typography variant='subtitle1'><b>Technologies Used</b></Typography>
                    <ul className={classes.ul}>
                      <li className={classes.li}>JavaScript</li>
                      <li className={classes.li}>React.js</li>
                      <li className={classes.li}>Material UI</li>
                    </ul>
                  </div>
                  {this.state.weightedRandomizer && <Button className={classes.expandButton} onClick={() => this.close('weightedRandomizer')}><ChevronUp />close<ChevronUp /></Button>}
                </Card>
              </Collapse>

            </div>
          </Grid>
        </Fade>
      </Fragment >
    );
  }

}



export default withStyles(styles)(Projects);