// _document.jsx
// Custom Next.js Document. Imports Google Fonts (Montserrat + Open Sans) used across the site.

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en-GB">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <meta
                    name="description"
                    content="Serviced apartments Newcastle. Short term rentals in Newcastle upon Tyne. Stay with us for flexible extended stays."
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
