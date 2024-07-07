import { Grid } from '@mui/material';
import { usePageTitle } from 'shared/hooks';

const PostsPage = () => {
  usePageTitle('Posts');

  return (
    <Grid container spacing={2}>
      posts
    </Grid>
  );
};

export default PostsPage;
