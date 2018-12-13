import React, { Component } from 'react';
import { withStyles, Paper, Typography, IconButton } from '@material-ui/core';
import { LinkedinBox, GithubBox } from 'mdi-material-ui';
import {styles} from '../style/resumeStyles.js';

class Resume extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={8} className={classes.paper}>
        <Typography variant='h6'><strong>Khoa Huynh</strong></Typography>
        <Typography variant='subtitle2'><strong>Software Developer</strong></Typography>
        <Typography variant='body2'>Seattle, WA | kddhuynh92@gmail.com | 253.212.8861</Typography>

        <Typography variant='body2'>
          <a href='https://www.linkedin.com/in/khoa-huynh92/' target='_blank' rel='noopener noreferrer'>
            <IconButton>
              <LinkedinBox className={classes.linkedIn} />
            </IconButton>
          </a>
          <a target='_blank' href='https://github.com/khuynh92' rel='noopener noreferrer'>
            <IconButton>
              <GithubBox className={classes.github} />
            </IconButton>
          </a>
        </Typography>
        <div className={classes.linebreak}></div>

        <Typography variant='body2' className={classes.introText}>Full Stack JavaScript Developer with a B.S degree in Psychology. Aims to harmonize psychology principles along with software development to create user driven products. Strives to make the best user experience for all, with a passion in accessibility features for underrepresented populations. Seeking work for a company whose values align with improving the lives of others through technology.</Typography>

        <Typography variant='body2' className={classes.headlineText}>Technical Skills</Typography>
        <Typography variant='body2' className={classes.bodyText}><strong>Tools: </strong> Github, Visual Studio, Jest, Heroku, Docker, AWS</Typography>
        <Typography variant='body2' className={classes.bodyText}><strong>Proficiencies: </strong>JavaScript, HTML5, CSS3, React.js, Redux, Node.js, Express.js, MongoDB, PostgreSQL, Webpack,  SCSS, jQuery, Material UI, Test Driven Development, MVC Architecture, Object-Oriented Programming, and Agile (Scrum) Methodologies.</Typography>

        <Typography variant='body2' className={classes.headlineText}>Projects</Typography>
        <Typography variant='body2' className={classes.bodyText}><strong>Chewsit | Oct 2018 | <a href='https://chewsit.site' target='_blank' rel='noopener noreferrer'>https://chewsit.site</a></strong></Typography>
        <Typography variant='body2' className={classes.bodyText}>A simplified food discovery website, utilizing  a  minimalistic and responsive UI design pattern. Allows users to set preferences for foods they liked and save favorite restaurants.</Typography>
        <li className={classes.listItem}>Utilizes React, Redux, Material UI, MongoDB, Express, Google Maps API, and Yelp API</li>
        <li className={classes.listItem}>Integrates OAuth and basic/bearer auth</li>
        
        <Typography variant='body2' className={classes.bodyText}><strong>Electronic ETAP | Oct 2018 | <a href='https://sgc2018-etap-web.herokuapp.com/' target='_blank' rel='noopener noreferrer'>https://sgc2018-etap-web.herokuapp.com/</a></strong></Typography>
        <Typography variant='body2' className={classes.bodyText}>A proof of concept web application designed for Zero Waste Washington. This mobile-first web app will be the prototype to transition from the current data collection system to a paperless design. Will first be tested in Washington, and then rolled out nationwide.</Typography>
        <li className={classes.listItem}>Built during Seattle GiveCamp 2018</li>
        <li className={classes.listItem}>Utilizes JavaScript, MongoDB (NoSQL), Express.js, React.js, Redux, and Node.js</li>
        <li className={classes.listItem}>Lead and mentored the front end team</li>

        <Typography variant='body2' className={classes.bodyText}><strong>Weighted Randomizer | Sep 2018 | <a href='https://goo.gl/Yu9wmY' target='_blank' rel='noopener noreferrer'>goo.gl/Yu9wmY</a></strong></Typography>
        <Typography variant='body2' className={classes.bodyText}>Customizable weight randomization function for arrays, published on npm.</Typography>
        <li className={classes.listItem}>Test driven development using jest</li>
        <li className={classes.listItem}>Intuitive front end built using React and Material UI.</li>
        <Typography variant='body2' className={classes.bodyText}><strong>Simple Auth | Sep 2018 | <a href='https://github.com/khuynh92/simple-auth' target='_blank' rel='noopener noreferrer'>https://github.com/khuynh92/simple-auth</a></strong></Typography>
        <li className={classes.listItem}>An easy to start up  Node.js/Express.js back end server, provides basic/bearer authentication and route protection. Allows additional Mongoose models to be implemented.</li>
        <li className={classes.listItem}>Provides additional Role Based Access Control information for front end clients.</li>
        <li className={classes.listItem}>Utilizes Javascript, Node.js, Express, and MongoDB</li>

        <Typography variant='body2' className={classes.headlineText}>Experience</Typography>
        <Typography variant='body2' className={classes.bodyText}><strong>DemocracyLab | Frontend Developer | Seattle, WA | Nov 2018 – Present</strong></Typography>
        <li className={classes.listItem}>Implemented a responsive web design to the existing code base.</li>
        <li className={classes.listItem}>Work closely with the UX Designer to create a more friendly user interface.</li>
        <li className={classes.listItem}>Languages Used: Javascript, React.js, Flow, CSS3, SASS</li>

        <Typography variant='body2' className={classes.bodyText}><strong>Northwest ABA | Behavioral Therapist | Tacoma, WA | Dec 2015 - Jun 2018</strong></Typography>
        <li className={classes.listItem}>Certified Registered Behavior Technician under the BACB</li>
        <li className={classes.listItem}>Provided therapy to children with autism and related disorders based on the principles of Applied Behavior Analysis.</li>
        <li className={classes.listItem}>Collected and analyzed data on behavior to create individualized therapy plans for clients.</li>
        <li className={classes.listItem}>Collaborated with a multidisciplinary team that includes the family, Speech Therapists, Board Certified Behavior Analysts, teachers, and other therapists.</li>
        <Typography variant='body2' className={classes.bodyText}><strong>Best Buy | Computer Sales Consultant | Tacoma, WA | August 2015 – August 2017</strong></Typography>
        <li className={classes.listItem}>Provided unmatchable customer service, ensuring customers receive the complete solution for their lifestyle.</li>

        <Typography variant='body2' className={classes.headlineText}>Education</Typography>
        <Typography variant='body2' className={classes.bodyText}><strong>Code Fellows | Seattle, WA</strong></Typography>
        <li className={classes.listItem}>Certificate -  Advanced Software Development in Full-Stack JavaScript | Sept 2018</li>
        <li className={classes.listItem2}>Strengths include: Providing mentorship to peers, Data Structures and Algorithms, React, Redux, Material-UI, Express, and MongoDB</li>
        <Typography variant='body2' className={classes.bodyText}><strong>University of Washington | Seattle, WA</strong></Typography>
        <li className={classes.listItem2}>Bachelor’s of Science: Psychology | 2010 - 2013</li>
      </Paper>
    );
  }
}

export default withStyles(styles)(Resume);