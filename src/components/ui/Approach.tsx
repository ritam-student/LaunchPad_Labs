function Approach({tic, content, heading}: {tic: boolean, content: string[], heading: string}){
    return <div className="border-2 border-dashed  h-auto w-[302px] md:w-[460px] px-5 py-8 lg:px-10 border-[#FFACAC] rounded-[20px] flex items-center  flex-col ">
        <div className="flex items-center justify-center">
            <div className="bg-[#FFFFFF] rounded-[68px] px-[34px] py-[4px] text-[#242424] text-[16px] font-semibold leading-[31px] shadow-md shadow-[#0000001F] blur-[12%] ">{heading}</div>
        </div>
        <div className="pt-6 w-full h-auto ">
            {
                content.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-start gap-4 w-full h-auto ">
                        <div className="h-[38px] w-[35px] flex items-center justify-center overflow-hidden ">
                            {
                                tic ?
                                <img src="/Approach_tic.png" alt=""  className="w-full h-full object-contain "/>
                                :
                                <img src="/Approach_x.png" alt=""  className="w-full h-full object-contain "/>
                            }
                        </div> 
                        <p className="text-[#000000] text-[16px] font-semibold leading-[31px]  ">{item}</p>
                    </div>
                ))
            }
        </div>
    </div>
}

export default Approach;