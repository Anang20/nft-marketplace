import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Countdown from 'react-countdown';

const CardList = () => {

const router = useRouter();
const category = [
    {
        name: 'Live Auction',
    }, 
    {
        name: 'Art',
    },
    {
        name: 'Photography',
    },
    {
        name: 'Games',
    }, 
    {
        name: 'Music',
    }, 
    {
        name: 'Utility',
    },
    ];
  return (
    <>
      <div className="flex flex-col">
        <div className={styles.banner}>
          <div className="flex flex-col px-4 lg:px-10 py-4 lg:py-16 gap-5">
            <p className="text-white font-semibold text-base lg:text-[40px]">
              One Stop NFT Marketplace
            </p>
            <p className="text-white text-xs lg:text-lg font-normal">
              Discover limited-edition digital artwork
              <br />
              Create, Sell, and Collect your now!
            </p>
            <div className="flex gap-4 mt-5">
              <div className="bg-white py-2 px-5 rounded-lg cursor-pointer">
                <p
                  className="font-medium text-sm"
                  style={{
                    backgroundImage:
                      "linear-gradient(103.85deg, #6763FD 5.47%, #B84EF1 96.28%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Start Create
                </p>
              </div>
              <div className="bg-white py-2 px-5 rounded-lg cursor-pointer">
                <p
                  className="font-medium text-sm"
                  style={{
                    backgroundImage:
                      "linear-gradient(103.85deg, #6763FD 5.47%, #B84EF1 96.28%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  How It Works!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[870px]">
          <div className="my-7">
            <p className="text-white text-xl font-semibold">Explore</p>
            <div className="h-20 my-4">
                <div className="flex gap-4">
                {category?.map((value, index) => (
                    <button
                    key={index}
                    className="bg-[#ffffff0d] mt-4 hover:bg-[#ffffff4d] hover:border-2 border-[#7B6FE6] py-3 px-6 rounded-3xl text-white"
                    >
                    {value?.name}
                    </button>
                ))}
                </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="w-[280px] h-[336px] bg-[#262D3A] rounded-xl px-3 py-3 cursor-pointer" onClick={() => router.push('/')}>
              <div className="flex justify-between w-[257px] h-[160px] bg-[url(/assets/art1.png)] rounded-2xl">
                <div className="flex items-center justify-center bg-[#c4c4c433] w-12 h-8 text-white rounded-xl ml-3 mt-3">
                  Art
                </div>
                <div className="cursor-pointer z-0 mr-3 mt-3">
                  <Image
                    src={"/assets/love.svg"}
                    width={40}
                    height={40}
                    alt={"not found"}
                  />
                </div>
                
                <div className="absolute flex items-center justify-center w-[260px] h-7 text-white text-sm mt-[135px] bg-[#262d3acc]">
                  Ends in: <Countdown date={Date.now() + 18108000} />
                </div>
              </div>
              <div className="flex justify-between text-sm my-4">
                <p className="text-white">Current Bid: </p>
                <p className="text-[#6763FD]">6,62 ETH</p>
              </div>
              <p className="font-medium text-lg text-white">Hally</p>
              <hr
                className="my-4"
                style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
              />
              <div className="flex">
                <div class="z-10">
                  <Image
                    src={"/assets/Ellipse 75.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-20 -ml-3">
                  <Image
                    src={"/assets/Ellipse 76.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-30 -ml-3">
                  <Image
                    src={"/assets/Ellipse 77.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-10 -ml-3">
                  <Image
                    src={"/assets/Ellipse 78.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-20 -ml-3">
                  <Image
                    src={"/assets/Ellipse 79.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-30 -ml-3 flex items-center justify-center w-10 h-10 rounded-full bg-[#6763FD]">
                  <p className="text-white text-xs">100+</p>
                </div>
              </div>
            </div>

            <div className="w-[280px] h-[336px] bg-[#262D3A] rounded-xl px-3 py-3 cursor-pointer" onClick={() => router.push('/')}>
              <div className="flex justify-between w-[257px] h-[160px] bg-[url(/assets/art2.png)] rounded-2xl">
                <div className="flex items-center justify-center bg-[#c4c4c433] w-12 h-8 text-white rounded-xl ml-3 mt-3">
                  Art
                </div>
                <div className="cursor-pointer z-0 mr-3 mt-3">
                  <Image
                    src={"/assets/love.svg"}
                    width={40}
                    height={40}
                    alt={"not found"}
                  />
                </div>
                <div className="absolute flex items-center justify-center w-[260px] h-7 text-white text-sm mt-[135px] bg-[#262d3acc]">
                  Ends in : 50h : 30m : 20s
                </div>
              </div>
              <div className="flex justify-between text-sm my-4">
                <p className="text-white">Current Bid: </p>
                <p className="text-[#6763FD]">6,34 ETH</p>
              </div>
              <p className="font-medium text-lg text-white">Abstract</p>
              <hr
                className="my-4"
                style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
              />
              <div className="flex">
                <div class="z-10">
                  <Image
                    src={"/assets/Ellipse 75.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-20 -ml-3">
                  <Image
                    src={"/assets/Ellipse 76.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-30 -ml-3">
                  <Image
                    src={"/assets/Ellipse 77.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-10 -ml-3">
                  <Image
                    src={"/assets/Ellipse 78.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-20 -ml-3">
                  <Image
                    src={"/assets/Ellipse 79.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-30 -ml-3 flex items-center justify-center w-10 h-10 rounded-full bg-[#6763FD]">
                  <p className="text-white text-xs">100+</p>
                </div>
              </div>
            </div>

            <div className="w-[280px] h-[336px] bg-[#262D3A] rounded-xl px-3 py-3 cursor-pointer" onClick={() => router.push('/')}>
              <div className="flex justify-between w-[257px] h-[160px] bg-[url(/assets/art3.png)] rounded-2xl">
                <div className="flex items-center justify-center bg-[#c4c4c433] w-12 h-8 text-white rounded-xl ml-3 mt-3">
                  Art
                </div>
                <div className="cursor-pointer z-0 mr-3 mt-3">
                  <Image
                    src={"/assets/love.svg"}
                    width={40}
                    height={40}
                    alt={"not found"}
                  />
                </div>
                <div className="absolute flex items-center justify-center w-[260px] h-7 text-white text-sm mt-[135px] bg-[#262d3acc]">
                  Ends in : 50h : 30m : 20s
                </div>
              </div>
              <div className="flex justify-between text-sm my-4">
                <p className="text-white">Current Bid: </p>
                <p className="text-[#6763FD]">6,82 ETH</p>
              </div>
              <p className="font-medium text-lg text-white">Sparkam</p>
              <hr
                className="my-4"
                style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
              />
              <div className="flex">
                <div class="z-10">
                  <Image
                    src={"/assets/Ellipse 75.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-20 -ml-3">
                  <Image
                    src={"/assets/Ellipse 76.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-30 -ml-3">
                  <Image
                    src={"/assets/Ellipse 77.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-10 -ml-3">
                  <Image
                    src={"/assets/Ellipse 78.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-20 -ml-3">
                  <Image
                    src={"/assets/Ellipse 79.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-30 -ml-3 flex items-center justify-center w-10 h-10 rounded-full bg-[#6763FD]">
                  <p className="text-white text-xs">100+</p>
                </div>
              </div>
            </div>

            <div className="w-[280px] h-[336px] bg-[#262D3A] rounded-xl px-3 py-3 cursor-pointer" onClick={() => router.push('/')}>
              <div className="flex justify-between w-[257px] h-[160px] bg-[url(/assets/art4.png)] rounded-2xl">
                <div className="flex items-center justify-center bg-[#c4c4c433] w-12 h-8 text-white rounded-xl ml-3 mt-3">
                  Art
                </div>
                <div className="cursor-pointer z-0 mr-3 mt-3">
                  <Image
                    src={"/assets/love.svg"}
                    width={40}
                    height={40}
                    alt={"not found"}
                  />
                </div>
                <div className="absolute flex items-center justify-center w-[260px] h-7 text-white text-sm mt-[135px] bg-[#262d3acc]">
                  Ends in : 50h : 30m : 20s
                </div>
              </div>
              <div className="flex justify-between text-sm my-4">
                <p className="text-white">Current Bid: </p>
                <p className="text-[#6763FD]">8,25 ETH</p>
              </div>
              <p className="font-medium text-lg text-white">Paranoia</p>
              <hr
                className="my-4"
                style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
              />
              <div className="flex">
                <div class="z-10">
                  <Image
                    src={"/assets/Ellipse 75.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-20 -ml-3">
                  <Image
                    src={"/assets/Ellipse 76.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-30 -ml-3">
                  <Image
                    src={"/assets/Ellipse 77.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-10 -ml-3">
                  <Image
                    src={"/assets/Ellipse 78.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-20 -ml-3">
                  <Image
                    src={"/assets/Ellipse 79.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-30 -ml-3 flex items-center justify-center w-10 h-10 rounded-full bg-[#6763FD]">
                  <p className="text-white text-xs">100+</p>
                </div>
              </div>
            </div>

            <div className="w-[280px] h-[336px] bg-[#262D3A] rounded-xl px-3 py-3 cursor-pointer" onClick={() => router.push('/')}>
              <div className="flex justify-between w-[257px] h-[160px] bg-[url(/assets/art5.png)] rounded-2xl">
                <div className="flex items-center justify-center bg-[#c4c4c433] w-12 h-8 text-white rounded-xl ml-3 mt-3">
                  Art
                </div>
                <div className="cursor-pointer z-0 mr-3 mt-3">
                  <Image
                    src={"/assets/love.svg"}
                    width={40}
                    height={40}
                    alt={"not found"}
                  />
                </div>
                <div className="absolute flex items-center justify-center w-[260px] h-7 text-white text-sm mt-[135px] bg-[#262d3acc]">
                  Ends in : 50h : 30m : 20s
                </div>
              </div>
              <div className="flex justify-between text-sm my-4">
                <p className="text-white">Current Bid: </p>
                <p className="text-[#6763FD]">2,624 ETH</p>
              </div>
              <p className="font-medium text-lg text-white">Wondershall</p>
              <hr
                className="my-4"
                style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
              />
              <div className="flex">
                <div class="z-10">
                  <Image
                    src={"/assets/Ellipse 75.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-20 -ml-3">
                  <Image
                    src={"/assets/Ellipse 76.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-30 -ml-3">
                  <Image
                    src={"/assets/Ellipse 77.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-10 -ml-3">
                  <Image
                    src={"/assets/Ellipse 78.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-20 -ml-3">
                  <Image
                    src={"/assets/Ellipse 79.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-30 -ml-3 flex items-center justify-center w-10 h-10 rounded-full bg-[#6763FD]">
                  <p className="text-white text-xs">100+</p>
                </div>
              </div>
            </div>

            <div className="w-[280px] h-[336px] bg-[#262D3A] rounded-xl px-3 py-3 cursor-pointer" onClick={() => router.push('/')}>
              <div className="flex justify-between w-[257px] h-[160px] bg-[url(/assets/art6.png)] rounded-2xl">
                <div className="flex items-center justify-center bg-[#c4c4c433] w-12 h-8 text-white rounded-xl ml-3 mt-3">
                  Art
                </div>
                <div className="cursor-pointer z-0 mr-3 mt-3">
                  <Image
                    src={"/assets/love.svg"}
                    width={40}
                    height={40}
                    alt={"not found"}
                  />
                </div>
                <div className="absolute flex items-center justify-center w-[260px] h-7 text-white text-sm mt-[135px] bg-[#262d3acc]">
                  Ends in : 50h : 30m : 20s
                </div>
              </div>
              <div className="flex justify-between text-sm my-4">
                <p className="text-white">Current Bid: </p>
                <p className="text-[#6763FD]">6,52 ETH</p>
              </div>
              <p className="font-medium text-lg text-white">Water Bender</p>
              <hr
                className="my-4"
                style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
              />
              <div className="flex">
                <div class="z-10">
                  <Image
                    src={"/assets/Ellipse 75.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-20 -ml-3">
                  <Image
                    src={"/assets/Ellipse 76.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-30 -ml-3">
                  <Image
                    src={"/assets/Ellipse 77.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-10 -ml-3">
                  <Image
                    src={"/assets/Ellipse 78.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-20 -ml-3">
                  <Image
                    src={"/assets/Ellipse 79.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div class="z-30 -ml-3 flex items-center justify-center w-10 h-10 rounded-full bg-[#6763FD]">
                  <p className="text-white text-xs">100+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardList;
