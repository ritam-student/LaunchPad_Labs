import Button2 from "./ui/Button2";

function Founder() {
  return <div className="px-6 md:px-12 lg:px-24 py-24 bg-[#F3F7F8] ">
        <div className="h-auto w-full pt-4 md:pt-6 lg:pt-8 flex items-center justify-center">
            <Button2 text="Our Founder" />
        </div>
        
        <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-2 mt-12 ">
            <div className=" py-4 px-4 lg:py-8 lg:px-8 h-auto w-auto ">
                <h3 className="  text-[24px] font-semibold leading-[38px] text-[#202020] ">Meet  <span className="text-[#0051FF] italic text-[26px] lg:text-[39px] leading-[38px] font-[400] ">Harsh</span> founder of LaunchPad Labs</h3>
                <p className="text-[#525252] font-medium text-[16px] leading-[38px]  ">Your Strategic Tech Partner for Building MVPs That Scale</p>
                <div className=" h-[300px] w-[90vw] mt-10 md:mt-1 md:h-[450px] md:w-[500px] lg:h-[400px] lg:w-[450px] relative">
                    <div className="bg-[#FFFFFF] rounded-[20px] px-6 py-8 w-[85%] md:w-[80%] absolute bottom-0 left-0 z-10 block shadow-xl shadow-[#0000001A] ">
                        <div className=" w-full h-full relative">
                            <p className="text-[#000000] text-[15px] italic font-[500] leading-[30px] ">Most startups don't fail from bad ideas - they fail because they launch too slow.With LaunchPad Labs, you can go live in just 2 weeks.</p>
                            <div className=" absolute -top-[58%] lg:-top-[44%] -left-1 px-3 py-1 bg-[#CAE3FF] rounded-[6px] shadow-lg shadow-[#0000001C] ">
                                <p className="text-[#000000] font-medium text-[16px] leading-[30px]  ">A Note from our Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-10  right-0 md:right-5 h-[95%] md:h-[75%] max-w-[380px]  w-[50%] bg-[#FFFFFF] rounded-[20px] "></div>
                </div>
            </div>
            <div className="w-auto h-auto bg-[#FFFFFF] p-[0.5px] rounded-[20px] shadow-lg shadow-[#0000001A] ">
                <div className="h-auto w-auto relative flex items-center justify-center  ">
                    <img src="/Founder_img1.png" alt="" className="h-full w-full object-contain"/>
                    <div className="absolute rotate-[22deg] z-10 bg-[#0066FF3D] h-[26px] w-[25%] right-0 top-5 "></div>
                </div>
            </div>
        </div>
        
    </div>
}

export default Founder;