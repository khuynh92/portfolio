export const styles = theme => {

  theme.breakpoints.values.sm = 650;
  theme.breakpoints.values.md = 974;
  theme.breakpoints.values.lg = 1024;
  theme.breakpoints.values.imageBreakMd = 974;
  theme.breakpoints.values.imageBreakSm = 650;

  return {
    container: {
      width: '90vw',
      margin: 'auto',
    },
    wideImage: {
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: '98%',
        marginRight: '1%',
        marginLeft: '1%',
      },
      marginTop: 10,
      marginBottom: 10,
      width: '100%',
      height: '40vh',
      maxHeight: 300,
      minHeight: 270,
    },
    smallImage: {
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: '48%',
        marginRight: '1%',
        marginLeft: '1%',
      },
      display: 'inline-block',
      marginTop: 10,
      marginBottom: 10,
      width: '32%',
      maxHeight: 300,
      minHeight: 270,
      minWidth: 280,
      height: '40vh',
    },
    middleImage: {
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
        marginLeft: '0%',
        marginRight: '0%',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: '48%',
        marginRight: '1%',
        marginLeft: '1%',
      },
      display: 'inline-block',
      marginTop: 10,
      marginBottom: 10,
      maxHeight: 300,
      minHeight: 270,
      minWidth: 280,
      width: '32%',
      marginLeft: '2%',
      marginRight: '2%',
      height: '40vh',
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
};