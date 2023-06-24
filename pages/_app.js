import "../styles/auth.css";
import "../styles/chats.css";

import { ContextProvider } from "../context/store";

export default function App({ Component, pageProps }) {
    return (
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
    )
}