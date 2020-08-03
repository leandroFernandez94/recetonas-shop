import { Fragment } from "react";

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

function getName(name, quantity) {
  return quantity ? `${name} (${quantity})` : name;
}

export default function Precios() {
  return (
    <div className="precios-container">
      {Object.keys(precios).map((section) => (
        <Fragment>
          <h3 className="section-name">{section}</h3>
          <table className="section-table">
            <tbody>
              {precios[section].map(
                ({ name, quantity, price, specialPrice }) => (
                  <tr className="table-row">
                    <td>{getName(name, quantity)}</td>
                    <td>{price}</td>
                    <td>{specialPrice}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </Fragment>
      ))}
      <style>
        {`
        .precios-container {
          padding-bottom: 30px;
        }

        .section-name {
          text-transform: uppercase;
        }

        .section-table {
          border-collapse: collapse;
          width: 100%;
          text-transform: uppercase;
        }

        .table-row:hover {
          background-color: #8282e0
        }

        .table-row td:first-child {
          width: 70%;
          padding-left: 10px; 
        }

        .table-row td:not(:first-child) {
          text-align: center;
        }

        .table-row td {
          {/* border: 1px solid black; */}
        }
      `}
      </style>
    </div>
  );
}
