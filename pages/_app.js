import { SWRConfig } from "swr";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (...args) => fetch(...args).then((res) => res.json()),
      }}
    >
      <div className="app-container">
        <header>
          <h1 className="app-title">Recetonas Shop</h1>
        </header>
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}

export default MyApp;
