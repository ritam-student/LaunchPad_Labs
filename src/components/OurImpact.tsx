import Button2 from "./ui/Button2";

function OurImpact(){
    return <div className="px-4 md:px-8 lg:px-14 py-24">
        <div className="h-auto w-full pt-4 md:pt-6 lg:pt-8 flex items-center justify-center">
            <Button2 text="Our Impact" />
        </div>
        <div className="h-auto w-full pt-6 flex items-center justify-center">
            <h2 className="text-[#202020] text-[28px] px-6 font-semibold leading-[31px] text-center ">Fast launches Real results</h2>
        </div>
        
        <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mt-[86px] ">
            <div>
                <img src="/Impact_img1.png" alt="" />
            </div>
            <div>
                <img src="/Impact_img2.png" alt="" />
            </div>
            <div>
                <img src="/Impact_img3.png" alt="" />
            </div>
        </div>
        
    </div>
}

export default OurImpact;