import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <div className="location">
      <h4>
        Find us on <span className="locationSpan">Google Maps!</span>
      </h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.195363842657!2d91.38956031496768!3d23.016597984956125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37536954f917b445%3A0x52df01672829ddbc!2sBike%20Decor!5e0!3m2!1sen!2sbd!4v1652283041388!5m2!1sen!2sbd"
        title="bikeDecorframe"
        height={400}
        style={{ width: '100%' }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Location;
