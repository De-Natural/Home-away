// _app.jsx
// App entry point. Wraps all pages with the shared Layout (Header + Footer).

import { Toaster, ToastBar } from "react-hot-toast";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
            <Toaster position="top-right" reverseOrder={false}>
                {(t) => (
                    <ToastBar
                        toast={t}
                        style={{
                            ...t.style,
                            position: "relative",
                            overflow: "hidden",
                            animation: t.visible
                                ? "slide-in-right 0.5s ease-out"
                                : "slide-out-right 0.5s ease-in forwards",
                        }}
                    >
                        {({ icon, message }) => (
                            <>
                                {icon}
                                {message}
                                {t.type !== "loading" && (
                                    <div
                                        className="absolute bottom-0 left-0 h-[3px] bg-primary-dark"
                                        style={{
                                            animation: `toast-progress ${t.duration}ms linear forwards`,
                                        }}
                                    />
                                )}
                            </>
                        )}
                    </ToastBar>
                )}
            </Toaster>
        </Layout>
    );
}
