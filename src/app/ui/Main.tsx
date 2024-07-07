import { Container, CssBaseline } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Header } from 'src/wiggets/header';

const Main = ({ children }: PropsWithChildren) => {
  return (
    <>
      <CssBaseline />

      <Header />
      <Container component="main" maxWidth="xl" sx={{ display: 'flex', marginTop: '6rem' }}>
        {children}
      </Container>
    </>
  );
};

export default Main;
