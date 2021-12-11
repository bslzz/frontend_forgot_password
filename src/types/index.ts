export interface IUser {
  name: string
  email: string
  password: string
}
export interface ISignInInput {
  email: string
  password: string
}
export interface IChangePasswordInput {
  password: string
  c_password: string
}
