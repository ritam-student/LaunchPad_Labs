import { useState } from "react";
import Button from "./ui/Button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
    const [currentTab, setCurrentTab] = useState<string>(() => {
        return localStorage.getItem("currentTab") || "Home";
    });
    const [dropdown, setDropdown] = useState<boolean>(false);

    const navigations: {name: string, link?: string, href?: string}[] = [
        {name: "How It Works", href: "#howitworks"},
        {name: "Our Work", href: "#ourwork"},
        {name: "Our Process", href: "#ourprocess"},
        {name: "Founder", link: "/founder"},
        {name: "Pricing", link: "/pricing"},
    ]

    function setTab() {
        setCurrentTab("Home");
        localStorage.setItem("currentTab", "Home");
    }

    return <div className="bg-[#F3F7F8] h-auto w-full flex flex-col items-center  px-4 md:px-8 py-3 md:py-[20px] ">
        <div className=" container flex items-center justify-between w-full h-auto">
            {/** left part  **/}
            <Link to='/' onClick={setTab} className="relative overflow-hidden h-[50px] scale-110 md:scale-100 w-[47%] md:w-[30%] lg:w-[20%] flex items-center justify-center">
                <img src="Logo.png" alt="Logo" className="object-contain" />
            </Link>

            {/** right part for large screen **/}
            <div className="hidden lg:block">
                <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center justify-between gap-6 ">
                        {
                            navigations.map((nav, index) => (
                                nav.link ?
                                <Link to={nav.link} key={index} className={`font-semibold text-[15px] relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-gray-500 after:rounded-md after:w-0 ${currentTab === nav.name && "after:w-full"}`} onClick={() => {setCurrentTab(nav.name); localStorage.setItem("currentTab", nav.name);}}>{nav.name}</Link>
                                :
                                <a href={nav.href} key={index} className={`font-semibold text-[15px] relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-gray-500 after:rounded-md after:w-0 ${currentTab === nav.name && "after:w-full"}`} onClick={() => {setCurrentTab(nav.name); localStorage.setItem("currentTab", nav.name);}}>{nav.name}</a>
                            ))
                        }
                    </div>
                    <Button text="Book A Call" link="/book-a-call" setCurrentTab={setCurrentTab} />
                </div>
            </div>

            {/** right part for small screen **/}
            <div className="block lg:hidden">   
                <div className="flex items-center justify-between gap-3 md:gap-5">
                    <Button text="Book A Call" link="/book-a-call" setCurrentTab={setCurrentTab} />
                    {
                        dropdown ?
                        <X onClick={() => setDropdown(prev => !prev)} className="cursor-pointer" size={"18px"}/>
                        :
                        <Menu onClick={() => setDropdown(prev => !prev)} className="cursor-pointer" size={"18px"}/>
                    }
                </div>
            </div>
        </div>
        {
            dropdown && 
            <div className="block lg:hidden w-full h-auto">
                <div className="flex flex-col items-start justify-between gap-0.5 pt-3 w-full h-auto ">
                    {
                        navigations.map((nav, index) => (
                            nav.link ?
                            <div className={`w-full h-auto py-2 px-2 border-b-2 border-gray-500  ${currentTab === nav.name && "bg-[#d4d7d8]"} `}>
                                <Link to={nav.link} key={index} className={`font-semibold text-[15px] w-full h-full `} onClick={() => {setCurrentTab(nav.name); localStorage.setItem("currentTab", nav.name); setDropdown(prev => !prev)}}>{nav.name}</Link>
                            </div>
                            :
                            <div className={`w-full h-auto py-2 px-2 border-b-2 border-gray-500  ${currentTab === nav.name && "bg-[#d4d7d8]"} `}>
                                <a href={nav.href} key={index} className={`font-semibold text-[15px] w-full h-full `} onClick={() => {setCurrentTab(nav.name); localStorage.setItem("currentTab", nav.name); setDropdown(prev => !prev)}}>{nav.name}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        }
    </div>
}

export default Navbar;