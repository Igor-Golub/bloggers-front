export interface SignInBody {
  email: string;
  login: string;
  password: string;
}

export interface SignUpBody {
  loginOrEmail: string;
  password: string;
}

export interface SignUpResponse {
  accessToken: string;
}

export interface PasswordRecoveryBody {
  email: string;
}

export interface ConfirmPasswordRecoveryBody {
  newPassword: string;
  recoveryCode: string;
}

export interface ResendConfirmationBody {
  email: string;
}

export interface ConfirmRegistrationBody {
  code: string;
}
