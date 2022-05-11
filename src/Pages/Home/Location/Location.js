import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <div className="location">
      <h1>
        Find us on <span>Google Maps!</span>
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d229.51225931100706!2d91.39178570189712!3d23.01656914869368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37536838e807c277%3A0xcfc0fc315d6f77be!2sMati%20Manzil%20Market!5e0!3m2!1sen!2sbd!4v1652257745404!5m2!1sen!2sbd"
        title="bikeDecorframe"
        height={400}
        //   width="auto"
        style={{ width: '100%' }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Location;
