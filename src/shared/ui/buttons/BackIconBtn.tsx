import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

interface Props {
  onClick: () => void;
}

export const BackIconBtn = ({ onClick }: Props) => {
  return (
    <IconButton onClick={onClick}>
      <ArrowBackIcon color="action" />
    </IconButton>
  );
};
