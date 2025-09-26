export type TRoles = "user" | "admin";
export interface IUser {
  _id: string;
  fullName: string;
  username: string;
  avatar?: string;
  email: string;
  password: string;
  isVerified: boolean;
  isActive: boolean;
  token?: string;
  createdAt: string;
  updatedAt: string;
  role: TRoles;
}
