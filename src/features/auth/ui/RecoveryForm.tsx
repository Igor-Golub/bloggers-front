import { Box, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { BackIconBtn, InputFormField } from 'shared/ui';
import { PasswordRecoveryBody } from '../model/types';

interface RecoveryFormValue {
  login: string;
  email: string;
  password: string;
}

interface Props {
  isLoading: boolean;
  handleRecover: (body: PasswordRecoveryBody) => Promise<void>;
}

export const RecoveryForm = ({ isLoading, handleRecover }: Props) => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<RecoveryFormValue>({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: RecoveryFormValue) => {
    try {
      await handleRecover(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="form" component="form" onSubmit={handleSubmit(onSubmit)}>
      <Box className="gStartBox">
        <BackIconBtn onClick={() => navigate(-1)} />
        <Typography variant="h4">Recovery password</Typography>
      </Box>

      <InputFormField
        name="email"
        control={control}
        errors={errors}
        textFieldProps={{
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email...',
          ...register('email', {
            required: 'Required field',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          }),
        }}
      />

      <Button size="large" type="submit" variant="contained" disabled={isLoading}>
        Done
      </Button>
    </Box>
  );
};
