import { Box, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogContent, blogApi } from 'entities/blog';
import { usePageTitle } from 'shared/hooks';

const BlogPage = () => {
  usePageTitle('Blog');

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const { data } = blogApi.useGetByIdQuery(id!);

  if (!data) {
    return <>No data</>;
  }

  const handleOpenPostsPage = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <Box className="gStartColumnBox">
      <BlogContent blog={data} />

      <Button variant="outlined" onClick={handleOpenPostsPage}>
        View posts
      </Button>
    </Box>
  );
};

export default BlogPage;
