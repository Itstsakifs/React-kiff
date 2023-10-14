import React from "react";
import Case from "./case";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="bg-slate-700 py-2">
            <Case>
                <div className="flex items-center">
                    <Link
                        className="mr-2 text-sm font-semibold uppercase text-white"
                        to="/"
                    >
                        Web Kiff
                    </Link>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/gallery">Gallery</NavLink>
                    <NavLink href="/axios">Axios</NavLink>
                </div>
            </Case>
        </div>
    );
}
