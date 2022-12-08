import React from "react";
import MainNavBar from "../components/NavBar";
import {useParams} from "react-router-dom";
import Footer from "../components/Footer";
import dummy from "../components/Dummy";
import Typography from "@mui/material/Typography";


function ArticlePage() {
    const { id } = useParams()
    const content = dummy.find(item => item.id.toString() == id);
    return (
        <div className="App">
            <MainNavBar />
            <Typography>{content?.description}</Typography>
            <Footer />
        </div>
    );
}

export default ArticlePage;
