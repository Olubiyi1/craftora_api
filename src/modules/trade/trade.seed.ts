import prisma from "../../config/prisma";

export const seedTrade = async () => {
  const seededTrade = await prisma.trade.createMany({
    data: [
      { name: "Backend Development" },
      { name: "Frontend Development" },
      { name: "UI/UX Design" },
      { name: "Data Science" },
    ],
  });
  return seededTrade;
};
