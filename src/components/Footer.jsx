
const Footer = () => {
    return (
        <section className='px-6 md:px-10 lg:px-30 lg:py-6'>
            <div className='flex items-center justify-between pt-32'>
                <h1 className='text-[14px] lg:text-[32px] font-semibold text-[#0D3060] lg:w-[1028px] lg:h-[92px]'>Join Other Schools & Businesses <br /> Using Classcube Today!</h1>
                <button className="bg-[#0C78F1] text-white w-[100px] h-[40px] lg:w-[139px] lg:h-[44px] rounded-sm hover:bg-blue-700 text-sm font-medium">
                    Get Started
                </button>
            </div>

            <div className='flex items-center justify-between pt-12 pb-3'>
                <img src="/logo.png" alt="Logo" className="w-[96px] h-[24px] lg:h-[27px] lg:w-[112px]" />

                <p className="text-[10px] lg:text-[14px] font-normal text-[#7A88A0]">&copy; Copyright 2020 Revocube. All Rights Reserved</p>
            </div>
        </section>
    )
}

export default Footer