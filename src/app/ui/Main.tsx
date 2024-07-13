import { Container, CssBaseline, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { PropsWithChildren } from 'react';
import { Header } from 'src/wiggets/header';

export const Main = ({ children }: PropsWithChildren) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <Header />
      <Container component="main" maxWidth="xl" className={classes.container}>
        {children}
      </Container>
    </>
  );
};

const useStyles = makeStyles<Theme>({
  container: {
    display: 'flex',
    marginTop: '6rem',
    paddingBottom: '2rem',
  },
});
