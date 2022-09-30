export interface ISignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  favoriteCrypto: string;
  selectAvatar: string;
  ageConfirmation: boolean;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}
