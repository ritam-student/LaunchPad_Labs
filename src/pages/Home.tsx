import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonial";


function Home(){
    return <>
        <Navbar />
        <Testimonials />
        <Banner />
        <Footer />
    </>
}

export default Home;