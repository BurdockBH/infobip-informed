import React from "react";
import MainNavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Typography from "@mui/material/Typography";
import dummyHeader from "../components/DummyHeader";

function HeadArticlePage() {
    return (
        <div className="App">
            <MainNavBar />
            <Typography>{dummyHeader?.description}</Typography>
            <Footer />
        </div>
    );
}

export default HeadArticlePage;
