"use client";
import React from 'react';
import './Founder.css'
const Founder = ({data}) => {
    return (
        <div>
<div class="card bg-dark founder-shadow">
  <img class="card-img" src={data.image} alt="Card image" />
  <div class="card-img-overlay founder-shadow">
    <div className='text-founder-container'>
    <h5 class="card-title">{data.name}</h5>
    <p class="card-text text-slide">{data.details}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Founder;