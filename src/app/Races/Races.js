import React, { useEffect, useRef, useState } from 'react';
import './Races.css'
import Slider from "react-slick";

const Races = () => {
    const [currentSet,setCurrentSet]=useState(0);
    const races = [
        {
            name: 'Encounter 6.0',
            miniDesc: 'Wild Warrior Encounter 6.0',
            Description: 'One-of-a-kind fitness competition consisting of 5 fitness tasks & 5 special WW obstacles',
            priceStartsFrom: 'Ticket prices start at Rs. 900',
            pricePerhead: '',
            thingsToBring: '',
            criteria: [
                { name: 'age', value: '' },
            ],
            registrationDate: '',
            eventDate: '9th March, 8:00 AM to 7:00 PM',
            registerLink: 'https://www.townscript.com/e/wild-warrior-encounter-60-302244',
            locationLink: 'https://g.co/kgs/z2V3TTz',
            locationAddress: '',
            receivables: 'Finisher certificate & Energy drink',
            categories: ''
        },
        {
            name: 'Kodaikanal Half Marathon 2025',
            miniDesc: 'Kodaikanal Half Marathon 2nd Edition',
            Description: 'Be a part of a special summer mountain running event in the Princess of hills Kodaikanal',
            priceStartsFrom: 'Ticket prices start at Rs. 800',
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
            categories: ['5 km Kids Run', '10 km Fun Run', '21k Championship Race']
        },
        {
            name: 'Chennai Beach Run 2025',
            miniDesc: 'Chennai Beach Run 3rd Edition',
            Description: 'Experience the thrill of running along the scenic Marina Beach in Chennai',
            priceStartsFrom: 'Ticket prices start at Rs. 700',
            pricePerhead: '',
            thingsToBring: '',
            criteria: [
                { name: 'age', value: '' },
            ],
            registrationDate: '',
            eventDate: '15th June, 6:00 AM to 10:00 AM',
            registerLink: 'https://www.townscript.com/e/chennai-beach-run-2025-3rd-edition-123456',
            locationLink: '',
            locationAddress: '',
            receivables: 'Finisher Medal, T-Shirt, Refreshments',
            categories: ['5 km Fun Run', '10 km Competitive Run']
        },
        {
            name: 'Bangalore Ultra Marathon 2025',
            miniDesc: 'Bangalore Ultra Marathon 5th Edition',
            Description: 'Challenge yourself with the ultimate endurance race in Bangalore',
            priceStartsFrom: 'Ticket prices start at Rs. 1000',
            pricePerhead: '',
            thingsToBring: '',
            criteria: [
                { name: 'age', value: '' },
            ],
            registrationDate: '',
            eventDate: '20th July, 4:00 AM to 4:00 PM',
            registerLink: 'https://www.townscript.com/e/bangalore-ultra-marathon-2025-5th-edition-654321',
            locationLink: '',
            locationAddress: '',
            receivables: 'Finisher Medal, T-Shirt, Hydration & Refreshments, Timing Certificate',
            categories: ['25 km', '50 km', '75 km', '100 km']
        },
        {
            name: 'Hyderabad City Run 2025',
            miniDesc: 'Hyderabad City Run 4th Edition',
            Description: 'Run through the historic streets of Hyderabad and explore the city like never before',
            priceStartsFrom: 'Ticket prices start at Rs. 600',
            pricePerhead: '',
            thingsToBring: '',
            criteria: [
                { name: 'age', value: '' },
            ],
            registrationDate: '',
            eventDate: '10th August, 5:30 AM to 9:30 AM',
            registerLink: 'https://www.townscript.com/e/hyderabad-city-run-2025-4th-edition-789012',
            locationLink: '',
            locationAddress: '',
            receivables: 'Finisher Medal, T-Shirt, Refreshments',
            categories: ['5 km Fun Run', '10 km Competitive Run', '21 km Half Marathon']
        },
        {
            name: 'Mumbai Midnight Marathon 2025',
            miniDesc: 'Mumbai Midnight Marathon 1st Edition',
            Description: 'Experience the magic of running through the streets of Mumbai at midnight',
            priceStartsFrom: 'Ticket prices start at Rs. 1200',
            pricePerhead: '',
            thingsToBring: '',
            criteria: [
                { name: 'age', value: '' },
            ],
            registrationDate: '',
            eventDate: '5th September, 11:00 PM to 5:00 AM',
            registerLink: 'https://www.townscript.com/e/mumbai-midnight-marathon-2025-1st-edition-345678',
            locationLink: '',
            locationAddress: '',
            receivables: 'Finisher Medal, T-Shirt, Refreshments, Timing Certificate',
            categories: ['10 km', '21 km Half Marathon', '42 km Full Marathon']
        },
        {
            name: 'Delhi Winter Run 2025',
            miniDesc: 'Delhi Winter Run 2nd Edition',
            Description: 'Join us for a refreshing winter run in the heart of Delhi',
            priceStartsFrom: 'Ticket prices start at Rs. 500',
            pricePerhead: '',
            thingsToBring: '',
            criteria: [
                { name: 'age', value: '' },
            ],
            registrationDate: '',
            eventDate: '20th December, 6:00 AM to 10:00 AM',
            registerLink: 'https://www.townscript.com/e/delhi-winter-run-2025-2nd-edition-901234',
            locationLink: '',
            locationAddress: '',
            receivables: 'Finisher Medal, T-Shirt, Refreshments',
            categories: ['5 km Fun Run', '10 km Competitive Run']
        },
    ];
    const itemRefs = useRef([]);
    const parentRef = useRef(null);
    const childRef = useRef(null);
    const [offset, setOffset] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [boundaryEffect, setBoundaryEffect] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);

    const bounds = useRef({ min: -284*2.5, max: 0 });
    
    const startX = useRef(0);
    const lastX = useRef(0);
    const lastTime = useRef(0);
    const totalItems = races.length; // Number of elements in carousel
    useEffect(() => {
        const updateBounds = () => {
            if (itemRefs.current[0] && parentRef.current) {
                const newItemWidth = itemRefs.current[0].offsetWidth;
                setItemWidth(newItemWidth);
                bounds.current = {
                  min: 0,
                  max: (totalItems - 1) * newItemWidth, // Ensuring last item is fully visible
                };
                setOffset(currentIndex * newItemWidth); // Adjust offset dynamically
              }
        
          };
        updateBounds();
        window.addEventListener("resize", updateBounds);
        return () => window.removeEventListener("resize", updateBounds);
      }, []);

      const handleNext = () => {
        if (currentIndex < totalItems - 1) {
          setCurrentIndex(currentIndex + 1);
          setOffset((currentIndex + 1) * itemWidth);
        }
      };
    
      const handlePrev = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
          setOffset((currentIndex - 1) * itemWidth);
        }
      };
    

      const startDrag = (clientX) => {
        console.log(bounds)
        setIsDragging(true);
        startX.current = clientX;
        lastX.current = clientX;
        lastTime.current = Date.now();
        setVelocity(0);
      };
      const stopDrag = () => {
        setIsDragging(false);

        // Snap back to boundary if dragged too far
        let momentum = velocity * 100; // Control inertia effect
        let finalOffset = offset + momentum;
    
        // Ensure snapping back to bounds
        if (finalOffset < bounds.current.min) {
          finalOffset = bounds.current.min;
        } else if (finalOffset > bounds.current.max) {
          finalOffset = bounds.current.max;
        }
    
        setOffset(finalOffset);
        setBoundaryEffect(1);
      }

      const moveDrag = (clientX) => {
       if (!isDragging) return;

    const deltaX = clientX - startX.current;
    const now = Date.now();
    const timeDiff = now - lastTime.current;
    let newOffset = offset + deltaX;
    // Soft boundary effect
    if (newOffset < bounds.current.min - 40) {
        setBoundaryEffect(0.9);
        newOffset = bounds.current.min - 20;
      } else if (newOffset > bounds.current.max + 40) {
        setBoundaryEffect(0.9);
        newOffset = bounds.current.max + 20;
      } else {
        setBoundaryEffect(1);
      }

    setOffset(newOffset);
    setVelocity((clientX - lastX.current) / timeDiff);
    lastX.current = clientX;
    lastTime.current = now;
    startX.current = clientX;
      };
    return (
       <>
       <div
        ref={parentRef}
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => moveDrag(e.clientX)}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => {
        // Prevent scrolling during drag
          moveDrag(e.touches[0].clientX);
        }}
        onTouchEnd={stopDrag} 
        className='races-container'>
       {currentIndex > 0 && <div className='race-btn left-0'>
            <img src='/icons/race-left-arrow.svg' className='race-icon' alt='left-arrow' onClick={handlePrev} />
        </div>}
        {races.map((item, index) => {
                return (
                    <>
                        <div
                                ref={childRef}
                                style={index!=0 && index!=races.length-1?{ transform: `translateX(${offset}px)` }:{
                                    transform: `translateX(${offset}px) scale(${boundaryEffect})`,
                                    transition: isDragging ? "none" : "transform 1s ease-out",
                                  }}
                            className='race-card' 
                            key={index}
                        >
                            {item.name}
                        </div>
                    </>
                )
            
        })} 
        {currentIndex < races.length - 3 && <div className='race-btn right-0'>
            <img src='/icons/race-right-arrow.svg' className='race-icon' alt='left-arrow' onClick={handleNext} />
        </div>}
        </div>

       </>
        
    );
};

export default Races;