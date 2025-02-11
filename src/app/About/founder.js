import React from 'react';

const Founder = ({data}) => {
    return (
        <div>
            <div className='founder animate__animated animate__fadeInDown'>
            <section>
  <div class="card">
    <div class="card__border"></div>
    <div class="card__border-line"></div>
    <div class="card__inner">
      <div class="card__img">
        <div class="img__athlete">
          <img className='founder-image' src={data.image}alt={data.name} />
        </div>
      </div>
      <div class="card__text">
        <h1 class="name">{data.name}</h1>
      </div>
    </div>
  </div>
  <div className='founder-details'>
        {data.details}
      </div>
</section>
                </div>
        </div>
    );
};

export default Founder;