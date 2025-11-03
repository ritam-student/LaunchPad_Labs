import { useEffect } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonial";
import OurProcess from "../components/OurProcess";
import OurApproach from "../components/OurApproach";
import WhyUs from "../components/WhyUs";


function Home(){

    useEffect(() => {

        return () => {
            localStorage.setItem("currentTab", "Home");
        } 
    })

    return <>
        <Navbar />
        <WhyUs />
        <OurApproach />
        <OurProcess />
        <Testimonials />
        <Banner />
        <Footer />
    </>
}

export default Home;