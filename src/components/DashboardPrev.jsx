import { ArrowRight } from "lucide-react";


const DashboardPrev = () => {
    return (
        <section className="px-6 md:px-10 lg:px-30 py-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
                {/* Left Column (1/4) */}
                <div className="md:col-span-1 space-y-6">
                    <h2 className="text-[36px] font-semibold text-[#0D3060] leading-tight lg:w-[339px] lg:h-[98px]">
                        Learning Beyond <br /> Walls
                    </h2>

                    <h3 href="#" className="text-sm lg:text-[16px] font-bold text-[#0C78F1] flex items-center gap-1">
                        Explore our products <span><ArrowRight size={24} strokeWidth={2} /></span>
                    </h3>

                    <ul className="space-y-2 text-sm lg:text-[16px] text-[#5E6C85]">
                        <li className="font-semibold border-l-3 border-[#0C78F1] pl-3">
                            Classcube Basic
                        </li>
                        <li className="font-semibold pl-3">Classcube Pro</li>
                        <li className="font-semibold pl-3">Classcube Enterprise</li>
                    </ul>
                </div>

                {/* Right Column (3/4) */}
                <div className="md:col-span-3 w-full flex justify-end">
                    <img
                        src="/dashboard.png"
                        alt="Dashboard View"
                        className="lg:w-[1056px] lg:h-[600px] w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default DashboardPrev;
