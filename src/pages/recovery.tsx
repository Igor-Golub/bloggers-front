import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { PasswordRecoveryBody, RecoveryForm, authApi } from 'features/auth';

const RecoveryPage = () => {
  const classes = useStyles();

  const [onRecover, { isLoading }] = authApi.usePasswordRecoveryMutation();

  const handleRecover = async (body: PasswordRecoveryBody) => {
    try {
      await onRecover(body);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box className={classes.page}>
      <Box className="gCentredColumnBox">
        <RecoveryForm handleRecover={handleRecover} isLoading={isLoading} />
      </Box>

      <Box className="gImageContainer">
        <img src="/recovery.png" className="gFullImage" />
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

export default RecoveryPage;
