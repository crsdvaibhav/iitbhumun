import prisma from "../../lib/prisma";
import { getSession } from "next-auth/react";




// {
//     "userEmailId":"example@email.com",
//     "userName":"John Doe",
//     "currency":"INR",                       // Transaction Currency
//     "ticketName":"Ticket Name",
//     "eventName":"Townscript: Best Event Ticketing Platform",
//     "eventCode":"townscript-best",
//     "ticketPrice":600,
//     "discountCode": "EARLY100",							// NA, if no discount was applied
//     "discountAmount":100,
//     "customQuestion1":"customValue1",				// deprecated, use answerList key
//     "customQuestion20":"customValue20",     // deprecated, use answerList key
//     "answerList":[
//       {
//           "uniqueQuestionId": 111,
//         "question": "Country",
//         "answer": "India"
//       },
//       {
//           "uniqueQuestionId": 222,
//         "question": "Have you been at Taj Mahal?",
//         "answer": "Yes"
//       }
//     ],
//     "uniqueOrderId":"9347234294742974",
//     "registrationTimestamp":"2014-08-22 06:41:27"
//   }

// this is data format









export default async function handler(req, res) {
    try {
        
      const registerUser = await prisma.registrations.update({
        where: { emailId: req.body.userEmailId },
        data:{
            paymentDone:true
        }
      });
      console.log(registerUser)
      res.status(200).json(registerUser);
    } catch (error) {
      console.log(error)
      res.status(401).json({"message":"Unauthorised"})
    }
  }
