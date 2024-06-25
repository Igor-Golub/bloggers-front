import { Box, Button, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../shared/hooks";

const HomePage = () => {
  usePageTitle("Home");

  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <Box className={classes.page}>
      <Box className="gCentredColumnBox">
        <Typography textAlign="center" variant="h2">
          Welcome to platform
        </Typography>

        <Button
          size="large"
          variant="contained"
          onClick={() => {
            navigate("/login");
          }}
        >
          Go to login
        </Button>
      </Box>

      <Box className="gImageContainer">
        <img src="/contacts.webp" className="gFullImage" />
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
  },
}));

export default HomePage;
