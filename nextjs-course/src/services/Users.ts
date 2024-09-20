import { createHash } from "@/helpers/hash";
import Users from "@/libs/database/Users"

const UsersServices = {
    signUp: async (data: any) => {
        const passwordHash = await createHash(data.password);
        
        return Users.create({...data, password: passwordHash});
    }
}

export default UsersServices;