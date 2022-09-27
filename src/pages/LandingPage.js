import '../App.css';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {BiDownArrowAlt} from "react-icons/bi"
import {FiInstagram, FiClock} from "react-icons/fi"
import {BsFillHeartFill, BsFillCalendarCheckFill} from "react-icons/bs"
import { Link } from "react-scroll";
import AOS from 'aos';
import "aos/dist/aos.css"

import Maps from '../components/Maps';


import flowers from "../assets/flowers.png"
import flower2 from "../assets/flower2.png"
import CharWomen from "../assets/CharWomen.png"
import CharMan from "../assets/CharMan.png"


function LandingPage() {
  const [showModal, setShowModal] = useState(true)
  const {token, id} = useParams()
  const sanitizedName = token.replace(/-/g, " ")

  useEffect(() => {
    if(showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
 }, [showModal])

 useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);

  const onHideModal = () => {
    setShowModal(false)
  }

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const Modal = () => {
    return (
      <div className={`${showModal ? "show" : "hide"} z-10 absolute`}>
        <div className={`bg-white w-64 h-52 md:w-96 md:h-72  rounded-xl top-0 bottom-0 left-0 right-0 justify-between flex-col flex items-center py-6`}>
          <div className=' text-xs md:text-sm'>Kepada YTH, Bapak/Ibu/Saudara/i</div>
          <div className='flex gap-1 md:gap-3 flex-col'>
            <div className='text-sm md:text-lg capitalize'>{sanitizedName}</div>
            <div className='text-xs md:text-base text-center'>&</div>
            <div className='text-xs md:text-base text-center'>{id === "keluarga" ? "Keluarga" : "Patner"}</div>
          </div>
          <div onClick={onHideModal} className='bg-pink-400 text-white font-semibold px-4 py-2 rounded-md cursor-pointer animate-pulse'>Buka Undangan</div>
        </div>
      </div>
    )
  }

  const Section1 = () => {
    return (
      <div id={"section1"} className="h-screen flex flex-col md:flex-row px-8 md:px-24 md:py-0 py-10 items-center md:gap-20" style={{backgroundColor: "#FFD5DE"}}>
        <img src={flowers} alt="flowers" className='md:w-96 w-44 animate-pulse'/>
        <div className='flex flex-col gap-8 md:gap-10'>
          <h3 className='italic md:text-left text-center text-lg md:text-2xl font-semibold' style={{color: "#A35B66"}}>QS. Ar-Rum Ayat 21</h3>
          <h4 className='italic md:text-left text-center md:text-xl -mt-5' style={{color: "#A35B66"}}>وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ</h4>
          <p className='italic text-justify md:text-left' style={{color: "#A35B66"}}>Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</p>
          <Link to="section2"
            spy={true}
            smooth={true}
            duration={1000} className='bg-white text-pink-500 rounded-full w-10 h-10 flex justify-center items-center animate-bounce cursor-pointer'>
            <BiDownArrowAlt size={30}/>
          </Link>
        </div>
      </div>
    );
  };

  const Section2 = () => {
    return (
      <div id={"section2"} className="h-screen flex flex-col px-8 md:px-24 md:py-10 py-10 " style={{backgroundColor: "#FFEEEE"}}>
        <h3 className='text-xl md:text-2xl font-semibold text-center' style={{color: "#A35B66"}}>Calon Pengantin</h3>
        <div className='flex flex-col md:flex-row mt-20 items-center'>
          <div data-aos="zoom-in-down" style={{backgroundColor: "#FFD5DE"}} className="flex flex-col gap-8 px-5 py-5 rounded-2xl md:w-128">
            <div style={{borderColor: "#ebbcc6"}} className='flex flex-row gap-5 items-center border-2 px-4 py-5 rounded-2xl'>
              <div className=' w-20 md:w-52 h-20 md:h-52 rounded-full overflow-hidden'>
                <img src={CharMan} alt="pengantin-pria"/>
              </div>
              <div className='flex flex-col'>
                <h3 className='md:text-xl italic font-semibold' style={{color: "#A35B66"}}>Edo Ananda Prasetia, S.Kom</h3>
                <div onClick={e => openInNewTab("https://www.instagram.com/edo_ananda09/")} className='flex flex-row items-center gap-2 mt-1 cursor-pointer'>
                  <FiInstagram size={20} color={"#A35B66"}/>
                  <h3 style={{color: "#A35B66"}} className="text-xs md:text-base">@edo_ananda09</h3>
                </div>
                <div style={{color: "#A35B66"}} className='flex flex-col mt-5 gap-1'>
                  <div className='text-xs md:text-sm'>Putra Dari Bapak : </div>
                  <div className='text-xs md:text-sm'>Indriadi &</div>
                  <div className='text-xs md:text-sm'>Ibu Neli Harti, S.Pd.I</div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className='z-30 animate-pulse'>
            <BsFillHeartFill  className='-my-8 md:my-0 md:-mx-8 w-28 h-28 md:w-36 md:h-36' color="#FF87B2"/>
          </div>
          <div data-aos="zoom-in-up" style={{backgroundColor: "#FFD5DE"}} className="flex flex-col gap-8 px-5 py-5 rounded-2xl md:w-128">
            <div style={{borderColor: "#ebbcc6"}} className='flex flex-row gap-5 items-center border-2 px-4 py-5 rounded-2xl'>
              <div className='flex flex-col'>
                <h3 className='md:text-xl italic font-semibold' style={{color: "#A35B66"}}>Armas Susanti</h3>
                <div onClick={e => openInNewTab("https://www.instagram.com/hlykmla376/")} className='flex flex-row items-center gap-2 mt-1 cursor-pointer'>
                  <FiInstagram size={20} color={"#A35B66"}/>
                  <h3 style={{color: "#A35B66"}} className="text-xs md:text-base">@hlykmla376</h3>
                </div>
                <div style={{color: "#A35B66"}} className='flex flex-col mt-5 gap-1'>
                  <div className='text-xs md:text-sm'>Putri Pertama Dari Bapak : </div>
                  <div className='text-xs md:text-sm'>Suhendra &</div>
                  <div className='text-xs md:text-sm'>Ibu Ismi Junaita</div>
                </div>
              </div>
              <div className=' w-20 md:w-52 h-20 md:h-52 rounded-full overflow-hidden'>
                <img src={CharWomen} alt="pengantin-wanita"/>
              </div>
            </div>
          </div>
        </div>
        <Link to="section3"
          spy={true}
          smooth={true}
          duration={1000} 
          className='bg-white text-pink-500 rounded-full w-10 h-10 flex justify-center items-center animate-bounce cursor-pointer mt-10'>
          <BiDownArrowAlt size={30}/>
        </Link>
      </div>
    );
  };

  const Section3 = () => {
    return (
      <div id={"section3"} className="h-screen flex flex-col py-10" style={{backgroundColor: "#D3D9E9"}}>
        <div className='flex flex-col gap-4 px-10 md:px-48'>
          <h3 className='text-xl md:text-2xl font-semibold text-center' style={{color: "#554D74"}}>Undangan dan Pengantin</h3>
          <p className='italic lowercase text-center text-xs md:text-base' style={{color: "#554D74"}}>BAHAGIA RASANYA APABILA ANDA BERKENAN HADIR DAN MEMBERIKAN DOA RESTU KEPADA KAMI. KAMI MENGUNDANG ANDA UNTUK HADIR DALAM ACARA RESEPSI PERNIKAHAN KAMI BERIKUT INI</p>
        </div>
        <div className='w-full flex justify-center'>
          <div className='flex flex-col md:flex-row gap-10 mt-10 md:mt-20'>
            <div data-aos="zoom-in-down" className='card1 px-7 md:px-8 py-3 md:py-5'>
              <div className='text-base md:text-xl py-2 md:py-4 w-full text-center' style={{color: "#554D74", borderColor: "rgba(119, 110, 168, 0.736)", borderBottomWidth: "1.5px"}}>Akad Nikah</div>
              <div className='flex flex-row gap-10'>
                <div className='flex flex-col items-center'>
                  <BsFillCalendarCheckFill color="#554D74"/>
                  <div style={{color: "#554D74"}} className="text-xs md:text-sm">Senin</div>
                  <div style={{color: "#554D74"}} className="text-xs md:text-sm">03 Oktober 2022</div>
                </div>
                <div className='flex flex-col items-center'>
                  <FiClock color="#554D74"/>
                  <div style={{color: "#554D74"}} className="text-xs md:text-sm">Pukul</div>
                  <div style={{color: "#554D74"}} className="text-xs md:text-sm">08:00 - Selesai</div>
                </div>
              </div>
              <div className='w-56 md:w-96 text-center text-xs md:text-sm' style={{color: "#554D74"}}>
                Bertempat di Kediaman mempelai wanita, BTN Merangin Raya. Kel. Dusun Bangko
              </div>
            </div>
            <div data-aos="zoom-in-up" className='card1 px-7 md:px-8 py-3 md:py-5'>
              <div className='text-base md:text-xl py-2 md:py-4 w-full text-center' style={{color: "#554D74", borderColor: "rgba(119, 110, 168, 0.736)", borderBottomWidth: "1.5px"}}>Resepsi Pernikahan</div>
              <div className='flex flex-row gap-10'>
                <div className='flex flex-col items-center'>
                  <BsFillCalendarCheckFill color="#554D74"/>
                  <div style={{color: "#554D74"}} className="text-xs md:text-sm">Senin</div>
                  <div style={{color: "#554D74"}} className="text-xs md:text-sm">03 Oktober 2022</div>
                </div>
                <div className='flex flex-col items-center'>
                  <FiClock color="#554D74"/>
                  <div style={{color: "#554D74"}} className="text-xs md:text-sm">Pukul</div>
                  <div style={{color: "#554D74"}} className="text-xs md:text-sm">10:00 - Selesai</div>
                </div>
              </div>
              <div className='w-56 md:w-96 text-center text-xs md:text-sm' style={{color: "#554D74"}}>
                Bertempat di Kediaman mempelai wanita, BTN Merangin Raya. Kel. Dusun Bangko
              </div>
            </div>
          </div>
        </div>
        <Link to="section4"
          spy={true}
          smooth={true}
          duration={1000} 
          className='bg-white text-pink-500 rounded-full mx-12 md:mx-24 w-10 h-10 flex justify-center items-center animate-bounce cursor-pointer mt-10'>
          <BiDownArrowAlt size={30}/>
        </Link>
      </div>
    );
  };


  const Section4 = () => {
    return (
      <div id={"section4"} className="h-screen flex flex-col py-10" style={{backgroundColor: "#e6f2ff"}}>
        <div className='flex flex-col gap-4 px-10 md:px-48'>
          <h3 className='text-xl md:text-2xl font-semibold text-center' style={{color: "#554D74"}}>Peta Lokasi</h3>
          <p className='italic lowercase text-center text-xs md:text-base' style={{color: "#554D74"}}>Anda dapat menuju lokasi acara kami dengan bantuan peta dibawah ini. Atau anda bisa buka di</p>
          <div className="flex w-full justify-center">
            <div onClick={e => openInNewTab("https://goo.gl/maps/4tZtXvgBNyTq1bUu9")} className='cursor-pointer w-60 text-center bg-white py-4 px-6 md:px-8 md:py-4 rounded-full mt-3 animate-bounce text-purple-400 text-xs md:text-sm'>
              Buka di Google Maps
            </div>
          </div>
        </div>
        <Maps/>
      </div>
    );
  };

  const Section5 = () => {
    return (
      <div id={"section5"} className="flex flex-col items-center justify-center" style={{backgroundColor: "#FFD5DE", height: "90vh"}}>
        <div className='flex flex-col md:flex-row px-8 md:px-24 md:py-0 py-10 items-center md:gap-20'>
          <img src={flower2} alt="flowers" className='md:w-96 w-44 animate-pulse -rotate-180'/>
          <div className='flex flex-col gap-8 md:gap-10'>
            <h3 className='italic md:text-left text-center text-lg md:text-2xl font-semibold' style={{color: "#A35B66"}}>Protokol Kesehatan</h3>
            <p className='italic text-justify md:text-left' style={{color: "#A35B66"}}>Mohon untuk anda sahabat/kerabat dan saudara kami yang akan datang ke Akad maupun resepsi pernikahan kami untuk tetap memperhatikan protokol kesehatan yaitu Menggunakan Masker, Menjaga Jarak, Mencuci Tangan dan selalu menjaga kesehatan dan juga imun tubuh. Terima kasih</p>
            <p className='italic text-justify md:text-left' style={{color: "#A35B66"}}>Atas kehadiran dan do'a restu bapak/ibu/saudara/i kami ucapkan Terimakasih</p>
          </div>
        </div>
      </div>
    );
  };


  return (
    <>
      <div className='bg-banner'>
        <Modal/>
        <div className='overlay'>
          <h1 className='text-white text-6xl md:text-8xl text-center'>Edo & Gadis</h1>
          <h3 className='text-white text-xs pt-4 md:text-lg'>Akan segera melangsungkan pernikahan</h3>
          <p className='text-yellow-500 text-xs pt-2 md:text-lg'>Senin, 03 Oktober 2022</p>
          <Link
            to="section1"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <div className='cursor-pointer bg-white py-4 px-6 md:px-8 md:py-4 rounded-full mt-10 animate-bounce text-pink-400 text-xs md:text-sm'>
              Selengkapnya
            </div>
          </Link>
        </div>
      </div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <div className=' hidden md:visible md:flex md:flex-row md:gap-10 text-xs md:text-sm justify-center items-center py-5' style={{color: "#A35B66", backgroundColor: "#FFD5DE"}}>
          <h3>Copyright © 2022 CUPAXXHD</h3>
          <span>|</span>
          <h3 className='cursor-pointer hover:underline' onClick={e => openInNewTab("https://www.linkedin.com/in/fiqry-arahmansyah")}>Reach Me On Linkedin</h3>
          <span>|</span>
          <h3 className='cursor-pointer hover:underline' onClick={e => openInNewTab("https://github.com/CUPAXX")}>See Me in Github</h3>
          <span>|</span>
          <h3>Created With React Js</h3>
        </div>
        <div  style={{color: "#A35B66", backgroundColor: "#FFD5DE"}} className='flex flex-col justify-center items-center gap-3 md:hidden text-xs py-8 px-5'>
          <div className='flex justify-between w-full'>
            <h3>Copyright © 2022 CUPAXXHD</h3>
            <span>|</span>
            <h3 className='cursor-pointer hover:underline' onClick={e => openInNewTab("https://www.linkedin.com/in/fiqry-arahmansyah")}>Reach Me On Linkedin</h3>
          </div>
        </div>
    </>
  );
}

export default LandingPage;
