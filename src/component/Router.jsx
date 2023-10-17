import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Axios from "../pages/Axios"
import Crud from "../pages/Crud";

export default function () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="axios" element={<Axios />} />
            <Route path="crud" element={<Crud />} />
        </Routes>
    );
}
