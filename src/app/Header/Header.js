"use client";
import { useEffect, useRef, useState } from "react";
import "./Header.css"
import MenuItem from "./MenuItem";
import ClipPathAnimation from "./ClipPathAnimation";


export default function Header() {
    const [muted, setMuted] = useState(true);
    const [selectedMenu ,setSelectedMenu]=useState('Home')
  const videoRef = useRef(null);
  const handleMenuClick=(e)=>{
    setSelectedMenu(null)
    setTimeout(()=>{setSelectedMenu(e)},100)
  }

  const clickVideo = (e) => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
   
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);


    const dialogRef = useRef();
    const openMenu=()=>{
    dialogRef.current?.showModal()
    }

  return (
   <>
   <div className="header">
   <div className="sides">
    <a href="#" className="logo">
      <img className="logo-img" src="https://wildwarriorrace.in/wp-content/uploads/2024/03/ww-horizontal-1024x194.png" />
    </a>
  </div>
  <div className="sides"> <a href="#" className="menu" onClick={openMenu} id="openMenu"> </a></div>
  <div className="jumbotron">
  
      <video
        ref={videoRef}
        className="video-background"
        loading="lazy"
        autoPlay
        muted
        loop
        onClick={clickVideo}
        preload="metadata"
      >
        <source src="./WWvideo.mp4" type="video/mp4"  />
        Your browser does not support the video tag.
      </video>
      {/* {!muted && (
        <FontAwesomeIcon
          icon={faVolumeHigh}
          className="unmute animate__animated animate__fadeOut"
        />
      )}
      {muted && (
        <FontAwesomeIcon
          icon={faVolumeXmark}
          className="unmute animate__animated animate__fadeOut"
        />
      )} */}
      <div className="content">
   
    <h1>Wild Warrior Race website</h1>
 
      </div>
    </div>

</div>

<dialog ref={dialogRef}>
 <div className="closeButton" onClick={()=>dialogRef.current?.close()}>X</div>

{/* <!-- create svg inline with clipPath and animation -->
<!-- do not hide SVG with display: none; it will disable anim/clipping --> */}

<div className="menu-container">
<MenuItem label="Home" clickHandle={handleMenuClick} selectedMenu={selectedMenu} />
<MenuItem label="About Us" clickHandle={handleMenuClick} selectedMenu={selectedMenu} />
<MenuItem label="Wild Warrior Races" clickHandle={handleMenuClick} selectedMenu={selectedMenu} />
<MenuItem label="Wild Warrior X" clickHandle={handleMenuClick} selectedMenu={selectedMenu} />
<MenuItem label="Wild Warrior Infra" clickHandle={handleMenuClick} selectedMenu={selectedMenu} />
<MenuItem label="Gallery" clickHandle={handleMenuClick} selectedMenu={selectedMenu}/>
<MenuItem label="Contact Us" clickHandle={handleMenuClick} selectedMenu={selectedMenu}/>
</div>
{selectedMenu && <ClipPathAnimation />}

</dialog>
   </>
  );
}
