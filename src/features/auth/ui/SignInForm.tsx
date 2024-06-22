import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputFormField } from "../../../shared/ui";
import { SignInBody } from "../model/api.ts";
import { generateErrorsFieldsMessages } from "../../../shared/utils/forms";

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
  const [isPasswordHidden, setPasswordHidden] = useState<boolean>(true);

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
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
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
            minLength: {
              value: 3,
              message: generateErrorsFieldsMessages("minLength", {
                field: "Login",
                amount: 3,
              }),
            },
            maxLength: {
              value: 10,
              message: generateErrorsFieldsMessages("maxLength", {
                field: "Login",
                amount: 10,
              }),
            },
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
                    setPasswordHidden((prev) => !prev);
                  }}
                  edge="end"
                >
                  {isPasswordHidden ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
          type: isPasswordHidden ? "password" : "text",
          label: "Password",
          placeholder: "Enter your password...",
          ...register("password", {
            required: "Required field",
            minLength: {
              value: 6,
              message: generateErrorsFieldsMessages("minLength", {
                field: "Password",
                amount: 6,
              }),
            },
            maxLength: {
              value: 20,
              message: generateErrorsFieldsMessages("maxLength", {
                field: "Password",
                amount: 20,
              }),
            },
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
