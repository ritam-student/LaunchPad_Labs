import { useEffect } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonial";


function Home(){

    useEffect(() => {

        return () => {
            localStorage.setItem("currentTab", "Home");
        } 
    })

    return <>
        <Navbar />
        <Testimonials />
        <Banner />
        <Footer />
    </>
}

export default Home;