import { useEffect } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonial";
import Ourprocess from "../components/OurProcess";


function Home(){

    useEffect(() => {

        return () => {
            localStorage.setItem("currentTab", "Home");
        } 
    })

    return <>
        <Navbar />
        <Ourprocess />
        <Testimonials />
        <Banner />
        <Footer />
    </>
}

export default Home;