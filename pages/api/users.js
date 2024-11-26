import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users: ", error);
      res.status(500).json({ message: "Error fetching users", error: error.message });
    }
  } else if (req.method === "POST") {
    try {
      const data = req.body;
      const user = await prisma.user.create({ data });
      res.status(201).json(user);
    } catch (error) {
      console.error("Error creating user: ", error);
      res.status(500).json({ message: "Error creating user", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
