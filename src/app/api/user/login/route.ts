import { NextResponse } from "next/server";
import { LoginRequest, LoginResponse } from "@/@types/login";

type UserData = {
 id: number;
 role: "USER" | "ADMIN";
 name: string;
 email: string;
 phone: string;
 verified: boolean;
 phoneVerified: boolean;
 balance: number;
 level: string;
 referralCode: string;
 avatarId: number;
 telegramUserId: number;
 googleUserWithoutPassword: boolean;
 password: string;
};

const users: UserData[] = [
 {
  id: 1,
  name: "user@example.com",
  password: "123456",
  role: "USER",
  email: "user@example.com",
  phone: "1234567890",
  verified: true,
  phoneVerified: true,
  balance: 100,
  level: "1",
  referralCode: "123456",
  avatarId: 1,
  telegramUserId: 1,
  googleUserWithoutPassword: true,
 },
 {
  id: 2,
  name: "username",
  password: "password",
  role: "USER",
  email: "username",
  phone: "1234567890",
  verified: true,
  phoneVerified: true,
  balance: 100,
  level: "1",
  referralCode: "123456",
  avatarId: 1,
  telegramUserId: 1,
  googleUserWithoutPassword: true,
 },
];

export async function POST(req: Request) {
 try {
  const { identifier, password }: LoginRequest = await req.json();

  if (!identifier || !password) {
   return NextResponse.json(
    { message: "Identifier and password are required" },
    { status: 400 }
   );
  }

  const user = users.find((u) => u.name === identifier);
  if (!user) {
   return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const isValidPassword = password === user.password;
  if (!isValidPassword) {
   return NextResponse.json(
    { message: "Invalid credentials" },
    { status: 401 }
   );
  }

  const token = "1234567890";

  return NextResponse.json<LoginResponse>({
   status: "success",
   data: {
    token,
    user: { id: user.id, identifier: user.name },
   },
  });
 } catch (error: unknown) {
  console.error(error);
  return NextResponse.json(
   { message: "Internal server error" },
   { status: 500 }
  );
 }
}
