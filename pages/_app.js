import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <header>
        <h1 className="app-title">Recetonas Shop</h1>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
