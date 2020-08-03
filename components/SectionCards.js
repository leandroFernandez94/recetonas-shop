export default function SectionCards({ children: cardElement, elements }) {
  return (
    <section className="container section-cards-container">
      {elements.map((el) => cardElement(el))}
      <style jsx>{`
        .section-cards-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </section>
  );
}
