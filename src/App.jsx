import React from "react";
import Navbar from "./component/Navbar";
import Router from "./component/Router";

function App() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-8">
                <Router />
            </main>
        </>
    );
}

export default App;
