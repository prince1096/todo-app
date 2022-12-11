import "../styles/globals.css";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="component-app">
      <Component {...pageProps} />
    </div>
  );
}
