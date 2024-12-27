import prisma from "../../lib/prisma";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.method === "GET") {
    try {
      const user = await prisma.user.findUnique({
        where: { email: session.user.email }
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(401).json({"message":"Unauthorised"})
    }
  }
}