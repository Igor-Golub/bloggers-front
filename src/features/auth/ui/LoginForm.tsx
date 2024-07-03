import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputFormField } from 'shared/ui';
import { SignUpBody } from '../model/types';

interface LoginFormValue {
  loginOrEmail: string;
  password: string;
}

interface Props {
  isLoading: boolean;
  handleSighUp: (body: SignUpBody) => Promise<void>;
}

export const LoginForm = ({ handleSighUp, isLoading }: Props) => {
  const [isPasswordHidden, setPasswordHidden] = useState<boolean>(true);

  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<LoginFormValue>({
    defaultValues: {
      loginOrEmail: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormValue) => {
    try {
      await handleSighUp(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="form" component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4">Sign in</Typography>

      <InputFormField
        name="loginOrEmail"
        control={control}
        errors={errors}
        textFieldProps={{
          label: 'LoginOrEmail',
          placeholder: 'Enter your login or email...',
          ...register('loginOrEmail', {
            required: 'Required field',
          }),
        }}
      />

      <InputFormField
        name="password"
        control={control}
        errors={errors}
        textFieldProps={{
          InputProps: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    setPasswordHidden(prev => !prev);
                  }}
                  edge="end">
                  {isPasswordHidden ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
          type: isPasswordHidden ? 'password' : 'text',
          label: 'Password',
          placeholder: 'Enter your password...',
          ...register('password', {
            required: 'Required field',
          }),
        }}
      />

      <Button size="large" type="submit" variant="contained" disabled={isLoading}>
        Login
      </Button>
    </Box>
  );
};
