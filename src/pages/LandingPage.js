import '../App.css';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {BiDownArrowAlt} from "react-icons/bi"
import {FiInstagram} from "react-icons/fi"
import {BsFillHeartFill} from "react-icons/bs"
import { Link } from "react-scroll";
import AOS from 'aos';
import "aos/dist/aos.css"


import flowers from "../assets/flowers.png"
import man1 from "../assets/man1.jpg"
import women1 from "../assets/women1.jpg"

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
        <h3 className='text-2xl font-semibold text-center' style={{color: "#A35B66"}}>Calon Pengantin</h3>
        <div className='flex flex-col md:flex-row mt-20 items-center'>
          <div data-aos="zoom-in-down" style={{backgroundColor: "#FFD5DE"}} className="flex flex-col gap-8 px-5 py-5 rounded-2xl md:w-128">
            <div style={{borderColor: "#ebbcc6"}} className='flex flex-row gap-5 items-center border-2 px-4 py-5 rounded-2xl'>
              <div className=' w-20 md:w-52 h-20 md:h-52 rounded-full overflow-hidden'>
                <img src={man1} alt="pengantin-pria"/>
              </div>
              <div className='flex flex-col'>
                <h3 className='md:text-xl italic font-semibold' style={{color: "#A35B66"}}>Wredo Catulistiwa</h3>
                <div onClick={e => openInNewTab("https://www.instagram.com/xfiqryx/")} className='flex flex-row items-center gap-2 mt-1 cursor-pointer'>
                  <FiInstagram size={20} color={"#A35B66"}/>
                  <h3 style={{color: "#A35B66"}} className="text-xs md:text-base">wredo_cihui</h3>
                </div>
                <div style={{color: "#A35B66"}} className='flex flex-col mt-5 gap-1'>
                  <div className='text-xs md:text-sm'>Putra Pertama Dari Bapak : </div>
                  <div className='text-xs md:text-sm'>Dr. Sitampu Bolon &</div>
                  <div className='text-xs md:text-sm'>Hj. simatupang rambu</div>
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
                <h3 className='md:text-xl italic font-semibold' style={{color: "#A35B66"}}>Devy Astuti</h3>
                <div onClick={e => openInNewTab("https://www.instagram.com/xfiqryx/")} className='flex flex-row items-center gap-2 mt-1 cursor-pointer'>
                  <FiInstagram size={20} color={"#A35B66"}/>
                  <h3 style={{color: "#A35B66"}} className="text-xs md:text-base">devyy_evy</h3>
                </div>
                <div style={{color: "#A35B66"}} className='flex flex-col mt-5 gap-1'>
                  <div className='text-xs md:text-sm'>Putri Pertama Dari Bapak : </div>
                  <div className='text-xs md:text-sm'>Dr. Sitampu Bolon &</div>
                  <div className='text-xs md:text-sm'>Hj. simatupang rambu</div>
                </div>
              </div>
              <div className=' w-20 md:w-52 h-20 md:h-52 rounded-full overflow-hidden'>
                <img src={women1} alt="pengantin-pria"/>
              </div>
            </div>
          </div>
        </div>
        <Link to="section2"
          spy={true}
          smooth={true}
          duration={1000} 
          className='bg-white text-pink-500 rounded-full w-10 h-10 flex justify-center items-center animate-bounce cursor-pointer mt-10'>
          <BiDownArrowAlt size={30}/>
        </Link>
      </div>
    );
  };


  return (
    <>
      <div className='bg-banner'>
        <Modal/>
        <div className='overlay'>
          <h1 className='text-white text-6xl md:text-8xl text-center'>Wredo & Aliya</h1>
          <h3 className='text-white text-xs pt-4 md:text-lg'>Akan segera melangsungkan pernikahan</h3>
          <p className='text-yellow-500 text-xs pt-2 md:text-lg'>Sabtu, 17 Agustus 2022</p>
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
    </>
  );
}

export default LandingPage;
