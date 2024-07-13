import LaunchIcon from '@mui/icons-material/Launch';
import { Stack, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Blog } from '../../model';

interface Props {
  blog: Blog;
}

export const BlogContent = ({ blog }: Props) => {
  const classes = useStyles();

  const { name, websiteUrl, description, createdAt } = blog;

  return (
    <Stack gap={4} padding={24}>
      <Typography align="center" variant="h3">
        {name}
      </Typography>

      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" gap={0.5}>
          <LaunchIcon />
          <Link to={websiteUrl} className={classes.link}>
            Author web source
          </Link>
        </Stack>

        <Typography>{createdAt}</Typography>
      </Stack>

      <Typography>{description}</Typography>
    </Stack>
  );
};

const useStyles = makeStyles<Theme>(({ palette }) => ({
  link: {
    textDecoration: 'none',
    color: palette.common.white,
  },
}));
