import Button from "./ui/Button";

function Banner() {
    return <div className="bg-[#FFFFFF] py-6 md:py-12 lg:py-24 h-auto w-full flex items-center justify-center flex-col ">
        <h2 style={{letterSpacing: '0%'}} className="text-center leading-[24px] md:leading-[40px] text-[#202020] text-[18px] md:text-[28px] font-semibold px-4 ">Ready to launch your next big idea?</h2>
        <p style={{letterSpacing: '0%'}} className="text-[#525252] leading-[20px] md:leading-[31px] text-[12px] md:text-[16px] font-medium mb-5 px-10 text-center">Book a consultation call and let's turn your vision into reality</p>
        <Button text="Book My Free MVP Call" link="/book-a-call" />
        <div className="my-16 w-[80%] md:w-[70%] lg:w-[60%] h-auto relative flex items-center justify-center ">
            <img src="/banner_logo.png" alt="banner" className="w-full h-full object-contain" />
            <div className="absolute -right-[10%] top-[15%] h-auto w-[26%] overflow-hidden flex items-center justify-center ">
                <img src="/banner_logo_1.png" alt="banner-1" className="h-full w-full object-contain" />
            </div>
        </div>
    </div>
}

export default Banner;