import Button2 from "./ui/Button2";
import Work from "./ui/Work";
import "./ourwork.css";
import { Link } from "react-router-dom";

function OurWork() {
    return <section id="ourwork" className="px-6 md:px-12 lg:px-24 py-24 bg-[#F3F7F8] ">
        <div className="h-auto w-full pt-4 md:pt-6 lg:pt-8 flex items-center justify-center">
            <Button2 text="Our Work" />
        </div>
        <div className="h-auto w-full pt-6 flex items-center justify-center">
            <h2 className="text-[#202020] text-[28px] font-semibold leading-[31px] text-center px-6 ">Every product here went from idea to live in 2 weeks</h2>
        </div>
        <div className="h-auto w-full pt-4 pb-16 flex items-center justify-center px-14 text-center">
            <p className="text-[16px] leading-[24px] md:leading-[31px] ">Built, launched, and loved by real users</p>
        </div>
        <div className="w-full h-auto wrapper flex items-center justify-center gap-11  overflow-x-auto ">
            <div className="flex items-center justify-between gap-11 content">
                <Link to='/visions' className="block">
                    <Work />
                </Link>
                <Link to='/visions' className="block">
                    <Work />
                </Link>
                <Link to='/visions' className="block">
                    <Work />
                </Link>
                <Link to='/visions' className="block">
                    <Work />
                </Link>
                <Link to='/visions' className="block">
                    <Work />
                </Link>
                <Link to='/visions' className="block">
                    <Work />
                </Link>
            </div>
            <div className="flex items-center justify-between gap-11 content">
                <Link to='/visions' className="block">
                    <Work />
                </Link>
                <Link to='/visions' className="block">
                    <Work />
                </Link>
                <Link to='/visions' className="block">
                    <Work />
                </Link>
                <Link to='/visions' className="block">
                    <Work />
                </Link>
            </div>
            <div className="flex items-center justify-between gap-11 content">
                <Link to='/visions' className="block">
                    <Work />
                </Link>
                <Link to='/visions' className="block">
                    <Work />
                </Link>
                <Link to='/visions' className="block">
                    <Work />
                </Link>
                <Link to='/visions' className="block">
                    <Work />
                </Link>
            </div>
        </div>
    </section> 
}

export default OurWork;