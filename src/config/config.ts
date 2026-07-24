export default {
    port:Number(process.env.port),
    access_token_secret_key:process.env.ACCESS_TOKEN_SECRET_KEY as string,
    refresh_token_secret_key:process.env.REFRESH_TOKEN_SECRET_KEY as string
}