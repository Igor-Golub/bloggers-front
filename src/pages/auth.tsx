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
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  usePageTitle("Auth");

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const authMode = useAppSelector(authSelectors.getAuthMode);

  const classes = useStyles();

  const [sighIn, { isLoading: isLoadingSignIn }] = authApi.useSignInMutation();
  const [sighUp, { isLoading: isLoadingSignUp }] = authApi.useSignUpMutation();

  const handleSighIn = async (body: SignInBody) => {
    await sighIn(body)
      .unwrap()
      .then(() => {
        dispatch(authActions.changeAuthMode(AuthModes.Login));
      })
      .catch((error) => console.error("rejected", error));
  };

  const handleSighUp = async (body: SignUpBody) => {
    await sighUp(body)
      .unwrap()
      .then(() => {
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => console.error("rejected", error));
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
      <Box className="gCentredColumnBox">
        {formRender[authMode]}
        {switchModeRender[authMode]}
      </Box>

      <Box className="gImageContainer">
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
      display: "flex",
      minWidth: "30rem",
      flexDirection: "column",
    },
  },
}));

export default AuthPage;
