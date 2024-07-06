import { Blog } from '../../model/types';

interface Props {
  blog: Blog;
}

export const BlogCard = ({ blog }: Props) => {
  return <div>{blog.name}</div>;
};
