import { PrismaClient } from "@prisma/client";

class GetPrismaClient {
  private static prisma: PrismaClient;

  private constructor() {}

  static getPrismaClient(): PrismaClient {
    if (!GetPrismaClient.prisma) {
      GetPrismaClient.prisma = new PrismaClient();
    }
    return GetPrismaClient.prisma;
  }
}

export default GetPrismaClient.getPrismaClient();
