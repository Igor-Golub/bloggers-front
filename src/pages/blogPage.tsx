import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { BlogContent, blogApi } from 'entities/blog';
import { usePageTitle } from 'shared/hooks';

const BlogPage = () => {
  usePageTitle('Blog');

  const { id } = useParams<{ id: string }>();
  const { data } = blogApi.useGetByIdQuery(id ?? '');

  if (!data) {
    return <>No data</>;
  }

  return (
    <Box className="gStartColumnBox">
      <BlogContent blog={data} />
    </Box>
  );
};

export default BlogPage;
