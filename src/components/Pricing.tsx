import Button2 from "./ui/Button2";

function Pricing() {
    return <div className="px-6 md:px-12 lg:px-24 py-24 bg-[#F3F7F8] ">
        <div className="h-auto w-full flex items-center justify-center">
            <Button2 text="Pricing" />
        </div>
        <div className="h-auto w-full pt-6 flex items-center justify-center">
            <h2 className="text-[#202020] text-[28px] font-semibold leading-[31px] text-center px-6 ">Two ways to launch fast - and keep growing even faster</h2>
        </div>
        <div className="h-auto w-full pt-4 pb-16 flex items-center justify-center px-14 text-center">
            <p className="text-[16px] text-[#525252] leading-[24px] md:leading-[31px] ">Choose the perfect package to launch and grow your startup</p>
        </div>
        <div className="w-full h-auto mt-1 lg:mt-7 flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-2">
            <div>
                <img src="/pricing_img2.png" alt="" />
            </div>
            <div className="h-auto w-auto relative z-20 flex items-center justify-center  ">
                <img src="/pricing_img1.png" alt="" className="h-full z-20 w-full object-contain"/>
                <div className="absolute -top-10 right-5 rounded-tl-[61px] rounded-tr-[19px] rounded-br-[35px] rounded-bl-[35px] text-[#FFFFFF] text-[15px] font-semibold leading-[32px] flex justify-center pt-2 bg-gradient-to-b from-[#0660D7] to-[#0D88F6] h-[90%] w-[60%] bg-violet-500 z-10 ">Most Popular</div>
            </div>
        </div>
        
    </div>
}

export default Pricing;
