import bcrypt from 'bcrypt';

const saltRounds = 12;

export const createHash = async (passwrord: string) => {
    try {
        if(!passwrord) return null;
        const hash = await bcrypt.hash(passwrord, saltRounds);
        return hash;
    } catch (error) {
        return null;
    }
}

export const verifyHash = async (password: string, hash: string) => {
    try {
        const isValid = bcrypt.compare(password, hash);
        return isValid;
    } catch (error) {
        return false;
    }
}