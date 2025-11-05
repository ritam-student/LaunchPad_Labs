
import Button2 from "./ui/Button2";
import Review from "./ui/Review";

function Testimonials(){
    return <section className="relative w-full h-auto ">
        <div className="w-full h-auto flex items-center justify-center absolute top-10 lg:top-14 z-20 ">
            <Button2 text="Testimonials" />
        </div>
        <div className="relative w-full h-auto flex items-center justify-center lg:justify-between gap-6 flex-col lg:flex-row px-4 md:px-6 lg:px-20 py-32 lg:py-24 ">
            {/* left part */}
            <div className="h-auto w-full lg:w-1/3 flex items-center justify-center flex-col ">
                <div className="h-auto w-full flex items-center justify-center px-14 md:px-0">
                    <p className="text-[#202020] text-[24px] font-semibold leading-[40px] lg:pl-4">
                        What Founders Are Saying About LaunchPad Labs
                    </p>
                </div>
                <div className="h-auto w-[85%] md:w-[65%] lg:w-full flex items-center justify-center overflow-hidden py-5">
                    <img src="/Group.png" alt="group logo" className="h-full w-full object-contain"/>
                </div>
            </div>
            {/** right part  **/}
            <div className="relative overflow-hidden h-auto w-full lg:w-2/3 flex flex-col lg:flex-row items-center justify-center ">
                <div className="  relative  h-auto  flex flex-col lg:flex-row items-center justify-center  gap-3  px-4 md:px-6 lg:px-12 py-5">
                    <div className="flex items-center flex-row justify-between gap-3 lg:flex-col ">
                        <Review />
                        <Review />
                        <Review />
                    </div>
                    <div className="flex items-center justify-between gap-3 flex-row lg:flex-col">
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                    </div>
                </div>
                <div className="h-[25%] w-[50%] rounded-bl-[50%] bg-white blur-[30px] z-10 absolute -right-10 -top-4 "></div>
                <div className="h-[25%] w-[53%] rounded-bl-[50%] bg-white blur-[35px] z-10 absolute -right-10 -bottom-4 "></div>
                <div className="h-[25%] w-[50%] rounded-bl-[50%] bg-white blur-[29px] z-10 absolute -left-10 -top-4 "></div>
                <div className="h-[25%] w-[50%] rounded-bl-[50%] bg-white blur-[28px] z-10 absolute -left-10 -bottom-4 "></div>
            </div>
        </div>
    </section>
}

export default Testimonials;