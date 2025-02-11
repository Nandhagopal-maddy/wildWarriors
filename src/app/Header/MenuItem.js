import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css'
import ClipPathAnimation from './ClipPathAnimation';

const MenuItem = ({ label, clickHandle, selectedMenu }) => {
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