import { useEffect } from "react";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonial";
import OurProcess from "../components/OurProcess";
import OurApproach from "../components/OurApproach";
import WhyUs from "../components/WhyUs";
import OurWork from "../components/OurWork";
import OurImpact from "../components/OurImpact";
import Hero from "../components/Hero";


function Home(){

    useEffect(() => {

        return () => {
            localStorage.setItem("currentTab", "Home");
        } 
    })

    return <>
        <Hero />
        <OurImpact />
        <OurWork />
        <WhyUs />
        <OurApproach />
        <OurProcess />
        <Testimonials />
        <Banner />
    </>
}

export default Home;