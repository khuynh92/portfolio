import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Grid, Button, Collapse, Fade, Typography, IconButton, Tooltip } from '@material-ui/core';
import { LinkedinBox, GithubBox, LanguageJavascript, React as ReactLogo, Email, LanguageCss3, LanguageHtml5, Sass, Jquery, Nodejs, Webpack, MaterialUi, Docker, FileDocumentBoxMultipleOutline } from 'mdi-material-ui';
import { styles } from '../style/aboutStyles.js';

import Resume from './Resume.js';

import khoa from '../assets/khoapic3.png';


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
          <Link to='/projects' className={classes.link}>
            <Button variant='contained' className={classes.projectsButton} color='primary' fullWidth>
              <FileDocumentBoxMultipleOutline />
              <Typography className={classes.projectsButtonText} variant='button'>View Projects</Typography>
            </Button>
          </Link>

          <Collapse in={this.state.resume} timeout={1000}>
            <Resume />
          </Collapse>

          <div className={classes.profile}>
            <div className={classes.profilePicContainer}>
              <img className={classes.profilePic} src={khoa} />
            </div>

            <div className={classes.profileInfo}>

              <Typography className={classes.title} variant='overline'>Software Developer</Typography>
              <Typography className={classes.description} variant='body1'>With a background in both psychology and software development, my aim is to create the best user experience between technology and the end users, with a particular interest in ensuring the best user experience for underrepresented populations. Hobbies include photography, cinematography, hiking, and pizza</Typography>

              <div className={classes.boxContainer}>
                <div className={classes.box}>
                  <Typography variant='overline' className={classes.boxTitle}>Social Media</Typography>
                  <div className={classes.flexbox}>
                    <a href='https://www.linkedin.com/in/khoa-huynh92/' target='_blank' rel='noopener noreferrer'>
                      <IconButton className={classes.iconButton}>
                        <LinkedinBox className={classes.linkedIn} />
                      </IconButton>
                    </a>
                    <a target='_blank' href='https://github.com/khuynh92' rel='noopener noreferrer'>
                      <IconButton>
                        <GithubBox className={classes.github} />
                      </IconButton>
                    </a>
                    <a href='mailto:kddhuynh92@gmail.com' target='_top' rel='noopener noreferrer'>
                      <IconButton className={classes.iconButton}>
                        <Email className={classes.github} />
                      </IconButton>
                    </a>
                  </div>
                </div>

                <div className={classes.box}>
                  <Typography variant='overline' className={classes.boxTitle}>Skills</Typography>
                  <div className={classes.flexboxIcons}>
                    <div>
                      <Tooltip title='JavaScript'>
                        <LanguageJavascript className={classes.skillsIcon} />
                      </Tooltip>
                      <Tooltip title='Node.js'>
                        <Nodejs className={classes.skillsIcon} />
                      </Tooltip>
                      <Tooltip title='React.js'>
                        <ReactLogo className={classes.skillsIcon} />
                      </Tooltip>
                      <Tooltip title='CSS3'>
                        <LanguageCss3 className={classes.skillsIcon} />
                      </Tooltip>
                      <Tooltip title='HTML5'>
                        <LanguageHtml5 className={classes.skillsIcon} />
                      </Tooltip>
                    </div>
                    <div>
                      <Tooltip title='SASS'>
                        <Sass className={classes.skillsIcon} />
                      </Tooltip>
                      <Tooltip title='JQuery'>
                        <Jquery className={classes.skillsIcon} />
                      </Tooltip>
                      <Tooltip title='Webpack'>
                        <Webpack className={classes.skillsIcon} />
                      </Tooltip>
                      <Tooltip title='Material-UI'>
                        <MaterialUi className={classes.skillsIcon} />
                      </Tooltip>
                      <Tooltip title='Docker'>
                        <Docker className={classes.skillsIcon} />
                      </Tooltip>
                    </div>
                  </div>
                </div>

                <div className={classes.box}>
                  <Typography variant='overline' className={classes.boxTitle}>Résumé</Typography>
                  <div className={classes.flexboxResume}>
                    <Button className={classes.resumeButton} variant='outlined' onClick={this.showResume}>{this.state.resume ? 'Close' : 'Resumé'}</Button>
                    <a target='_blank' rel='noopener noreferrer' className={classes.resumeLink} href='https://s3-us-west-2.amazonaws.com/khoascloud/Khoa+Huynh+-+Resume.pdf'>or download Résumé</a>
                  </div>  
                </div>

              </div>
            </div>
            {
              this.state.resume &&
              <div className={classes.closeDiv}>
                <Button onClick={this.showResume} className={classes.closeResumeButton} variant='contained' color='secondary'>Close Résumé</Button>
              </div>
            }
          </div>
        </Grid>
      </Fade>
    );
  }
}

export default withStyles(styles)(About);