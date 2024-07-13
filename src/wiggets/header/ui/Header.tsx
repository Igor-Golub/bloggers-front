import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Container, IconButton, Stack, Theme, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { userApi } from 'entities/user';

export const Header = () => {
  const classes = useStyles();

  const { data: user } = userApi.useAccountQuery();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className={classes.toolbar}>
          <Typography>B L O G S</Typography>

          <Stack direction="row" alignItems="center" gap={2}>
            <Stack direction="row" alignItems="center" gap={1}>
              <AccountCircleIcon />
              <Typography>{user?.login}</Typography>
            </Stack>

            <IconButton>
              <LogoutIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const useStyles = makeStyles<Theme>({
  appBar: {
    marginBottom: '2rem',
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(15, 18, 20, 0.8) !important',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
