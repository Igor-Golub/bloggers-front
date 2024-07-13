import { Button } from '@mui/material';
import { useAppDispatch } from 'shared/hooks';
import { dialogsActions } from 'shared/ui/dialogs';
import { CreateBlogDialog } from './CreateBlogDialog';

export const CreateBlogBtn = () => {
  const dispatch = useAppDispatch();

  const handleOpenCreateDialog = () => {
    dispatch(dialogsActions.openDialog({ key: 'createBlog' }));
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpenCreateDialog}>
        Create my own blog
      </Button>

      <CreateBlogDialog />
    </>
  );
};
