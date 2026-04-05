export interface RegistrationRequest {
  email: string;
  password: string;
  nickname: string;
  name: string;
  referralCode?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}