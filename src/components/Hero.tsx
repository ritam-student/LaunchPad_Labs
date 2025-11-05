import "./hero.css";

function Hero() {
    return <div className="h-auto w-full bg-[#F3F7F8] relative ">
        <div className="relative pt-10 pb-44 px-4 md:px-6 lg:px-8  flex items-center justify-center">
            <img src="/HeroSection.png" alt="hero image" />
            <div className="absolute bottom-20 w-full   pb-[14px]  lg:pb-[20px] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center gap-6">
                <p className="text-[#555555] bg-[#F3F7F8] text-[10px] md:text-[12px] lg:text-[15px] font-bold leading-[100%] ">Trusted by Founders from</p>
                <div className="h-auto w-[90%] md:w-[80%] lg:w-[60%] overflow-x-auto wrapper flex items-center justify-center gap-6 md:gap-8 lg:gap-12 mt-8">
                    <div className="flex items-center justify-between gap-6 md:gap-8  lg:gap-12 content">
                        <div className="block">
                            <div className=" w-[115px] h-[28px] flex items-center justify-center overflow-hidden">
                                <img src="/Qualcomm-Logo 1.png" alt="" className="h-full w-full object-contain" />
                            </div>
                        </div>
                        <div className="block">
                            <div className=" w-[115px] h-[28px] flex items-center justify-center overflow-hidden" >
                                <img src="/Walmart_logo_(2008) 1.png" alt="" className="h-full w-full object-contain" />
                            </div>
                        </div>
                        <div className="block">
                            <div className=" w-[115px] h-[28px] flex items-center justify-center overflow-hidden">
                                <img src="/Amazon_logo 1.png" alt="" className="h-full w-full object-contain" />
                            </div>
                        </div>
                        <div className="block">
                            <div className=" w-[115px] h-[28px] flex items-center justify-center overflow-hidden">
                                <img src="/Adobe_Corporate_logo 1.png" alt="" className="h-full w-full object-contain" />
                            </div>
                        </div>
                        <div className="block">
                            <div className=" w-[115px] h-[28px] flex items-center justify-center overflow-hidden">
                                <img src="/Deloitte_old_blue_logo 1.png" alt="" className="h-full w-full object-contain" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-6 md:gap-8  lg:gap-12 content">
                        <div className="block">
                            <div className=" w-[115px] h-[28px] flex items-center justify-center overflow-hidden">
                                <img src="/Qualcomm-Logo 1.png" alt="" className="h-full w-full object-contain" />
                            </div>
                        </div>
                        <div className="block">
                            <div className=" w-[115px] h-[28px] flex items-center justify-center overflow-hidden" >
                                <img src="/Walmart_logo_(2008) 1.png" alt="" className="h-full w-full object-contain" />
                            </div>
                        </div>
                        <div className="block">
                            <div className=" w-[115px] h-[28px] flex items-center justify-center overflow-hidden">
                                <img src="/Amazon_logo 1.png" alt="" className="h-full w-full object-contain" />
                            </div>
                        </div>
                        <div className="block">
                            <div className=" w-[115px] h-[28px] flex items-center justify-center overflow-hidden">
                                <img src="/Adobe_Corporate_logo 1.png" alt="" className="h-full w-full object-contain" />
                            </div>
                        </div>
                        <div className="block">
                            <div className=" w-[115px] h-[28px] flex items-center justify-center overflow-hidden">
                                <img src="/Deloitte_old_blue_logo 1.png" alt="" className="h-full w-full object-contain" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-6 md:gap-8  lg:gap-12 content">
                        <div className="block">
                            <div className=" w-[115px] h-[28px] flex items-center justify-center overflow-hidden">
                                <img src="/Qualcomm-Logo 1.png" alt="" className="h-full w-full object-contain" />
                            </div>
                        </div>
                        <div className="block">
                            <div className=" w-[115px] h-[28px] flex items-center justify-center overflow-hidden" >
                                <img src="/Walmart_logo_(2008) 1.png" alt="" className="h-full w-full object-contain" />
                            </div>
                        </div>
                        <div className="block">
                            <div className=" w-[115px] h-[28px] flex items-center justify-center overflow-hidden">
                                <img src="/Amazon_logo 1.png" alt="" className="h-full w-full object-contain" />
                            </div>
                        </div>
                        <div className="block">
                            <div className=" w-[115px] h-[28px] flex items-center justify-center overflow-hidden">
                                <img src="/Adobe_Corporate_logo 1.png" alt="" className="h-full w-full object-contain" />
                            </div>
                        </div>
                        <div className="block">
                            <div className=" w-[115px] h-[28px] flex items-center justify-center overflow-hidden">
                                <img src="/Deloitte_old_blue_logo 1.png" alt="" className="h-full w-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" h-auto w-[37%] absolute top-[45%] lg:top-[55%] left-[50%] translate-x-[-50%] md:top-[50%] md:translate-y-[-50%] translate-y-[-45%] lg:translate-y-[-55%] pt-8 flex items-center justify-center ">
                <img src="/Book-a-call.png" alt="" />
            </div>
        </div>
        
    </div>
}

export default Hero;