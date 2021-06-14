// CSS
import "../styles/globals.css";

// Types
import type { AppProps } from "next/app";

// Dependencies
import { Provider } from "react-redux";
import { Provider as AuthProvider } from "next-auth/client";
import { store } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
}
export default MyApp;
