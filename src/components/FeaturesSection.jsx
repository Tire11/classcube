
export default function FeaturesSection() {
    const features = [
        {
            image: "/monitor.png",
            title: "Digital Learning",
            description: "Our platform enables a seamless transition from traditional learning to an immersive online experience, accessible anytime, anywhere."
        },
        {
            image: "/video-circle.png",
            title: "Live Classes",
            description: "Interact with both educators and learners in real time through live classes. Whether as a student, professional, or a business."
        },
        {
            image: "/document-text.png",
            title: "Seamless Content Creation",
            description: "ClassCube empowers educators to effortlessly create dynamic lessons with videos, docs, live streams, tests, and more."
        },
        {
            image: "/card-pos.png",
            title: "Easy & Simplified Payment",
            description: "Our straightforward and transparent payment system ensures a hassle-free experience for learners and creators alike."
        }
    ];

    return (
        <section className="py-18">
            <div className="bg-[#F7F9FB] py-16">
                <div className="px-6 md:px-10 lg:px-30 lg:py-6 mx-auto">
                    {/* Header */}
                    <div className="text-center mb-15 lg:mb-5">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#0D3060]">
                            Take a look at our Simple, yet <br /> Powerful Features
                        </h2>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-20">
                        {features.map((feature, index) => {
                            return (
                                <div
                                    key={index}
                                    className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group text-center"
                                >
                                    {/* Icon */}
                                    <div className="mb-4 flex justify-start">
                                        <div className="rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                                            <img src={feature.image} alt="" className="w-7 h-7 lg:w-[24px] lg:h-[24px]" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-[#0D3060] mb-2 sm:mb-4 leading-tight flex justify-start lg:w-[278px] lg:h-[27px]">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-start text-[#7A88A0] leading-relaxed text-xs sm:text-sm lg:w-[278px] lg:h-[84px]">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}