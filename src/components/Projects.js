import React, { Component, Fragment } from 'react';
import { withStyles, Card, Grid, Typography, Collapse, Button, List, ListItem } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

import chewsitGif from '../assets/chewsitGif.gif';
import weightedRandomizerGif from '../assets/weightedRandomizerGif.gif';
import chewsit1p0Gif from '../assets/chewsit1p0Gif.gif';
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
    expandchewsit: false,
    expandweightedRandomizer: false,
    expandsimpleServer: false,
    expandetap: false,
  }

  onHover = (card) => {
    // this.setState({ [card]: true });
  }

  onExit = (card) => {
    // this.setState({ [card]: false });
  }

  cardClicked = (card) => {
    if (card === 'chewsit') window.location.href = 'https://chewsit.site';

    if (card === 'weightedRandomizer') window.location.href = 'https://www.npmjs.com/package/@icantbelieveitsnotrandom/weighted-randomizer';

    if (card === 'simpleServer') window.location.href = 'https://github.com/khuynh92/simple-auth';

    if (card === 'etap') window.location.href = 'https://sgc2018-etap-web.herokuapp.com/';
  }

  expand = async (card) => {
    let newState = { ...this.state };
    let newStateArray = Object.keys(newState);

    newStateArray.forEach(element => newState[element] = false);

    await this.setState(newState);
    this.setState({ [card]: !this.state[card], ['expand' + card]: !this.state['expand' + card] });
  }

  close = () => {
    let newState = { ...this.state };
    let newStateArray = Object.keys(newState);

    newStateArray.forEach(element => newState[element] = false);

    this.setState(newState);
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
            <Typography className={classes.helperText} variant='overline'>Click on EXPAND for details. Click on the Logo/Image to visit project.</Typography>

            <div className={classes.cardContainer}>
              <Collapse in={this.state.expandchewsit} collapsedHeight='46vh' timeout={800} style={{ width: '100%', marginBottom: 20 }}>
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
                  {!this.state.expandchewsit && <Button className={classes.expandButton} onClick={() => this.expand('chewsit')}><ChevronDown />expand<ChevronDown /></Button>}
                  <div className={classes.infoDiv}>
                    <Typography variant='h5'><u>chewsit</u></Typography>
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
                  {this.state.expandchewsit && <Button className={classes.expandButton} onClick={this.close}><ChevronUp />close<ChevronUp /></Button>}
                </Card>
              </Collapse>

              <Collapse in={this.state.expandsimpleServer} collapsedHeight='46vh' timeout={800} style={{ width: '100%', marginBottom: 20 }}>
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
                  {!this.state.expandsimpleServer && <Button className={classes.expandButton} onClick={() => this.expand('simpleServer')}><ChevronDown />expand<ChevronDown /></Button>}
                  <div className={classes.infoDiv}>
                    <Typography variant='h5'><u>Simple Server</u></Typography>
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
                  {this.state.expandsimpleServer && <Button className={this.close} onClick={() => this.expand('simpleServer')}><ChevronUp />close<ChevronUp /></Button>}
                </Card>
              </Collapse>
            </div>

            <div className={classes.cardContainer}>
              <Collapse in={this.state.expandweightedRandomizer} collapsedHeight='46vh' timeout={800} style={{ width: '100%', marginBottom: 20 }}>
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
                  {!this.state.expandweightedRandomizer && <Button className={classes.expandButton} onClick={() => this.expand('weightedRandomizer')}><ChevronDown />expand<ChevronDown /></Button>}
                  <div className={classes.infoDiv}>
                    <Typography variant='h5'><u>Weighted Randomizer</u></Typography>
                    <Typography variant='body2' style={{ textIdent: 20 }}>Customizable weight randomization function for arrays, published on npm. Users have the option to user a single array, or multiple arrays, depending on how they want to structure their data.</Typography>
                    <br />
                    <Typography variant='subtitle1'><b>Technologies Used</b></Typography>
                    <ul className={classes.ul}>
                      <li className={classes.li}>JavaScript</li>
                      <li className={classes.li}>React.js</li>
                      <li className={classes.li}>Material UI</li>
                    </ul>
                  </div>
                  {this.state.expandweightedRandomizer && <Button className={classes.expandButton} onClick={this.close}><ChevronUp />close<ChevronUp /></Button>}
                </Card>
              </Collapse>

              <Collapse in={this.state.expandetap} collapsedHeight='46vh' timeout={800} style={{ width: '100%', marginBottom: 20 }}>
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
                  {!this.state.expandetap && <Button className={classes.expandButton} onClick={() => this.expand('etap')}><ChevronDown />expand<ChevronDown /></Button>}
                  <div className={classes.infoDiv}>
                    <Typography variant='h5'><u>Electronic ETAP</u></Typography>
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
                  {this.state.expandetap && <Button className={classes.expandButton} onClick={this.close}><ChevronUp />close<ChevronUp /></Button>}
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