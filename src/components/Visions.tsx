import { Link, useNavigate } from "react-router-dom";


function Visions() {
    const navigate = useNavigate();

    function navigateToCall() {
        navigate('/book-a-call');
    }

    return <div className="bg-[#F3F7F8] h-auto w-full py-16 px-6 md:px-12 lg:px-24 ">
        <div className="h-auto w-full flex items-center flex-col md:flex-row justify-center md:justify-between gap-6 ">
            <div>
                <h2 className="font-semibold text-[48px] leading-[51px]  ">From vision to <span className="font-semibold text-[48px] leading-[51px] bg-gradient-to-r from-[#1E3AEB] to-[#19AFFF] text-transparent bg-clip-text">Launchpad</span></h2>
                <p className="text-[#686868] font-[500] text-[17px] leading-[31px] mt-6">Explore some of the MVPs and products we've brought to life</p>
            </div>
            <div className="relative h-auto w-full md:w-auto flex items-center justify-center ">
                <div className="relative h-auto w-auto ">
                    <img src="/visions_img1.png" alt="" className="object-contain" />
                    <div onClick={navigateToCall} className="absolute top-[50%] -left-[60%] md:-left-[80%] translate-x-[80%] translate-y-[-50%] ">
                        <div  className="p-[2px] shadow-xl shadow-[#1E71E526] bg-gradient-to-b from-[#9CC6FF] to-[#00D0FF] rounded-[31px] ">
                            <div className="cursor-pointer px-4 py-2 rounded-[31px] text-[12px] md:text-sm text-white font-semibold w-auto h-auto bg-gradient-to-t from-[#0F93FF] to-[#003BB9] hover:scale-105 transition-all duration-300 ease-in-out ">
                                Book My Free MVP Call
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-[#FFFFFF] shadow-lg shadow-[#0000001A] rounded-[16px] px-2 py-4 flex items-center justify-center gap-4 md:justify-between flex-col md:flex-row mt-20">
            <div className="p-6 py-8 w-[90%] md:w-[55%] ">
                <h2 className="text-[#404040] text-[26px] font-semibold leading-[31px]  ">FitAI</h2>
                <p className="text-[#686868] font-[500] text-[15px] leading-[31px] my-5 ">FitAI brings personalized, AI-powered home workouts to your fingertips — tailored plans, real-time guidance, and progress tracking to help you stay fit anytime, anywhere.</p>
                <div className="flex items-center justify-start gap-3 my-2">
                    <div className="bg-[#E1EFF9] rounded-[32px] px-3 md:px-4 py-1 md:py-2 text-[#000000] text-[11px] md:text-[14px] font-medium leading-[31px] ">UI/UX</div>
                    <div className="bg-[#E1EFF9] rounded-[32px] px-3 md:px-4 py-1 md:py-2 text-[#000000] text-[11px] md:text-[14px] font-medium leading-[31px] ">Web Development</div>
                    <div className="bg-[#E1EFF9] rounded-[32px] px-3 md:px-4 py-1 md:py-2 text-[#000000] text-[11px] md:text-[14px] font-medium leading-[31px] ">Mobile App</div>
                </div>
                <Link to='/case-study' className="bg-gradient-to-r from-[#9CC6FF] to-[#00D0FF] rounded-[31px] p-[2px] inline-block cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out mt-20">
                    <div className="bg-white rounded-[31px] flex items-center justify-center p-2 h-auto w-full gap-1 ">
                        <p className=" pl-2">View Case Study</p>
                        <div>
                            <img src="/clarity_arrow-line.png" alt="" />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="bg-[#FFFFFF] w-[90%] md:w-[45%] h-[310px] shadow-lg shadow-[#0000001A] rounded-[16px]  "></div>
        </div>

        <div className="bg-[#FFFFFF] shadow-lg shadow-[#0000001A] rounded-[16px] px-2 py-4 flex items-center justify-center gap-4 md:justify-between flex-col md:flex-row mt-8">
            <div className="p-6 py-8 w-[90%] md:w-[55%] ">
                <h2 className="text-[#404040] text-[26px] font-semibold leading-[31px]  ">FitAI</h2>
                <p className="text-[#686868] font-[500] text-[15px] leading-[31px] my-5 ">FitAI brings personalized, AI-powered home workouts to your fingertips — tailored plans, real-time guidance, and progress tracking to help you stay fit anytime, anywhere.</p>
                <div className="flex items-center justify-start gap-3 my-2">
                    <div className="bg-[#E1EFF9] rounded-[32px] px-3 md:px-4 py-1 md:py-2 text-[#000000] text-[11px] md:text-[14px] font-medium leading-[31px] ">UI/UX</div>
                    <div className="bg-[#E1EFF9] rounded-[32px] px-3 md:px-4 py-1 md:py-2 text-[#000000] text-[11px] md:text-[14px] font-medium leading-[31px] ">Web Development</div>
                    <div className="bg-[#E1EFF9] rounded-[32px] px-3 md:px-4 py-1 md:py-2 text-[#000000] text-[11px] md:text-[14px] font-medium leading-[31px] ">Mobile App</div>
                </div>
                <Link to='/case-study' className="bg-gradient-to-r from-[#9CC6FF] to-[#00D0FF] rounded-[31px] p-[2px] inline-block cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out mt-20">
                    <div className="bg-white rounded-[31px] flex items-center justify-center p-2 h-auto w-full gap-1 ">
                        <p className=" pl-2">View Case Study</p>
                        <div>
                            <img src="/clarity_arrow-line.png" alt="" />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="bg-[#FFFFFF] w-[90%] md:w-[45%] h-[310px] shadow-lg shadow-[#0000001A] rounded-[16px]  "></div>
        </div>

        <div className="bg-[#FFFFFF] shadow-lg shadow-[#0000001A] rounded-[16px] px-2 py-4 flex items-center justify-center gap-4 md:justify-between flex-col md:flex-row mt-8 mb-16">
            <div className="p-6 py-8 w-[90%] md:w-[55%] ">
                <h2 className="text-[#404040] text-[26px] font-semibold leading-[31px]  ">FitAI</h2>
                <p className="text-[#686868] font-[500] text-[15px] leading-[31px] my-5 ">FitAI brings personalized, AI-powered home workouts to your fingertips — tailored plans, real-time guidance, and progress tracking to help you stay fit anytime, anywhere.</p>
                <div className="flex items-center justify-start gap-3 my-2">
                    <div className="bg-[#E1EFF9] rounded-[32px] px-3 md:px-4 py-1 md:py-2 text-[#000000] text-[11px] md:text-[14px] font-medium leading-[31px] ">UI/UX</div>
                    <div className="bg-[#E1EFF9] rounded-[32px] px-3 md:px-4 py-1 md:py-2 text-[#000000] text-[11px] md:text-[14px] font-medium leading-[31px] ">Web Development</div>
                    <div className="bg-[#E1EFF9] rounded-[32px] px-3 md:px-4 py-1 md:py-2 text-[#000000] text-[11px] md:text-[14px] font-medium leading-[31px] ">Mobile App</div>
                </div>
                <Link to='/case-study' className="bg-gradient-to-r from-[#9CC6FF] to-[#00D0FF] rounded-[31px] p-[2px] inline-block cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out mt-20">
                    <div className="bg-white rounded-[31px] flex items-center justify-center p-2 h-auto w-full gap-1 ">
                        <p className=" pl-2">View Case Study</p>
                        <div>
                            <img src="/clarity_arrow-line.png" alt="" />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="bg-[#FFFFFF] w-[90%] md:w-[45%] h-[310px] shadow-lg shadow-[#0000001A] rounded-[16px]  "></div>
        </div>
    </div>
}

export default Visions;