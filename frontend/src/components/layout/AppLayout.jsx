import Background from "./Background";
import Navbar from "./Navbar";
import KituButton from "../chat/KituButton";
import { useLocation } from "react-router-dom";

function AppLayout({ children }) {

    const location = useLocation();

    const showKitu = location.pathname !== "/kitu";

    return (
        <>
            <Background />

            <div className="relative z-10 flex min-h-screen flex-col text-white">

                <Navbar />

                <main className="flex-1">
                    {children}
                </main>

                {showKitu && <KituButton />}

            </div>

        </>
    );
}

export default AppLayout;