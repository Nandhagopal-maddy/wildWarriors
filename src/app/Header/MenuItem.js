import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css'
import ClipPathAnimation from './ClipPathAnimation';

const MenuItem = ({ label, clickHandle, selectedMenu }) => {
    const [isActive, setIsActive] = useState(false);
    useEffect(()=>{
        console.log(label, clickHandle, selectedMenu)
    })


    const setId=(val)=>val.replaceAll(' ','-')
    return (
        <>
        <div onClick={()=>clickHandle(label)} className={selectedMenu==label?'brush-wrap':''}>
            <p>
                <a href="#">{label}</a>
            </p>
        </div>
        
        </>
        
    );
};


export default MenuItem;