import { NextApiRequest, NextApiResponse } from "next/types";
import {prisma} from "@/utils/prisma";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
       const latestOrder = await prisma.orders.findFirst({
        orderBy: { createDate: "desc"},
        select: {
            id: true,
        }
       }) 

       if(!latestOrder) return res.status(404).json({ message: "No order found!"})
       res.status(200).json({orderId: latestOrder.id})
    } catch (error) {   
        console.error(error)
    }
}