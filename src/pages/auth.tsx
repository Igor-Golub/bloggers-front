import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { authApi, SignInBody, SignInForm } from "../features/auth";

const AuthPage = () => {
  const classes = useStyles();

  const [sighIn, { isLoading }] = authApi.useSignInMutation();

  const handleSighIn = async (body: SignInBody) => {
    try {
      await sighIn(body);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className={classes.page}>
      <SignInForm handleSighIn={handleSighIn} isLoading={isLoading} />

      <Box className="imageContainer">
        <img src="/login2.jpg" style={{ width: "100%", height: "100%" }} />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  page: {
    gap: "1rem",
    display: "flex",
    alignItems: "center",

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
});

export default AuthPage;
