import { NextApiResponse, NextApiRequest } from "next/types";
import {prisma} from "@/utils/prisma";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        const {orderId, status} = req.body;
        const updatedOrder = await prisma.orders.update({
            where: {
                id: orderId
            },
            data: {
                status: status
            }
        })

        return res.status(200).json({updatedOrder});
    } catch (error) {
        console.log(error)
    }
}