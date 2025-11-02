import "./button.css";

function Button({text}: {text: string}){
    return <div className="button rounded-[31px] px-2 py-1 text-[12px] md:px-4 md:py-2 md:text-sm text-white cursor-pointer font-semibold  ">
        {text}
    </div>
}

export default Button;