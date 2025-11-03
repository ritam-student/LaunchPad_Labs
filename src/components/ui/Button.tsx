

function Button({text}: {text: string}){
    return <div className="p-[2px] shadow-xl shadow-[#1E71E526] bg-gradient-to-b from-[#9CC6FF] to-[#00D0FF] rounded-[31px] ">
        <div className="cursor-pointer px-4 py-2 rounded-[31px] text-[12px] md:text-sm text-white font-semibold w-auto h-auto bg-gradient-to-t from-[#0F93FF] to-[#003BB9] hover:scale-105 transition-all duration-300 ease-in-out ">
            {text}
        </div>
    </div>
}

export default Button;