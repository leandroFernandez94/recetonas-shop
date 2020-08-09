import Link from "next/link";
import SectionCards from "../components/SectionCards";

const sections = [
  { name: "Precios", link: "/prices" },
  { name: "Agregar Precio", link: "/add-price" },
  { name: "Recetas", link: "/recetas" },
  { name: "Pedidos", link: "/pedidos" },
];

export default function Home() {
  return (
    <main>
      <SectionCards elements={sections}>
        {({ name, link }) => (
          <Link href={link} key={name}>
            <a role="button" className="card-button">
              <span>{name}</span>
            </a>
          </Link>
        )}
      </SectionCards>
      <style jsx>
        {`
          .card-button {
            background-color: white;
            color: #8282e0;
            border-radius: 6px;
            height: 40px;
            width: 300px;
            cursor: pointer;
            border: 1px solid #8282e0;
            text-align: center;
          }

          .card-button:hover {
            background-color: #8282e0;
            color: white;
          }
          .card-button:not(:last-child) {
            margin-bottom: 10px;
          }

          .card-button span {
            font-size: 1.2rem;
            vertical-align: middle;
            line-height: 38px;
          }
        `}
      </style>
    </main>
  );
}
