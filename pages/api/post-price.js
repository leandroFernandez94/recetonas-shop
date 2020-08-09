import dbConnect from '../../utils/dbConnect'
import Price from '../../models/Price'

export default async function handler(req, res) {
  await dbConnect()

  try {
    const price = await Price.create(
      req.body
    )
    res.status(201).json({ success: true, data: price })
  } catch (error) {
    console.log(error)
    res.status(400).json({ success: false })
  }
}