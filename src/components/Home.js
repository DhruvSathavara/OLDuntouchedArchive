import React from "react";
import Sliders from "./Sliders/Sliders";
import Header from "./Header";
import Categories from "../Categories";
import Footer from "./Footer";
 function Home (){
    return(
        <>
        <Header></Header>
        <Categories></Categories>
        <Sliders></Sliders>
        <Footer></Footer>
        </>
    )
 }
 export default Home;