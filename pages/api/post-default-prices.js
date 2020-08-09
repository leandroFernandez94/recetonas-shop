import Price from "../../models/Price";
import dbConnect from "../../utils/dbConnect";

const prices = [
  {
    name: "vainilla",
    section: "budines",
    price: 305,
    specialPrice: 275,
  },
  {
    section: "budines",
    name: "limón",
    price: 290,
    specialPrice: 330,
  },
  {
    section: "budines",
    name: "chocolate",
    price: 365,
    specialPrice: 330,
  },
  {
    section: "galletitas",
    name: "vainilla",
    price: 305,
    specialPrice: 275,
    quantity: "100g",
  },
  {
    section: "galletitas",
    name: "limón",
    price: 290,
    specialPrice: 330,
    quantity: "100g",
  },
  {
    section: "galletitas",
    name: "chocolate",
    price: 365,
    specialPrice: 330,
    quantity: "200g",
  },
  {
    section: "pepas",
    name: "de chocolate",
    quantity: "8u",
    price: 285,
    specialPrice: 255,
  },
  {
    section: "pepas",
    name: "de frutilla",
    quantity: "8u",
    price: 340,
    specialPrice: 305,
  },
  {
    section: "trufas",
    name: "manichoc",
    price: 235,
    specialPrice: 210,
    quantity: "120g",
  },
  {
    section: "trufas",
    name: "frutilla",
    price: 160,
    specialPrice: 140,
    quantity: "120g",
  },
  {
    section: 'muffin',
    name: "chocolate",
    quantity: "6u",
    price: 260,
    specialPrice: 235,
  },
  {
    section: 'muffin',
    name: "frutilla",
    quantity: "6u",
    price: 280,
    specialPrice: 250,
  },
  {
    section: 'alfajores',
    name: "chocolate con mousse de chocolate",
    quantity: "6u",
    price: 370,
    specialPrice: 335,
  },
  {
    section: "pan",
    name: "pan de queso",
    quantity: "300g",
    price: 390,
    specialPrice: 350,
  },
  {
    section: 'postres',
    name: "tiramisú",
    quantity: "300g",
    price: 270,
    specialPrice: 240,
  }
]

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (__, res) => {
  try {
    await dbConnect()
  
    await Promise.all(prices.map(price => Price.create(price)))
  
    res.status(201).json({ success: true})
  } catch (e) {
    console.log(e)
    res.status(400).json({ success: false })
  }
};
