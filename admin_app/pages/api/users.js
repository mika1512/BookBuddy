import { User } from "@/models/User";
import { mongooseConnect } from "@/lib/mongoose";
import { isAdminRequest } from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === 'GET') {
    const userCount = await User.countDocuments();
    res.json({ count: userCount });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
