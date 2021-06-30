export interface ProfileDetails {
    // minChars = 2, maxChars = 30
    fullName: string;
  
 
  
    // the user has to accept the terms and conditions
    acceptedTermsAndConditions: boolean;

    password: string;

    passwordConfirmation: string;

    email: string;
  }