import crypto from "crypto"

// goes to user email
export const generateToken = ()=>{
    const token = crypto.randomBytes(32).toString("hex")
    return token;
}

// saved to db
export const hashToken = (token:string)=>{
    return crypto.createHash("sha256").update(token).digest("hex")
}