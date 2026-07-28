import { PrismaClient } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import AppError from "../errorHandlers/appError";

const databaseUrl = process.env.DATABASE_URL

if(!databaseUrl){
    throw new AppError("DATABASE_URL is not defined",500)
}

const adapter = new PrismaPg({connectionString:process.env.DATABASE_URL})

const prisma = new PrismaClient({
    adapter,
    log:["query","info","warn","error"]
})

export default prisma;