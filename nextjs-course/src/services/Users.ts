import { createHash, verifyHash } from "@/helpers/hash";
import Users from "@/libs/database/Users"
import { User } from "@prisma/client";

const UsersServices = {
    signUp: async (data: Pick<User, "name" | "email" | "password">) => {
        const passwordHash = await createHash(data.password);
        if(!passwordHash){
            throw new Error("Error creating password hash");
        }
        
        return Users.create({...data, password: passwordHash});
    },
    signIn: async (data: Pick<User, "email" | "password">) => {
        const record = await Users.findByEmail(data.email);
        if(!record) return null;
        const isValidPassword = await verifyHash(data.password, record.password);
        if(!isValidPassword) return null;

        return {...record, password: null};
    }
}

export default UsersServices;