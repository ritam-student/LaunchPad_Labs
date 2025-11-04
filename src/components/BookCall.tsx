import { useState } from "react";
import Button2 from "./ui/Button2";

function BookCall() {
    const [currentOpenBox, setCurrentOpenBox] = useState(-1);

    const questions: { question: string; answer: string; }[] = [
        {
            question: "How long does it take to launch my MVP with LaunchPad Labs?" , 
            answer: "We specialize in speed. Most MVPs are launched in as little as 2-4 weeks, depending on complexity."
        },
        {
            question: "What exactly is included in the MVP package?",
            answer: "Our MVP development services start at $25,000, but the final cost depends on your specific requirements and features."
        },
        {
            question: "What exactly is included in the MVP package?",
            answer: "Our MVP development services start at $25,000, but the final cost depends on your specific requirements and features."
        },
        {
            question: "Do I need to have all my ideas finalized before starting?",
            answer: "Not at all! We work closely with you to refine and develop your ideas throughout the process."
        },
        {
            question: "How involved will I be during the development process?",
            answer: "We believe in transparent communication and collaboration. You'll be involved at every stage, from initial planning to final launch."
        },
        {
            question: "Can I scale my MVP into a full product later?",
            answer: "Absolutely! Our MVPs are built with scalability in mind, allowing for easy expansion and additional features as your business grows."
        }
    ];

  return <div className="h-auto w-full bg-[#F3F7F8] py-20 px-6 md:px-10 lg:px-12">
    <div className="h-auto w-auto inline-block ml-4 md:ml-20 lg:ml-3">
        <Button2 text='FAQ' />
    </div>
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full h-auto">
        <div className="w-[90%] md:w-[80%] lg:w-[65%] h-auto  mt-10 ">
            <h2 className="text-[#202020] text-[28px] font-semibold leading-[28px] py-2 ">Got Questions? We've Got Answers</h2>
            <p className="text-[#525252] text-[16px] font-medium leading-[31px]  ">Simple explanations for your most important questions</p>
            <div className="flex flex-col justify-center gap-2 mt-12">
                {
                    questions.map((item, index) => (
                        <DoubtBox key={index} question={item.question} answer={item.answer} index={index} open={currentOpenBox === index ? true : false} setCurrentOpenBox={setCurrentOpenBox} />
                    ))
                }
            </div>
        </div>
        <div className="w-[90%] md:w-[50%] lg:w-[32%] h-auto  mt-10 bg-white rounded-[17px] shadow-lg shadow-[#0000000F] px-6 py-6 ">
            <h5 className="text-[#8C8C8C] text-[18px] font-semibold leading-[100%] py-2 ">Still not sure?</h5>
            <h3 className="text-[#000000] text-[20px] font-semibold leading-[100%] ">Book a free call.</h3>
            <p className="py-5 text-[#000000] text-[14px] font-[400] leading-[20px] ">Learn more about how we work and how we can help you and your startup.</p>
            <div className="p-[2px] shadow-xl shadow-[#1E71E526] bg-gradient-to-b from-[#9CC6FF] to-[#00D0FF] rounded-[31px] inline-block">
                <div className="cursor-pointer px-4 py-2 rounded-[31px] text-[12px] md:text-sm text-white font-semibold w-auto h-auto bg-gradient-to-t from-[#0F93FF] to-[#003BB9] hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-1">
                    <div>
                        <img src="/public/ic_round-call-end.png" alt="" />
                    </div>
                    <p className="text-[#FFFFFF] text-[16px] font-semibold leading-[100%] pr-2">Book A Call</p>
                </div>
            </div>
        </div>
    </div>
  </div>
}

function DoubtBox({question, answer, index, open, setCurrentOpenBox}: {question: string; answer: string; index: number; open: boolean; setCurrentOpenBox: (index: number) => void;}) {
    return <div className="bg-white rounded-[17px] px-8 py-2 shadow-lg shadow-[#0000000F] ">
        <div className="w-full h-auto  py-4 flex items-center justify-between gap-10">
            <h4>{question}</h4>
            <div className="cursor-pointer">
                {
                    open ?
                    <img src="/heroicons_minus-solid.png" alt="" onClick={() => setCurrentOpenBox(-1)} />
                    :
                    <img src="/quill_add.png" alt="" onClick={() => setCurrentOpenBox(index)} />
                }
            </div>
        </div>
        {
            open &&
            <div className="px-2 pt-2 pb-6 border-dashed border-[1px] border-[#E3E3E3] rounded-[10px] mb-6 ">
                <p className="text-[#474545] text-[12px] md:text-[14px] font-[400] leading-[28px] ">{answer}</p>
            </div>
        }
    </div>
}

export default BookCall;