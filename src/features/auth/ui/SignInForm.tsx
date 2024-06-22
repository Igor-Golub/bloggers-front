import { useForm } from "react-hook-form";
import { Box, Button, Typography } from "@mui/material";
import { InputFormField } from "../../../shared/ui";
import { SignInBody } from "../model/api.ts";

interface RegistrationFormValue {
  login: string;
  email: string;
  password: string;
}

interface Props {
  isLoading: boolean;
  handleSighIn: (body: SignInBody) => Promise<void>;
}

export const SignInForm = ({ handleSighIn, isLoading }: Props) => {
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<RegistrationFormValue>({
    defaultValues: {
      email: "",
      login: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegistrationFormValue) => {
    try {
      await handleSighIn(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="form" component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4">Sign up</Typography>

      <InputFormField
        name="email"
        control={control}
        errors={errors}
        textFieldProps={{
          label: "Email",
          type: "email",
          placeholder: "Enter your email...",
          ...register("email", {
            required: "Required field",
          }),
        }}
      />

      <InputFormField
        name="login"
        control={control}
        errors={errors}
        textFieldProps={{
          label: "Login",
          placeholder: "Enter your email...",
          ...register("login", {
            required: "Required field",
          }),
        }}
      />

      <InputFormField
        name="password"
        control={control}
        errors={errors}
        textFieldProps={{
          label: "Password",
          placeholder: "Enter your password...",
          ...register("password", {
            required: "Required field",
          }),
        }}
      />

      <Button
        size="large"
        type="submit"
        variant="contained"
        disabled={isLoading}
      >
        Next
      </Button>
    </Box>
  );
};
