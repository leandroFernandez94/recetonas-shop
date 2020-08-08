// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const precios = {
  budines: [
    {
      name: "vainilla",
      price: 305,
      specialPrice: 275,
    },
    {
      name: "limón",
      price: 290,
      specialPrice: 330,
    },
    {
      name: "chocolate",
      price: 365,
      specialPrice: 330,
    },
  ],
  galletitas: [
    {
      name: "vainilla",
      price: 305,
      specialPrice: 275,
      quantity: "100g",
    },
    {
      name: "limón",
      price: 290,
      specialPrice: 330,
      quantity: "100g",
    },
    {
      name: "chocolate",
      price: 365,
      specialPrice: 330,
      quantity: "200g",
    },
  ],
  pepas: [
    {
      name: "de chocolate",
      quantity: "8u",
      price: 285,
      specialPrice: 255,
    },
    {
      name: "de frutilla",
      quantity: "8u",
      price: 340,
      specialPrice: 305,
    },
  ],
  trufas: [
    {
      name: "manichoc",
      price: 235,
      specialPrice: 210,
      quantity: "120g",
    },
    {
      name: "frutilla",
      price: 160,
      specialPrice: 140,
      quantity: "120g",
    },
  ],
  muffin: [
    {
      name: "chocolate",
      quantity: "6u",
      price: 260,
      specialPrice: 235,
    },
    {
      name: "frutilla",
      quantity: "6u",
      price: 280,
      specialPrice: 250,
    },
  ],
  alfajores: [
    {
      name: "chocolate con mousse de chocolate",
      quantity: "6u",
      price: 370,
      specialPrice: 335,
    },
  ],
  pan: [
    {
      name: "pan de queso",
      quantity: "300g",
      price: 390,
      specialPrice: 350,
    },
  ],
  postres: [
    {
      name: "tiramisú",
      quantity: "300g",
      price: 270,
      specialPrice: 240,
    },
  ],
};
export default (req, res) => {
  res.statusCode = 200;
  res.json({ precios });
};
