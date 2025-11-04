import { Link } from "react-router-dom";


function Button({text, link, setCurrentTab}: {text: string, link: string, setCurrentTab?: (tab: string) => void}) {
    return <Link to={link} onClick={() => setCurrentTab && setCurrentTab(link)} className="p-[2px] shadow-xl shadow-[#1E71E526] bg-gradient-to-b from-[#9CC6FF] to-[#00D0FF] rounded-[31px] ">
        <div className="cursor-pointer px-4 py-2 rounded-[31px] text-[12px] md:text-sm text-white font-semibold w-auto h-auto bg-gradient-to-t from-[#0F93FF] to-[#003BB9] hover:scale-105 transition-all duration-300 ease-in-out ">
            {text}
        </div>
    </Link>
}

export default Button;