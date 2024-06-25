import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { usePageTitle } from 'shared/hooks';

const Error = () => {
  usePageTitle('Error');

  const classes = useStyles();

  return (
    <Box className={classes.page}>
      <Box className="gCentredRowBox">
        <Typography textAlign="center" variant="h2">
          An unexpected error occurred, don't be upset, you can post about it on your blog, but a little
          later
        </Typography>

        <img src="./error.webp" className="gFullImage" />
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

export default Error;
