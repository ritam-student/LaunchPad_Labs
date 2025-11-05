import "./ui/footer.css";

function Footer() {

    const services: string[] = [
        "MVP Development",
        "UI/UX Design",
        "Web Development",
        "Mobile Apps",
        "Consulting"
    ];

    const about:string[] = [
        "Our Process",
        "How We Work",
        "Contact",
        "FAQs",
        "Contact"
    ];

    const portfolio:string[] = [
        "Case Studies",
        "Success Stories",
        "MVP Showcase",
        "Testimonials"
    ];

    const legal:string[] = [
        "Privacy Policy",
        "Terms of Services",
        "Cookie Policy"
    ];

    return <div className=" bg-[#FFFFFF] w-full h-auto px-6 md:px-12 lg:px-24 py-3 md:py-4 flex flex-col items-center justify-center gap-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full h-auto gap-4 md:gap-8  py-3 md:py-[20px]">
            <div>
                <div className="relative overflow-hidden h-[50px] scale-110 md:scale-100 w-[56%] md:w-[80%] lg:w-[75%] flex items-center justify-center">
                    <img src="Logo.png" alt="Logo" className="object-contain" />
                </div>
                <p style={{letterSpacing: '0%'}} className="md:pl-3 text-[#525252] leading-[21px] md:leading-[31px] font-[500] text-sm py-3 ">We build high-quality MVPs to transform your ideas into reality.</p>
                <div className="flex items-center justify-start gap-1 md:gap-3 md:mt-2">
                    <img src="/x.png" alt="x" />
                    <img src="/linkedin.png" alt="in" />
                </div>
            </div>
            <div className="lg:ml-3">
                <h3 style={{lineHeight: '31px', letterSpacing: '0%'}} className="text-black font-semibold text-[17px] pt-4 md:pt-2 pb-3 ">Services</h3>
                <ul className="">
                    {
                        services.map((service, index) => (
                            <li style={{lineHeight: '31px'}} className="text-[#616161] text-[14px] font-[500] " key={index}>{service}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3 style={{lineHeight: '31px', letterSpacing: '0%'}} className="text-black font-semibold text-[17px] pt-4 md:pt-2 pb-3 ">About</h3>
                <ul className="">
                    {
                        about.map((item, index) => (
                            <li style={{lineHeight: '31px'}} className="text-[#616161] text-[14px] font-[500] " key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3 style={{lineHeight: '31px', letterSpacing: '0%'}} className="text-black font-semibold text-[17px] pt-4 md:pt-2 pb-3 ">Portfolio</h3>
                <ul className="">
                    {
                        portfolio.map((item, index) => (
                            <li style={{lineHeight: '31px'}} className="text-[#616161] text-[14px] font-[500] " key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3 style={{lineHeight: '31px', letterSpacing: '0%'}} className="text-black font-semibold text-[17px] pt-4 md:pt-2 pb-3 ">Legal</h3>
                <ul className="">
                    {
                        legal.map((item, index) => (
                            <li style={{lineHeight: '31px'}} className="text-[#616161] text-[14px] font-[500] " key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 ">
            <div className=" w-full h-auto overflow-hidden relative flex items-center justify-center">
                <img src="/LaunchPadLabs.png" alt="Logo" className="w-full h-auto object-contain"/>
            </div>
            <span className="border-t-2 footer-border text-[#818181] text-[13px] font-[500] px-4 md:px-10 lg:px-16 text-center ">© 2025 LinkVerse. All rights reserved.</span>
        </div>
    </div>
}

export default Footer;