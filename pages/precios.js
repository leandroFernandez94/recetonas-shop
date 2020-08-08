import { Fragment } from "react";
import useSWR from "swr";

function getName(name, quantity) {
  return quantity ? `${name} (${quantity})` : name;
}

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Precios() {
  const result = useSWR("/api/precios", fetcher);
  const { data, error } = result;

  if (error) {
    return "error";
  }
  if (!data) {
    return "loading";
  }

  const { precios } = data;

  return (
    <div className="precios-container">
      {Object.keys(precios || []).map((section) => (
        <Fragment key={section}>
          <h3 className="section-name">{section}</h3>
          <table className="section-table">
            <tbody>
              {precios[section].map(
                ({ name, quantity, price, specialPrice }) => (
                  <tr className="table-row" key={name}>
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
