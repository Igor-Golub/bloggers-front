import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Theme,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../model/types';

interface Props {
  post: Post;
}

export const PostCard = ({ post }: Props) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <Card className={classes.card} elevation={3}>
      <CardHeader
        title={post.title}
        subheader={post.createdAt}
        action={
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        }
      />

      <CardContent>
        <Typography className={classes.description}>{post.shortDescription}</Typography>
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
    maxHeight: '20rem',
    minHeight: '24rem',
    flexDirection: 'column',
    border: '1px solid #ddd',
    padding: spacing(1),
    borderRadius: spacing(2),
    justifyContent: 'space-between',
  },
  description: {
    maxHeight: '4.5rem',
    position: 'relative',
    overflow: 'hidden',

    '&::after': {
      content: '" "',
      right: 0,
      top: '3rem',
      width: '20rem',
      display: 'block',
      height: '1.5rem',
      position: 'absolute',
      pointerEvents: 'none',
      background: '#252525',
      maskImage: 'linear-gradient(90deg, #0000, #000 75%)',
      '-webkit-mask-image': 'linear-gradient(90deg, #0000, #000 75%)',
    },
  },
}));
