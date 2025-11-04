import Approach from "./ui/Approach";
import Button from "./ui/Button";
import Button2 from "./ui/Button2";

function OurApproach() {

    const wrong_content = [
        "Months of Planning",
        "Too Many Cooks",
        "Design-Then-Build Bottlenecks",
        "Huge Upfront Fees",
        "Complex Tech Steup"
    ];

    const correct_content = [
        "2-Week Launch System",
        "Focused Founder-Led Pods",
        "Real-Time Prototyping",
        "Flat $4,997 Transparent Pricing",
        "Modern, Scalable Stack"
    ];

    return <section id="howitworks" className="px-4 md:px-8 lg:px-14 py-24 bg-[#F3F7F8] ">
        <div className="h-auto w-full pt-4 md:pt-6 lg:pt-8 flex items-center justify-center">
            <Button2 text="Our Approach" />
        </div>
        <div className="h-auto w-full pt-6 flex items-center justify-center">
            <h2 className="text-[#202020] text-[24px] font-semibold leading-[28px] lg:leading-[38px]  text-center">Why founders launch faster with LaunchPad labs</h2>
        </div>
        <div className="w-full h-auto flex items-center justify-center gap-6 flex-col lg:flex-row pt-14 ">
            <div>
                <Approach tic={false} content={wrong_content} heading="Traditional Development" />
            </div>
            <div>
                <Approach tic={true} content={correct_content} heading="LaunchPad Labs Approach" />
            </div>
        </div>
        <div className="w-full h-auto mt-16 flex items-center justify-center">
            <Button text="Book My Free MVP Call" link="/book-a-call" />
        </div>
    </section>
}

export default OurApproach;