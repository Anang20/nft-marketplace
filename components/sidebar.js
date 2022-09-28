import Image from "next/image";
import { useRouter } from "next/router";

const Sidebar = () => {
    const router = useRouter();

    const menu = [
      {
        icon: '/assets/dashboard.svg',
      },
      {
        icon: '/assets/trade.svg',
      },
      {
        icon: '/assets/note.svg',
      },
      {
        icon: '/assets/gear.svg',
      },
      {
        icon: '/assets/package.svg',
      },
    ];
    return (
        <>
            <div className="hidden fixed lg:block w-32 h-screen bg-[#262D3A] flex flex-col z-20">

              <div className="flex justify-center py-5 cursor-pointer">
                <Image src={'/assets/eth.svg'} width={50} height={50} alt={'image'}/>
              </div>

              <hr style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}/>

              {menu?.map((value, index) => (
                <div key={index} className="flex justify-center py-7 hover:bg-[#ffffff1a] cursor-pointer" onClick={() => router.push('/')}>
                  <Image src={value?.icon} width={36} height={36} alt={'image'}/>
                </div>
              ))}

            </div>
        </>
    )
}
export default Sidebar;