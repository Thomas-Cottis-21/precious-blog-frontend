import {UserAuth} from "./user-auth.ts";

export type LoginPayload = {
    token: string;
    type: string;
    user: UserAuth;
}