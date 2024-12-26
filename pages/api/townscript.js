import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  try {
    console.log(req.body); // Log the full request body for debugging

    // Parse the 'data' field if it's a JSON string
    const parsedData = JSON.parse(req.body.data);
    console.log(parsedData); // Log the parsed data to verify

    // Ensure required fields exist
    if (!parsedData.userEmailId) {
      return res.status(400).json({ message: "Missing userEmailId in request data" });
    }

    // Extract the userEmailId
    const { userEmailId } = parsedData;

    // Perform the update in Prisma
    const registerUser = await prisma.registration.update({
      where: { emailId: userEmailId },
      data: {
        paymentDone: true,
      },
    });

    console.log(registerUser); // Log the updated record
    res.status(200).json(registerUser);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Internal Server Error" });
  }
}
