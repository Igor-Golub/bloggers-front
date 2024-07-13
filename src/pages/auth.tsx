import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AuthModes,
  LoginForm,
  SignInBody,
  SignInForm,
  SignUpBody,
  authActions,
  authApi,
  authSelectors,
} from 'features/auth';
import { useAppDispatch, useAppSelector, usePageTitle } from 'shared/hooks';

const AuthPage = () => {
  usePageTitle('Auth');

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const authMode = useAppSelector(authSelectors.getAuthMode);

  const classes = useStyles();

  const [onSighIn, { isLoading: isLoadingSignIn }] = authApi.useSignInMutation();
  const [onSighUp, { isLoading: isLoadingSignUp }] = authApi.useSignUpMutation();

  const handleSighIn = async (body: SignInBody) => {
    await onSighIn(body)
      .unwrap()
      .then(() => {
        dispatch(authActions.changeAuthMode(AuthModes.Login));
        navigate('/confirmation', { replace: true });
      })
      .catch(error => console.error('rejected', error));
  };

  const handleSighUp = async (body: SignUpBody) => {
    await onSighUp(body)
      .unwrap()
      .then(({ accessToken }) => {
        localStorage.setItem('accessToken', accessToken);
        dispatch(authActions.changeAuthStatus(true));
        navigate('/blogs', { replace: true });
      })
      .catch(error => console.error('rejected', error));
  };

  const formRender: Record<AuthModes, ReactNode> = {
    [AuthModes.Registration]: <SignInForm handleSighIn={handleSighIn} isLoading={isLoadingSignIn} />,
    [AuthModes.Login]: <LoginForm handleSighUp={handleSighUp} isLoading={isLoadingSignUp} />,
  };

  const handleSwitchToRegistration = () => {
    dispatch(authActions.changeAuthMode(AuthModes.Registration));
  };

  const handleSwitchToLogin = () => {
    dispatch(authActions.changeAuthMode(AuthModes.Login));
  };

  const handleGoToRecovery = () => {
    navigate('/recovery');
  };

  const switchModeRender: Record<AuthModes, ReactNode> = {
    [AuthModes.Registration]: (
      <Typography className="gHovered" onClick={handleSwitchToLogin}>
        I'm already registered
      </Typography>
    ),
    [AuthModes.Login]: (
      <Box className="gFlexJustifyBox">
        <Typography className="gHovered" onClick={handleSwitchToRegistration}>
          I'm not registered yet
        </Typography>

        <Typography className="gHovered" onClick={handleGoToRecovery}>
          I'm forgot my password
        </Typography>
      </Box>
    ),
  };

  return (
    <Box className={classes.page}>
      <Box className="gCentredColumnBox">
        {formRender[authMode]}
        {switchModeRender[authMode]}
      </Box>

      <Box className="gImageContainer">
        <img src="/login.jpg" className="gFullImage" />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles<Theme>(({ breakpoints }) => ({
  page: {
    gap: '1rem',
    height: '90vh',
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
    [breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },

    '& .form': {
      gap: '1rem',
      display: 'flex',
      minWidth: '100%',
      flexDirection: 'column',
    },
  },
}));

export default AuthPage;
