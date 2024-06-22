import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  authActions,
  authApi,
  AuthModes,
  authSelectors,
  LoginForm,
  SignInBody,
  SignInForm,
  SignUpBody,
} from "../features/auth";
import { usePageTitle } from "../shared/hooks/usePageTitle.ts";
import { useAppDispatch, useAppSelector } from "../shared/hooks/react-redux.ts";
import { ReactNode } from "react";

const AuthPage = () => {
  usePageTitle("Auth");

  const dispatch = useAppDispatch();
  const authMode = useAppSelector(authSelectors.getAuthMode);

  const classes = useStyles();

  const [sighIn, { isLoading: isLoadingSignIn }] = authApi.useSignInMutation();
  const [sighUp, { isLoading: isLoadingSignUp }] = authApi.useSignUpMutation();

  const handleSighIn = async (body: SignInBody) => {
    try {
      await sighIn(body);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSighUp = async (body: SignUpBody) => {
    try {
      await sighUp(body);
    } catch (error) {
      console.log(error);
    }
  };

  const formRender: Record<AuthModes, ReactNode> = {
    [AuthModes.Registration]: (
      <SignInForm handleSighIn={handleSighIn} isLoading={isLoadingSignIn} />
    ),
    [AuthModes.Login]: (
      <LoginForm handleSighUp={handleSighUp} isLoading={isLoadingSignUp} />
    ),
  };

  const handleSwitchToRegistration = () => {
    dispatch(authActions.changeAuthMode(AuthModes.Registration));
  };

  const handleSwitchToLogin = () => {
    dispatch(authActions.changeAuthMode(AuthModes.Login));
  };

  const switchModeRender: Record<AuthModes, ReactNode> = {
    [AuthModes.Registration]: (
      <Typography className="notRegistered" onClick={handleSwitchToLogin}>
        I'm already registered
      </Typography>
    ),
    [AuthModes.Login]: (
      <Typography
        className="notRegistered"
        onClick={handleSwitchToRegistration}
      >
        I'm not registered yet
      </Typography>
    ),
  };

  return (
    <Box className={classes.page}>
      <Box>
        {formRender[authMode]}
        {switchModeRender[authMode]}
      </Box>

      <Box className="imageContainer">
        <img src="/login.jpg" style={{ width: "100%", height: "100%" }} />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles<Theme>(({ breakpoints }) => ({
  page: {
    gap: "1rem",
    display: "flex",
    alignItems: "center",
    [breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },

    "& .notRegistered": {
      cursor: "pointer",

      "&:hover": {
        opacity: "0.8",
      },
    },

    "& .form": {
      gap: "1rem",
      padding: "2rem",
      display: "flex",
      minWidth: "30rem",
      flexDirection: "column",
    },

    "& .imageContainer": {
      display: "flex",
      minWidth: "30rem",
      minHeight: "30rem",
      alignItems: "center",
    },
  },
}));

export default AuthPage;
