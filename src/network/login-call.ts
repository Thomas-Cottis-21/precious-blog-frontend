import {Credentials} from "../types/credentials.ts";
import {LoginPayload} from "../types/login-payload.ts";

export const loginCall = async (credentials: Credentials): Promise<LoginPayload> => {
    const response: Response = await fetch('http://192.168.1.24:8080/api/public/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json() as LoginPayload;
}