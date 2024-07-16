import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
// Wherever Outlet mentioned, the things change in them (<Outlet />)
// from url extracted what to place in there
// like for instance when ..../home then <Home /> will be displayed
// when .../about then <About /> and similiarly

export default function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}