import { Grid } from '@mui/material';
import { BlogCard, blogApi } from 'entities/blog';
import { usePageTitle } from 'shared/hooks';

const BlogsPage = () => {
  usePageTitle('Blogs');

  const { data } = blogApi.useBlogsListQuery();

  return (
    <Grid container spacing={2}>
      {data?.items.map(blog => (
        <Grid key={blog.id} item xs={12}>
          <BlogCard key={blog.id} blog={blog} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogsPage;
