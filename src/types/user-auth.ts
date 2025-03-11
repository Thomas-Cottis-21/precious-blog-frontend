export type UserAuth = {
    uuid: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    profileImage: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}