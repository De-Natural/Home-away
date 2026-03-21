// _app.jsx
// App entry point. Wraps all pages with the shared Layout (Header + Footer).

import Layout from "../components/layout/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
