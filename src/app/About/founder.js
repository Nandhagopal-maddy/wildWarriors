import React from 'react';

const Founder = ({data}) => {
    return (
        <div>
            <div className='founder animate__animated animate__fadeInDown'>
            <section>
  <div className="card">
    <div className="card__border"></div>
    <div className="card__border-line"></div>
    <div className="card__inner">
      <div className="card__img">
        <div className="img__athlete">
          <img className='founder-image' src={data.image}alt={data.name} />
        </div>
      </div>
      <div className="card__text">
        <h1 className="name">{data.name}</h1>
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