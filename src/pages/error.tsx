import { Box, Typography } from "@mui/material";

const Error = () => {
  return (
    <Box className="gCentredRowBox">
      <Typography textAlign="center" variant="h2">
        An unexpected error occurred, don't be upset, you can post about it on
        your blog, but a little later
      </Typography>

      <img src="./error.webp" className="gFullImage" />
    </Box>
  );
};

export default Error;
