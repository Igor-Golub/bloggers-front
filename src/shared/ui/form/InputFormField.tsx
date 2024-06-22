import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

interface Props<FormValues extends FieldValues> {
  name: Path<FormValues>;
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
  textFieldProps: TextFieldProps;
}

export const InputFormField = <FormValues extends FieldValues>({
  name,
  control,
  errors,
  textFieldProps,
}: Props<FormValues>) => {
  return (
    <Controller<FormValues>
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...textFieldProps}
          error={!!errors.email}
          {...field}
          helperText={
            errors?.[name]?.message && typeof errors[name].message === "string"
              ? errors[name].message
              : ""
          }
        />
      )}
    />
  );
};
