

const HeroSection = () => {
    return (
        <section className="bg-white lg:py-16">
            <div className="px-6 md:px-10 lg:px-30 lg:py-6 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-40">
                {/* Left Column */}
                <div className="space-y-6">
                    <h1 className="text-4xl lg:text-[48px] font-bold text-[#0D3060] leading-tight lg:w-[482px] lg:h-[189px]">
                        Smart Digital <br />
                        Learning for Schools <br />
                        and Businesses
                    </h1>
                    <p className="text-[16px] font-normal text-[#7A88A0]">
                        An online learning management system with features that help <br /> institutions and businesses manage online classes using videos, <br /> audio, documents, or live classes.
                    </p>
                    <button className="bg-[#0C78F1] text-white w-full h-[40px] lg:w-[139px] lg:h-[44px] rounded-sm hover:bg-blue-700 text-sm font-medium">
                        Get Started
                    </button>
                </div>

                {/* Right Column with Dotted Background */}
                {/* <div
                    className="relative flex justify-center items-center"
                    style={{
                        backgroundImage: "url('/dots.png')", // replace with your image path
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <img
                        src="/hero-img.png" // replace with your actual image path
                        alt="Online Learning"
                    // width={688}
                    // height={500}
                    // className="lg:w-[688px] lg:h-[480px]"
                    />
                </div> */}
                <div className="relative">
                    <img src="/hero-img.png" alt="Online Learning" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
