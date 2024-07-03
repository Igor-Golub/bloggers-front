import { Box, Button, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { authActions, authApi } from 'features/auth';
import { useAppDispatch, usePageTitle } from 'shared/hooks';

const ConfirmationPage = () => {
  usePageTitle('Confirmation');

  const classes = useStyles();

  const [params] = useSearchParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [onConfirm, { isLoading }] = authApi.useConfirmationMutation();

  const handleConfirm = async () => {
    const code = params.get('code');

    if (!code) return;

    await onConfirm({ code })
      .unwrap()
      .then(() => {
        dispatch(authActions.changeConfirmMode(true));
        navigate('/login', { replace: true });
      })
      .catch(error => console.error('rejected', error));
  };

  return (
    <Box className={classes.page}>
      <Box className="gCentredColumnBox">
        <Typography variant="h3">Hi our new friend!</Typography>

        <Button variant="contained" onClick={handleConfirm} disabled={isLoading}>
          Confirm my email
        </Button>
      </Box>

      <Box className="gImageContainer">
        <img src="/join.webp" className="gFullImage" />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles<Theme>(({ breakpoints }) => ({
  page: {
    gap: '1rem',
    display: 'flex',
    alignItems: 'center',
    [breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },
  },
}));

export default ConfirmationPage;
