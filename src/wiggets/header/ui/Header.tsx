import { AppBar, Container, Theme, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography>B L O G S</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const useStyles = makeStyles<Theme>({
  appBar: {
    marginBottom: '2rem',
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(15, 18, 20, 0.8)',
  },
});
