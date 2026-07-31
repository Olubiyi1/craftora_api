import prisma from "../../config/prisma";
import AppError from "../../errorHandlers/appError";
import { createLabel } from "../../utils/labels";

const tradeServiceLogs = createLabel("TRADE_SERVICE_LOGS");

class TradeService {
  async findTradeById(tradeId: string) {
    const trade = await prisma.trade.findUnique({ where: { id: tradeId } });
    if (!trade) {
      tradeServiceLogs.warn("Trade not found");
      throw new AppError("Trade not found", 404);
    }
    tradeServiceLogs.info("trade found");
    return trade;
  }

  async findTradeByName(tradeName: string) {
    const trade = await prisma.trade.findFirst({ where: { name: tradeName } });
    return trade;
  }

  async createTrade(tradeName: string) {
    const existingtrade = await this.findTradeByName(tradeName);

    if (existingtrade) {
      tradeServiceLogs.warn(`${tradeName} already exists`);
      throw new AppError(`${tradeName} already exists`, 409);
    }
    const tradeData = await prisma.trade.create({
      data: { name: tradeName },
    });
    tradeServiceLogs.info(`${tradeName} created succesffully`);
    return tradeData;
  }

  async updatetrade(tradeId: string, tradeName: string) {
    await this.findTradeById(tradeId);

    const existingtrade = await this.findTradeByName(tradeName);
    if (existingtrade && existingtrade.id !== tradeId) {
      tradeServiceLogs.warn(`Trade with ${tradeName} already exists`);
      throw new AppError(`Trade with ${tradeName} already exists`, 409);
    }
    const updatedTrade = await prisma.trade.update({
      where: { id: tradeId },
      data: {
        name: tradeName
      },
    });
    tradeServiceLogs.info(`${updatedTrade} successfully updated `);
    return updatedTrade;
  }

  async deletetrade(tradeId:string){
    await this.findTradeById(tradeId)
    const deletedTrade = await prisma.trade.delete({
        where:{
            id:tradeId
        }
    })
    tradeServiceLogs.info(`Trade successfuy deleted`)
    return deletedTrade
  }
}

export default new TradeService;
