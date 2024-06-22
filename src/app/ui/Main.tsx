import { PropsWithChildren } from "react";
import { Container, CssBaseline } from "@mui/material";

const Main = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />

      {children}
    </Container>
  );

};

export default Main;
