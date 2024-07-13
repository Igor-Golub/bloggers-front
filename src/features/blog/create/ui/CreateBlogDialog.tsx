import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { dialogsActions, dialogsSelectors } from 'shared/ui/dialogs';
import { CreateBlogForm } from './CreateBlogForm';

export const CreateBlogDialog = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(state => dialogsSelectors.dialogStatus(state, 'createBlog'));

  const handleClose = () => {
    dispatch(dialogsActions.closeDialog({ key: 'createBlog' }));
  };

  return (
    <Dialog open={!!isOpen} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">Create blog</DialogTitle>

      <DialogContent>
        <CreateBlogForm />
      </DialogContent>

      <DialogActions>
        <Button variant="outlined">Create</Button>
      </DialogActions>
    </Dialog>
  );
};
