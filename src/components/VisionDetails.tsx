import { useNavigate } from "react-router-dom";


function VisionDetails(){
    const navigate = useNavigate();

    function navigateBack() {
        navigate('/visions');
    }

    return <div className="bg-[#F3F7F8] w-full h-auto pb-28 pt-10 px-6 md:px-12 lg:px-24">
        <button onClick={navigateBack} className=" px-2 py-1 border-dashed border-[2px] rounded-[26px] cursor-pointer ">
            <div className="flex items-center gap-2 ">
                <div>
                    <img src="/left-arrow.png" alt="back" />
                </div>
                <p className="text-[#202020] text-[16px] font-semibold leading-[20px] lg:leading-[31px] border-none  ">Back To Our Work</p>
            </div>
        </button>

        <div className="w-full h-[360px] md:h-[500px] lg:h-[640px] rounded-[20px] bg-gradient-to-l from-[#FFFFFF] to-[#BDD8EB] shadow-lg shadow-[#0000001A] my-8 "></div>
        <div className="flex items-center justify-between w-full h-auto">
            <div>
                <p className="text-[#404040] font-semibold text-[40px] leading-[25px] lg:leading-[31px] ">BillFlow</p>
            </div>
            <div className="p-[2px] rounded-[31px] bg-gradient-to-r from-[#9CC6FF] to-[#00D0FF] h-auto w-auto inline-block ">
                <div className="rounded-[31px] px-2 py-1 flex items-center justify-center gap-1 bg-[#F3F7F8] ">
                    <p className="text-[16px] text-black font-semibold leading-[100%] ">View Project</p>
                    <div className=" w-[22px] h-[22px] flex items-center justify-center overflow-hidden "> 
                        <img src="/clarity_arrow-line.png" alt="arrow" className="h-full w-full object-contain"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full h-auto rounded-[17px] p-[1px] bg-gradient-to-r from-[#BDE6FF] to-[#B8DFFF80]/50  my-8">
            <div className="w-full h-auto px-3 md:px-8 py-5 bg-[#F3F7F8] flex flex-col md:flex-row  md:justify-between gap-6 rounded-[16px] ">
                <div className="block md:inline-block w-auto h-auto ">
                    <h5 className="font-semibold text-[#828282] text-[14px]  ">YEAR</h5>
                    <p className="font-semibold text-black text-[16px] mt-2  ">2025</p>
                </div>
                <div className="inline-block w-auto h-auto">
                    <h5 className="font-semibold text-[#828282] text-[14px]  md:text-center">EXPERTISE</h5>
                    <div className="flex items-center justify-start md:justify-center gap-2 mt-2">
                        <div className=" bg-[#BDE6FF] px-3 py-1 rounded-[31px] text-semibold text-black text-[12px] flex items-center justify-center ">UI/UX</div>
                        <div className=" bg-[#BDE6FF] px-3 py-1 rounded-[31px] text-semibold text-black text-[12px] flex items-center justify-center ">Web Development</div>
                        <div className=" bg-[#BDE6FF] px-3 py-1 rounded-[31px] text-semibold text-black text-[12px] flex items-center justify-center ">Mobile App</div>
                    </div>
                </div>
                <div className="inline-block w-auto h-auto">
                    <h5 className="font-semibold text-[#828282] text-[14px]  ">PLATFORM</h5>
                    <p className="font-semibold text-black text-[16px] mt-2  ">Web App</p>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-auto py-8 px-4 md:px-8 lg:px-12">
            <h3 className=" text-[#828282] text-[44px] font-semibold leading-[100%] text-center my-4 ">Overview</h3>
            <p className=" text-[#000000] text-[19px] font-medium leading-[26px] mg:leading-[44px] h-auto w-[90%] lg:w-[80%] mt-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="w-full h-auto flex items-center flex-col gap-16 my-5">
            <h3 className=" text-[#828282] text-center w-full h-auto text-[44px] font-semibold leading-[100%] ">The Product</h3>
            <div className="h-auto w-full flex flex-col items-center justify-between gap-10  ">
                <div className="h-auto w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
                    <div className="h-[360px] md:h-[450px] lg:h-[500px] w-[80%] md:w-1/2 max-w-[540px] bg-gradient-to-tl from-[#FFFFFF] to-[#BDD8EB] rounded-[20px] shadow-lg shadow-[#0000001A] "></div>
                    <div className="flex flex-col items-center justify-center  h-auto w-[80%] md:w-2/3 md:pl-20">
                        <p className="text-[#000000] text-[24px] font-semibold leading-[44px] self-start ">Hero Section</p>
                        <p className="text-[#000000] text-[19px] font-normal leading-[24px] md:leading-[30px]  mt-4 w-[100%] md:w-[90%] lg:w-[70%] self-start ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                    </div>
                </div>
                <div className="h-auto w-full flex flex-col md:flex-row-reverse items-center justify-center md:justify-between gap-8">
                    <div className="h-[360px] md:h-[450px] lg:h-[500px] w-[80%] md:w-1/2 max-w-[540px] bg-gradient-to-tl from-[#FFFFFF] to-[#BDD8EB] rounded-[20px] shadow-lg shadow-[#0000001A] "></div>
                    <div className="flex flex-col items-center justify-center  h-auto w-[80%] md:w-2/3 md:pl-16">
                        <p className="text-[#000000] text-[24px] font-semibold leading-[44px] self-start ">Hero Section</p>
                        <p className="text-[#000000] text-[19px] font-normal leading-[24px] md:leading-[30px]  mt-4 w-[100%] md:w-[90%] lg:w-[70%] self-start ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                    </div>
                </div>
            </div>
        </div>


    </div>
}

export default VisionDetails;