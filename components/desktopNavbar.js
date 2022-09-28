import Image from "next/image";

const DekstopNavbar = () => {
    return (
        <>
        <div className="fixed flex items-center top-0 bg-[#1B1E2A] h-24 w-full z-10">
            <div className="flex items-center mx-auto px-0 pl-2 lg:pl-36 gap-2 lg:gap-5 2xl:gap-7 w-full">

                <div className="flex items-center lg:hidden">
                    <Image src={'/assets/menu.svg'} width={34} height={34}/>
                </div>

                <div className="bg-[#262D3A] flex items-center rounded-xl">
                    <div className="pl-4 pr-1 lg:pl-8 lg:pr-3">
                        <Image src={'/assets/search.svg'} width={19} height={19}/>
                    </div>
                    <input className="w-[131px] lg:w-[600px] 2xl:w-[1000px] 2 h-[44px] lg:h-[56px] bg-transparent outline-none border-none text-white text-lg font-normal" placeholder="Search"/>
                </div>

                <div className="hidden lg:flex items-center w-48 2xl:w-72 bg-[#262D3A] h-[56px] rounded-xl">
                    <div className="px-3">
                        <Image src={'/assets/eth2.svg'} width={24} height={24} alt={'image'}/>
                    </div>
                    <p className="text-white font-normal text-sm">56,000 ETH</p>
                </div>

                <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#262D3A] rounded-full cursor-pointer">
                    <Image src={'/assets/chat.svg'} width={24} height={24}/>
                </div>

                <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#262D3A] rounded-full cursor-pointer">
                    <Image src={'/assets/notification.svg'} width={24} height={24}/>
                </div>

                <div className="flex items-center gap-2 w-12 lg:w-36 hover:bg-[#ffffff1a] rounded-full lg:rounded-xl cursor-pointer">
                    <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#262D3A] rounded-full">
                        <Image src={'/assets/Ellipse.svg'} width={'100%'} height={'100%'}/>
                    </div>
                    <div className="text-white hidden lg:block">
                        Anang
                    </div>
                    <div className="hidden lg:flex">
                        <Image src={'/assets/arrow-down.svg'} width={'24px'} height={'24px'} alt={'arrow'}/>
                    </div>
                </div>
                
            </div>
        </div>
        <hr className="block lg:hidden absolute top-[90px] border-white w-full" style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}/>
        </>
    )
}
export default DekstopNavbar;