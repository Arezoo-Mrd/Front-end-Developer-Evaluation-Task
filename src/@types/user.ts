export type UserResponse = {
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
};
