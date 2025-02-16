import React, { useRef } from 'react';
import './About.css'
import Founder from './founder';
import 'animate.css'
const About = () => {

    const pages = useRef()
    
    let date = new Date();
    let year = date.getFullYear();
    
    function renderPage () {
      const newPage = document.createElement('div');
      newPage.classList.add('page');
    //   newPage.innerHTML = `
    //     <p class="month">${monthName}</p>
    //     <p class="day">${dayNum}</p>
    //     <p class="day-name">${dayName}</p>
    //     <p class="year">${year}</p>
    //   `;
       pages.current?.appendChild(newPage);
    }
    
    // renderPage();
    
    // pages.addEventListener('click', handleClick);

const founders=[
    {
        name:"VIKRAM 'BULLSHARK' MENON",
        image:"https://wildwarriorrace.in/wp-content/uploads/2024/03/vikram.jpg",
        details:"Co-Founder – Wild Warrior",
    },
    {
        name:"SOMDEV DEVVARMAN",
        image:"https://wildwarriorrace.in/wp-content/uploads/2024/03/somdev.jpg",
        details:"Former Indian No. 1. Padma Shri (2018) and Arjuna (2017) Awardee",
    },
    {
        name:"VARUN GUNASEELAN",
        image:"https://wildwarriorrace.in/wp-content/uploads/2024/03/varun.jpg",
        details:"Running and Adventure sports enthusiast, climbed over 60 mountain peaks. Co-Chair of CII Sports & Fitness Summit 2020 & 2021",
    },
    {
        name:"ARUN KARTHIK",
        image:"https://wildwarriorrace.in/wp-content/uploads/2024/03/arun.jpg",
        details:"12+ years in Sports Management & Grassroots Development",
    }
]
    return (
        <div>
            <h1 className="about-heading">
            <div className='shoe-container-left'>
<img className='shoe-item-left about' src={'/images/shoe-6-left.png'} />
<img className='shoe-item-left about' src={'/images/shoe-5-left.png'} />
<img className='shoe-item-left about' src={'/images/shoe-4-left.png'} />
<img className='shoe-item-left about' src={'/images/shoe-3-left.png'} />
<img className='shoe-item-left about' src={'/images/shoe-2-left.png'} />
<img className='shoe-item-left about' src={'/images/show-1-left.png'} />
</div>        
        Rugged fun, for Everyone! 

<div className='shoe-container-right'>
<img className='shoe-item about' src={'/images/shoe-1.png'} />
<img className='shoe-item about' src={'/images/shoe-2-right.png'} />
<img className='shoe-item about' src={'/images/shoe-3-right.png'} />
<img className='shoe-item about' src={'/images/shoe-4-right.png'} />
<img className='shoe-item about' src={'/images/shoe-5-right.png'} />
<img className='shoe-item about' src={'/images/shoe-6-right.png'} />
</div>

            </h1>
            <div className='intro-container'>

            <div className='row'>
                <div className='col-md-4'>
                <div className='about-main'>WE ARE. . .</div>
                <img className='about-images about' src={'/images/about-1-min.jpg'} />
                </div>
                <div className='col-md-4'>
                
                <div className='about-content'>
                Founded by adventure enthusiasts in Chennai,
we’ve been delivering world-class adventure experiences across India and Southeast
Asia since 2018. From Obstacle Course Races and Trail Runs to Hybrid Fitness
Competitions and Custom Group Experiences, we offer it all. Affiliated with World
Obstacle Course & IFASR, we proudly host the Official OCR National Championship
of India.
                </div>            
                </div>
                
                <div className='col-md-4'>
                <img className='about-images about' src={'/images/about-2-min.jpg'} />
                </div>
                </div>  
                <div className='vision-container'>
                <div className='our-vision'>
                Our vision 
                </div>
                <div className='vision-image-container row'>
                    <img className='strength-img col-md-3' src='/images/abs.png'/>
                    <div className='middle-container col-md-6'> <span className='middle-content'>FIT & HEALTHY</span>

                    <div>community through engaging events
                    centered around <br/> <span className='orange'>Obstacle Course Races</span> and Running</div>
                    </div>
                   
                    <img className='strength-img col-md-3' src='/images/healthy.png'/>
                </div>
                 <div className='d-flex community-container'>
                 Building a community of &nbsp;<div className='animate__animated animate__fadeInDown m1'> 1M+ </div> &nbsp;Warriors by 2040
                 </div>

                </div>
                <div className='founders-head twelve'>Meet Our Founders</div>
                <div className='founders-container row'>
                {founders.map((founder,index)=><>
                    <div className='col-md-3' key={index}>
                    <Founder data={founder} key={index} />
                    </div>
                </>)}
                </div>
                  
            
            </div> 
        </div>
    );
};

export default About;