// Layout.jsx
// Main layout wrapper. Renders the Header at the top, page content in the middle,
// and Footer at the bottom. Used by _app.jsx to wrap every page.

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}
