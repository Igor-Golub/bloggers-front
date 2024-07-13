import { Button, Card, CardActions, CardContent, CardHeader, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { Blog } from '../../model/types';

interface Props {
  blog: Blog;
}

export const BlogCard = ({ blog }: Props) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blogs/${blog.id}`);
  };

  return (
    <Card className={classes.card} elevation={3}>
      <CardHeader title={blog.name} subheader={blog.createdAt} />

      <CardContent>
        <Typography>{blog.description}</Typography>
      </CardContent>

      <CardActions>
        <Button variant="outlined" onClick={handleReadMore}>
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles<Theme>(({ spacing }) => ({
  card: {
    display: 'flex',
    maxHeight: '14rem',
    minHeight: '18rem',
    flexDirection: 'column',
    border: '1px solid #ddd',
    padding: spacing(1),
    borderRadius: spacing(2),
    justifyContent: 'space-between',
  },
}));
