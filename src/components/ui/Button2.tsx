import "./button2.css";

function Button2({text}: {text: string}){
    return <button className="rounded-[83px] bg-[#F2F2F2] px-1 py-1 button  w-auto h-auto flex items-center justify-center  cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="bg-white rounded-[83px] flex items-center justify-center gap-2 px-4 py-2">
            <div>
                <img src="/button_circle.png" alt="circle" />
            </div>
            <p className="text-black text-[14px] font-medium leading-[100%] ">{text}</p>
        </div>
    </button>
}

export default Button2;