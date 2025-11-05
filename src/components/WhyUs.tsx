import Button2 from "./ui/Button2";

function WhyUs() {
    return <div className="px-6 md:px-12 lg:px-24 py-24">
        <div className="h-auto w-full flex items-center justify-center">
            <Button2 text="Why LaunchPad Labs" />
        </div>
        <div className="h-auto w-full pt-6 flex items-center justify-center">
            <h2 className="text-[#202020] text-[28px] px-6 font-semibold leading-[31px] text-center ">Built faster Built smarter Built by founders</h2>
        </div>
        <div className="h-auto w-full pt-4 pb-16 flex items-center justify-center px-14 text-center">
            <p className="text-[16px] w-auto max-w-[577px] leading-[24px] md:leading-[31px] ">MVPs built faster, smarter, and better - by founders who’ve done it before.We turn your idea into a launch-ready product in just 2 weeks, using modern tech and proven systems trusted by 50+ funded startups.</p>
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-2">
            <div>
                <img src="/whyus_img1.png" alt="" />
            </div>
            <div>
                <img src="/whyus_img2.png" alt="" />
            </div>
            <div>
                <img src="/whyus_img3.png" alt="" />
            </div>
        </div>
        
    </div>
}

export default WhyUs;