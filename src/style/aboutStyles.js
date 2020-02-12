export const styles = (theme) => {
  theme.breakpoints.values.sm = 605;
  theme.breakpoints.values.md = 798;

  return {
    container: {
      width: '90vw',
      display: 'flex',
      margin: 'auto',
      justifyContent: 'center',
      marginBottom: '10vh',
    },
    resumeButton: {
      width: 125,
    },
    resumeLink: {
      textDecoration: 'none',
      fontSize: 12,
      marginBottom: 20,
      marginTop: 4,
      margin: 'auto',
    },
    profilePic: {
      border: '4px solid #FFFFFF',
      display: 'inline-block',
      width: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
      minWidth: '150px',
    },
    profile: {
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        background: 'linear-gradient(0deg, #ffffff 90%, #dddedc 10%)',
        borderTopLeftRadius: 125,
        borderTopRightRadius: 5,
      },
      [theme.breakpoints.up('md')]: {
        background: 'linear-gradient(0deg, #ffffff 75%, #dddedc 25%)',
      },
      background: 'linear-gradient(0deg, #ffffff 79%, #dddedc 21%)',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '4vh',
      width: '90vw',
      margin: 'auto',
      maxWidth: 1200,
    },
    description: {
      [theme.breakpoints.up('sm')]: {
        marginLeft: 50,
      },
      [theme.breakpoints.up('md')]: {
        marginTop: 20,  
        marginLeft: 14,
      },
      fontSize: 18,
    },
    linkedIn: {
      fontSize: 42,
      color: '#0077B5',
    },
    github: {
      fontSize: 42,
      color: '#000000',
    },
    title: {
      [theme.breakpoints.up('sm')]: {
        paddingLeft: '10vw',
        marginRight: 0,
        paddingRight: 0,
        textAlign: 'left',

      },
      [theme.breakpoints.up('md')]: {
        fontSize: '2.5em',
      },
      fontSize: '1.5em',
      color: '#4E4F4A',
      margin: 'auto',
      textAlign: 'center',
    },
    profileInfo: {
      [theme.breakpoints.up('sm')]: {
        margin: '0 0 0 0',
        width: '80%',
      },
      margin: 'auto',
      width: '100%',
    },
    profilePicContainer: {
      [theme.breakpoints.up('sm')]: {
        margin: '0 0 0 0 ',
        width: '20%',
      },
      width: '40%',
      margin: 'auto',
    },
    boxContainer: {
      [theme.breakpoints.up('sm')]: {
        marginLeft: 50,
      },
      [theme.breakpoints.up('md')]: {
        marginTop: 20,  
        marginLeft: 14,
        flexDirection: 'row',
      },
      display: 'flex',
      flexDirection: 'column',
    },
    box: {
      [theme.breakpoints.up('md')]: {
        width: '31%',
        marginTop: '0px',
        marginBottom: '0px',
        borderBottom: '2px solid #dddedc',
      },
      margin: '0 1% 0 1%',
      borderTop: '2px solid #dddedc',
      borderBottom: 'none',
      width: '100%',
      marginTop: '10px',
      marginBottom: '10px',
    },
    boxTitle: {
      textAlign: 'center',
    },
    flexbox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    flexboxIcons: {
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    projectsButton: {
      height: 75,
    },
    projectsButtonText: {
      paddingLeft: 12,
      color: 'white',
    },
    link: {
      textDecoration: 'none',
      margin: 'auto',
      marginBottom: 20,
      marginTop: '10vh',
      width: 200,
    },
    skillsIcon: {
      padding: '0px 5px 0px 5px',
    },
    flexboxResume: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeDiv: {
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      top: '90vh',
      left: '0',
      width: '100vw',
    },
    closeResumeButton: {
      width: 200,
    },
  };
};