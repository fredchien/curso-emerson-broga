import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET;
const secretKey = new TextEncoder().encode(JWT_SECRET);

export const encrypt = async (payload: any) => {
    const result = await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1 min from now')
        .sign(secretKey);

    console.log('result', result);
    return result;    
}

export const decrypt = async (token: string) => {
    const { payload } = await jwtVerify(token, secretKey, { algorithms: ['HS256'] });
    return payload;
}
