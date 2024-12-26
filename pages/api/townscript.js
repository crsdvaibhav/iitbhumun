import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  try {
    console.log(req.body); // Log the entire request body for debugging

    // Ensure 'data' exists in the request body
    const { data } = req.body;
    if (!data || !data.userEmailId) {
      return res.status(400).json({ message: "Invalid request body" });
    }

    // Extract userEmailId from the data
    const { userEmailId } = data;

    // Perform the update in Prisma
    const registerUser = await prisma.registration.update({
      where: { emailId: userEmailId },
      data: {
        paymentDone: true,
      },
    });

    console.log(registerUser);
    res.status(200).json(registerUser);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Internal Server Error" });
  }
}
