import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(404).end();

  const { userId } = req.body;

  if (!userId) return res.status(404).json({ error: "User ID is required!" });

  try {
    const order = await prisma.orders.findMany({
      where: {
        userId: userId,
      },
    });

    return res.status(200).json(order);
  } catch (error) {
    console.error(error);
  }
}
