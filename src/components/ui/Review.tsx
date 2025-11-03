
function Review(){
    return <div className="border-dashed border-2 min-w-[280px] rounded-md border-[#ACD8FF] max-w-[300px] h-auto px-3 py-3 shadow-lg shadow-[#62B5FF91]">
        <div className="flex items-center justify-start gap-2 mb-3">
            <div className=" bg-[#D9D9D9] h-10 w-10 rounded-[100%] "></div>
            <div className="">
                <div className="text-black  text-[15px] font-semibold  flex items-center justify-start gap-1">
                    <h4>Sarah Johnson </h4>
                    <span ><img src="/tic.png" alt="" /></span>
                </div>
                <p className="text-[#777777]  text-[13px] font-[400] ">Software Developer</p>
            </div>
        </div>

        <div>
            <p className="text-[#1B1B1B] leading-[30px] text-[14px] font-[500] "><i>“Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.”</i></p>
        </div>
        <div className="h-auto w-auto flex items-center  overflow-hidden  pt-2">
            <img src="/stars.png" alt="rating" className=" object-contain" />
        </div>
    </div>
}

export default Review;