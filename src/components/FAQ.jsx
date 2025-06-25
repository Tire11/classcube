import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
    {
        question: "What is ClassCube, and how does it work?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates veniam illo, quibusdam nulla quos laborum.",
    },
    {
        question: "How do I know which ClassCube type to sign up for?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates veniam illo, quibusdam nulla quos laborum.",
    },
    {
        question: "Can I collaborate with others on ClassCube?",
        answer: "Yes, collaboration is possible on Classcube Pro. You can collaborate with fellow educators and content creators to create and deliver engaging content.",
    },
    {
        question: "What type of content can I create on ClassCube?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates veniam illo, quibusdam nulla quos laborum.",
    },
    {
        question: "How does the payment system work on ClassCube?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates veniam illo, quibusdam nulla quos laborum.",
    },
    {
        question: "How can ClassCube benefit businesses and organizations?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates veniam illo, quibusdam nulla quos laborum.",
    },
    {
        question: "How can I get started with ClassCube?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates veniam illo, quibusdam nulla quos laborum.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-6 md:px-10 lg:px-100 lg:py-6">
            <h2 className="text-2xl md:text-4xl font-[500] text-center text-[#0D3060] mb-10 pt-16">
                You Have Questions? We Have <br /> Answers
            </h2>

            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-md overflow-hidden"
                    >
                        <button
                            onClick={() => toggleQuestion(index)}
                            className="w-full flex justify-between items-center px-4 py-3 bg-[#F7F9FB] lg:w-[995px] lg:h-[67px]"
                        >
                            <span className="text-left text-lg font-[600] text-[#0D3060]">
                                {item.question}
                            </span>
                            <span className="ml-4">
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-blue-600" />
                                ) : (
                                    <Plus className="w-5 h-5 text-blue-600" />
                                )}
                            </span>
                        </button>

                        {openIndex === index && (
                            <div className="px-4 py-3 bg-[#F7F9FB] lg:w-[995px] lg:h-[67px] text-[#7A88A0] text-[16px] font-[500]">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
