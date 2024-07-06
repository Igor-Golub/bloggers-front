import { BlogCard, blogApi } from 'entities/blog';

const BlogsPage = () => {
  const { data } = blogApi.useListQuery();

  return <div>{data?.items.map(blog => <BlogCard key={blog.id} blog={blog} />)}</div>;
};

export default BlogsPage;
