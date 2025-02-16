import React, { useEffect, useRef, useState } from 'react';
import './Races.css'


const Races = () => {
    const races = [
      {
        name: 'Encounter 6.0',
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
        prizeMoney:'₹50,000'
      },
      {
        name: 'Kodaikanal Half Marathon 2025',
        miniDesc: 'Kodaikanal Half Marathon 2nd Edition',
        Description: 'Be a part of a special summer mountain running event in the Princess of hills Kodaikanal',
        priceStartsFrom: 'Ticket prices start at ₹800',
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
      },
      {
        name: 'Kodaikanal Half Marathon 2025',
        miniDesc: 'Kodaikanal Half Marathon 2nd Edition',
        Description: 'Be a part of a special summer mountain running event in the Princess of hills Kodaikanal',
        priceStartsFrom: 'Ticket prices start at ₹800',
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
      },
      {
      name: 'Kodaikanal Half Marathon 2025',
      miniDesc: 'Kodaikanal Half Marathon 2nd Edition',
      Description: 'Be a part of a special summer mountain running event in the Princess of hills Kodaikanal',
      priceStartsFrom: 'Ticket prices start at ₹800',
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
    },
    {
      name: 'Kodaikanal Half Marathon 2025',
      miniDesc: 'Kodaikanal Half Marathon 2nd Edition',
      Description: 'Be a part of a special summer mountain running event in the Princess of hills Kodaikanal',
      priceStartsFrom: 'Ticket prices start at ₹800',
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
    },
    ];
    useEffect(() => {
      }, []);

    return (
       <>
       <div
        className='races-container'>
          <div className='race-head d-flex'>Our Upcoming Events <div className='calendar'></div></div>
          <div className='row'>
          <div className='upcoming-race col-md-6'>
     <div className='upcoming-card-container'>
     <div className='card p-2'>
        <img src='/images/encounter.png' className='upcoming-poster' />
        <div className='ur-race-name'>{races[0].name}</div>
        <div className='mini-desc'>{races[0].miniDesc}</div>
        <div>Mark your calendar on {races[0].eventDate}</div>
        <div className='prize-money'>Take a chance to win {races[0].prizeMoney}</div>
        <div>Grab your entry for {races[0].priceStartsFrom} [limited slots] </div>
        <div>Categories: {races[0].categories} </div>
        <div>
          <a target='_blank' href={races[0].locationLink}> {races[0].locationAddress} </a>
        </div>
      </div>
     </div>
        </div>
        <div className='col-md-6'>
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
        </div>
        </div>
        </div>

       </>
        
    );
};

export default Races;