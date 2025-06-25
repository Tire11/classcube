import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <nav className="bg-white px-6 md:px-10 lg:px-30 py-6 flex items-center justify-between fixed left-0 right-0 z-10">
            {/* Logo */}
            <div className="">
                <img src="/logo.png" alt="Logo" className="w-[96px] h-[24px] lg:h-[45px] lg:w-[184px]" />
            </div>
            <ul className="hidden md:flex items-center gap-6 text-sm text-[#0D3060] font-medium cursor-pointer">
                <li>Home</li>
                <li>Products</li>
                <li>Contact Us</li>
                <li>Schoolrevs Suite</li>
            </ul>

            <div className="hidden md:block">
                {/* Get Started Button */}
                <button className="bg-[#0C78F1] text-white px-3 py-2 lg:w-[148px] lg:h-[54px] rounded-sm hover:bg-blue-700 text-sm cursor-pointer">
                    <span className="cursor-pointer">Get Started</span>
                </button>
            </div>

            {/* Hamburger Icon (Mobile) */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-gray-700 focus:outline-none"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 flex flex-col gap-4 p-4 text-gray-700 font-medium md:hidden">
                    <a href="#" className="hover:text-blue-600">
                        Home
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        Products
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        Contact Us
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        Schoolrevs Suite
                    </a>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm w-full">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
