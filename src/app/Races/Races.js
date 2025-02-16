import React, { useEffect, useRef, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './Races.css'


const Races = () => {
    const races = [
      {
        name: 'Encounter 6.0',
        oneLineHead:'Wild Warrior Encounter 6.0',
        miniDesc: 'Indoor hybrid fitness challenge',
        Description: 'One-of-a-kind fitness competition consisting of 5 fitness tasks & 5 special WW obstacles',
        priceStartsFrom: '₹900',
        pricePerhead: '',
        thingsToBring: '',
        criteria: [
          { name: 'age', value: '' },
        ],
        registrationDate: '',
        eventDate: '9th March, 8:00 AM to 7:00 PM',
        registerLink: 'https://www.townscript.com/e/wild-warrior-encounter-60-302244',
        locationLink: 'https://g.co/kgs/z2V3TTz',
        locationAddress: 'simpleSTRONG Fitness Academy, MRC Nagar',
        receivables: 'Finisher certificate & Energy drink',
        categories: 'Men, Women, Mixed Doubles',
        upcoming:true,
        prizeMoney:'₹50,000',
        image:'/images/encounter.png'
      },
      {
        name: 'Kodaikanal Half Marathon 2025',
        oneLineHead:'Kodaikanal Half Marathon 2nd Edition',
        miniDesc: 'Kodaikanal Half Marathon 2nd Edition',
        Description: 'Be a part of a special summer mountain running event in the Princess of hills Kodaikanal',
        priceStartsFrom: '₹800',
        pricePerhead: '',
        thingsToBring: '',
        criteria: [
          { name: 'age', value: '' },
        ],
        registrationDate: '',
        eventDate: '11th May, 5:00 AM to 9:00 AM',
        registerLink: 'https://www.townscript.com/e/kodaikanal-half-marathon-2025-2nd-edititon-443243',
        locationLink: '',
        locationAddress: '',
        receivables: 'WW Finisher Medal, Race T-Shirt, Race Photos, Hydration & Refreshments, Official Race Timing Certificate',
        categories: ['5 km Kids Run', '10 km Fun Run', '21k Championship Race'],
        upcoming:false,
        prizeMoney:'',
        image:'/images/mountain-climb.jpg'
      },
    ];
    const [isFlipped, setIsFlipped] = useState([false,false]);
    const setFlip=(index)=>{
      console.log(index);
      let temp=[...isFlipped];
      temp[index]=!temp[index];
      setIsFlipped(temp);
    }
    useEffect(() => {
      }, []);

    return (
       <>
       <div
        className='races-container'>
          <div className='race-head d-flex'>Our Upcoming Events <div className='calendar'></div></div>
          <div className='row'>
          <div className='upcoming-race col-md-6'>
          <ReactCardFlip isFlipped={isFlipped[0]} flipDirection="horizontal">
            {/* front */}
     <div className='upcoming-card-container'>
     <div className='card races-card'>
        <img src='/images/encounter.png' className='upcoming-poster' />
        <div>
        </div>
        <div className='ur-race-name'>{races[0].name}</div>
        <div> {races[0].miniDesc} </div>
        <div className='d-flex justify-content-center'>
          <a target='_blank' className='location-name' href={races[0].locationLink}> {races[0].locationAddress} </a> 
          &nbsp;
          <img className='race-location' src='/location.svg' />
        </div>
      </div>
     </div>
     {/* back */}
     <div className='upcoming-card-container'>
     <div className='card races-card back'>

        <div className='race-inner-card'>
        
        <div className='big ur-race-name'>{races[0].oneLineHead}</div>
        <div className='race-description'> {races[0].Description} </div>
        <div>
          Grab your chance to Win
          <div className='prize-money'>
          <span>{races[0].prizeMoney }</span>
          </div>
        </div>
        <div>
          <strong>Participants</strong> recieve<span className='orange'>{races[0].receivables} </span>
        </div>
       
        <div className=''>
          Entry Starts from <span className='orange'>{races[0].priceStartsFrom}</span>
        </div>
        <div>
          Date: <span className='orange'>{races[0].eventDate}</span> 
        </div>
        <div className='d-flex justify-content-center'>
          <a target='_blank' className='location-name' href={races[0].locationLink}> {races[0].locationAddress} </a> 
          &nbsp;
          <img className='race-location' src='/location.svg' />
        </div>
      </div>
      </div>
     </div>
     </ReactCardFlip>
    <div className='card-footer'>
    <div className='race-button' onClick={()=>setFlip(0)}>See more</div>
    <div className='race-button'><a target='_blank'  href={races[0].registerLink}>Register</a></div>
    </div>
        </div>
        
        <div className='upcoming-race col-md-6'>
        <ReactCardFlip isFlipped={isFlipped[1]} flipDirection="horizontal">
          {/* front */}
     <div className='upcoming-card-container'>
     <div className='card races-card'>
        <img src='/images/mountain-climb.jpg' className='upcoming-poster' />
        <div>
        </div>
        <div className='ur-race-name'>{races[1].name}</div>
        <div> {races[1].Description} </div>
        {races[1].locationAddress != '' && races[1].locationLink != '' &&<div className='d-flex justify-content-center'>
          <a target='_blank' className='location-name' href={races[1].locationLink}> {races[1].locationAddress} </a> 
          &nbsp;
          <img className='race-location' src='/location.svg' />
        </div>}
      
      </div>
     </div>
     {/* back */}
     <div className='upcoming-card-container'>
     <div className='card races-card back'>
        {/* <img src='/images/encounter.png' className='upcoming-poster' /> */}
        <div>
        </div>
        <div className='big ur-race-name'>{races[1].oneLineHead}</div>
        <div className='race-description'> {races[1].Description} </div>
        {races[1].prizeMoney && <div>
          Grab your chance to Win
          <div className='prize-money'>
          <span>{races[1].prizeMoney }</span>
          </div>
        </div>}
        <div>
          <strong>Participants</strong> recieve<span className='orange'>{races[1].receivables} </span>
        </div>
       
        <div className=''>
          Entry Starts from <span className='orange'>{races[1].priceStartsFrom}</span>
        </div>
        <div>
          Date: <span className='orange'>{races[1].eventDate}</span> 
        </div>
        <div className='d-flex justify-content-center'>
          <a target='_blank' className='location-name' href={races[1].locationLink}> {races[1].locationAddress} </a> 
          &nbsp;
          <img className='race-location' src='/location.svg' />
        </div>
      </div>
     </div>
     
     </ReactCardFlip>
     <div className='card-footer'>
    <div className='race-button' onClick={()=>setFlip(1)}>See more</div>
    
    {/* <div className='race-button'>Register</div> */}
    </div>
        </div>
        {/* <div className='col-md-6'>
        {races.map((item, index) => {
            if(!item.upcoming && index < 4)
                return (
                    <>
                        <div
                            className='race-card' 
                            key={index}
                        >
                            {item.name}
                        </div>
                    </>
                )
            
        })} 
        </div> */}
        </div>
        </div>

       </>
        
    );
};

export default Races;