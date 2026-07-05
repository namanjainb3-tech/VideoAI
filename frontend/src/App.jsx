import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Workspace from "./pages/Workspace";
import Features from "./pages/Features";
import Technology from "./pages/Technology";
import Kitu from "./pages/Kitu";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Landing />}
                />

                <Route
                    path="/workspace"
                    element={<Workspace />}
                />

                <Route
                    path="/features"
                    element={<Features />}
                />

                <Route
                    path="/technology"
                    element={<Technology />}
                />

                <Route
                    path="/kitu"
                    element={<Kitu />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;