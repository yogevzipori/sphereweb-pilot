import { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: "info@sphereremodeling.com",
      from: "info@sphereremodeling.com",
      subject: name,
      text: `Message from ${email}:\n${message}`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Message Successfully Sent!" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `There was an error sending your message. ${err}` });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
