
export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "I've been using ClassCube for my school, and it's been a game-changer. The platform allows us to create engaging courses, and our students love the interactive content.",
            author: "Mr Andrew Peters",
            id: 1
        },
        {
            quote: "Thanks to ClassCube Enterprise, staff training, and onboarding have been streamlined, and our operations have become more efficient than ever.",
            author: "Mr Adeyemi",
            id: 2
        },
        {
            quote: "The flexibility ClassCube Enterprise gives our organization to tailor the platform to our unique requirements has been a significant asset to our operations.",
            author: "Mrs Jennifer",
            id: 3
        },
        {
            quote: "The platform has given us the power to create and manage training materials seamlessly, and for this, our team is always up-to-date with the latest procedures and practices.",
            author: "Sonia A.",
            id: 4
        },
        {
            quote: "As an educator, ClassCube Pro has been a lifesaver. I can easily create and share my courses with students worldwide.",
            author: "James Roberts",
            id: 5
        },
        {
            quote: "The transparent revenue-sharing model is a game-changer for content creators like me. Highly recommend!",
            author: "Mr John",
            id: 6
        }
    ];

    return (
        <div className="px-6 md:px-10 lg:px-30 lg:py-6">
            <div>
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
                    {/* Title */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#0D3060] leading-tight">
                            Modern Schools and Businesses<br />
                            already use Classcube
                        </h2>
                    </div>
                </div>

                {/* Testimonials Grid - 2 rows x 3 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-[#F7F9FB] rounded-2xl py-[22px] px-[35px] hover:shadow-sm transition-all duration-300 flex flex-col"
                        >
                            {/* Quote Icon */}
                            <div className="mb-4">
                                <img src="/SVG.png" alt="" className="w-[24px] h-[24px]" />
                            </div>

                            {/* Quote Text */}
                            <div className="mb-6">
                                <p className="text-[#7A88A0] font-[500] text-sm">
                                    {testimonial.quote}
                                </p>
                            </div>

                            {/* Author */}
                            <div className="mt-auto">
                                <p className="font-semibold text-[#0D3060] text-[12px]">
                                    {testimonial.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}