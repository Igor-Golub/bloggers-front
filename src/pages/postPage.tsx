import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { usePageTitle } from 'shared/hooks';

export const PostPage = () => {
  usePageTitle('Posts');

  const { id } = useParams<{ id: string }>();

  return (
    <Grid container spacing={2}>
      post {id}
    </Grid>
  );
};
