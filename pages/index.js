import Image from "next/image";
import DekstopNavbar from "../components/desktopNavbar";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "../components/cardList";

const Home = () => {

  const [artWorksData, setArtWorksData] = useState([]);
  const [artist, setArtist] = useState([]);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const getArtWorks = async () => {
      const endpoint = await axios.get('https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/featured-artworks');
      const result = endpoint?.data;
      setArtWorksData(result);
    }
    getArtWorks();
  }, []);

  useEffect(() => {
    const getTopArtist = async () => {
      const endpoint = await axios.get("https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/top-artist");
      const result = endpoint?.data;
      setArtist(result);
    }
    getTopArtist();
  }, []);

  useEffect(() => {
    const getRecentActivities = async () => {
      const endpoint = await axios.get("https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/recent-activities");
      const result = endpoint?.data;
      setRecent(result);
      console.log(recent, "sjjs");
    }
    getRecentActivities();
  }, []);

  const number = 1;

  console.log(artWorksData);
  return (
    <>
    <div className="flex">
      <Sidebar/>
      <DekstopNavbar/>
      <div className="block lg:flex w-full mt-28 pl-0 lg:pl-36 gap-5 px-2 mx-2">
        <CardList/>
        <div className="flex flex-col w-full gap-y-9">
          
          <div className="h-80 bg-[#262D3A] rounded-2xl px-5 py-5 text-white">
            <p className="text-xl font-semibold">Top Artist</p>
            {artist?.slice(0, 4).map((value, index) => (
              <div key={index} className="flex items-center justify-between gap-2 pt-3">
                <div className="font-semibold text-xl">{number++}.</div>
                <div className="flex gap-2">
                  <Image src={'/assets//Ellipse.svg'} width={40} height={40} alt={'image'}/>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">{value?.name}</p>
                    <p className="text-xs text-[#878787]">@{value?.username}</p>
                  </div>
                </div>
                <button className="rounded-xl text-xs w-14 h-8" style={{ background: 'linear-gradient(103.85deg, #6763FD 5.47%, #B84EF1 96.28%)' }}>Follow</button>
              </div>
            ))}
          </div>
          
          <div className="h-[768px] bg-[#262D3A] rounded-2xl px-5 py-5 text-white">
            <p className="mb-5 font-semibold text-xl">Recent Activity</p>
            {recent?.slice(0,9).map((value, index) => (
              <div key={index} className="flex my-3 items-center h-16 bg-[#ffffff0d] hover:bg-gradient-to-r from-[#6763FD1A] to-[#B84EF11A] cursor-pointer rounded-xl">
                  <div className="px-3">
                    <Image src={'/assets//Ellipse.svg'} width={40} height={40}/>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">{value?.name}</p>
                    <p className="text-xs text-[#878787]">{value?.message}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
    
      </div>
    </div>
    </>
  )
}
export default Home;