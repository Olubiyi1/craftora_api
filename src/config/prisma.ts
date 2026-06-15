import { PrismaClient } from "@prisma/client/extension";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({connectionString:process.env.DATABASE_URI})

const prisma = new PrismaClient({
    adapter,
    log:["query","info","warn","error"]
})

export default prisma;