export type LoginRequest = {
 identifier: string;
 password: string;
};

export type LoginResponse = {
 status: "success";
 data: {
  token: string;
  user: { id: number; identifier: string };
 };
};
