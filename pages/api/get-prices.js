import dbConnect from "../../utils/dbConnect";
import Price from '../../models/Price'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (__, res) => {
  await dbConnect()

  const prices = await Price.find({})
  res.json({ prices });
};
