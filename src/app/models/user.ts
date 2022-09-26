import { Role } from "./auth/role-response";

export interface User {
        email: string,
        id: string,
        role: Role,
        username: string
}
