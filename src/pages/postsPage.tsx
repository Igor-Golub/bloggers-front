import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { blogApi } from 'entities/blog';
import { PostCard } from 'entities/post';
import { usePageTitle } from 'shared/hooks';

export const PostsPage = () => {
  usePageTitle('Posts');

  const { id } = useParams<{ id: string }>();

  const { data: posts } = blogApi.useGetListPostsOfBlogQuery(id!);

  return (
    <Grid container spacing={2}>
      {posts?.items.map(post => (
        <Grid key={post.id} item xs={6}>
          <PostCard key={post.id} post={post} />
        </Grid>
      ))}
    </Grid>
  );
};
