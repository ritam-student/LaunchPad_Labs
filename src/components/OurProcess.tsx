import Button2 from "./ui/Button2";

function OurProcess() {
    return <div className="px-4 md:px-8 lg:px-14 py-24">
        <div className="h-auto w-full pt-4 md:pt-6 lg:pt-8 flex items-center justify-center">
            <Button2 text="Our Process" />
        </div>
        <div className="h-auto w-full pt-6 flex items-center justify-center">
            <h2 className="text-[#202020] text-[28px] font-semibold leading-[31px] ">The LaunchPad Process</h2>
        </div>
        <div className="h-auto w-full pt-4 pb-16 flex items-center justify-center px-14 text-center">
            <p className="text-[16px] leading-[24px] md:leading-[31px] ">A transparent, founder-friendly journey  from idea to live MVP in just <b>2 weeks.</b></p>
        </div>
        <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-2">
            <div>
                <img src="/process_img1.png" alt="" />
            </div>
            <div>
                <img src="/process_img2.png" alt="" />
            </div>
            <div>
                <img src="/process_img3.png" alt="" />
            </div>
        </div>
        <div className="w-full h-auto flex items-center justify-center gap-2 flex-col lg:flex-row pt-6">
            <div>
                <img src="/process_img4.png" alt="" />
            </div>
            <div>
                <img src="/process_img5.png" alt="" />
            </div>
        </div>
    </div>
}

export default OurProcess;