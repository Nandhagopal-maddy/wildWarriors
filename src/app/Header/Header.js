"use client";
import { useEffect, useRef, useState } from "react";
import "./Header.css"


export default function Header() {
    const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

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
    <a href="#" className="logo">BLOG</a>
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

<section className="content">
<p>Add quote if required</p>
  <p align="center"><a href="https://x.com/nodws" className="btn twtr" target="_b">Follow me on Xitter</a>
  </p>
</section>

<dialog ref={dialogRef}>
   <a href="#">Home</a>
 <a href="#">About Us</a>
 <a href="#">Wild Warrior Races</a>
 <a href="#">Wild Warrior X</a>
 <a href="#">Wild Warrior Infra</a>
 <a href="#">Gallery</a>
 <a href="#">Contact Us</a>
</dialog>
   </>
  );
}
