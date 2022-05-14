import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <div className="aboutUsDiv"></div>
      <Container className="aboutUsDetails">
        <h1>
          Welcome To <span className="aboutUsSpan">Bike Decor</span>
        </h1>
        <p>Hello guys! I am from Bike Decor</p>

        <p>
          Welcome to <b>bike decor</b>, your number one source for all things
          related to <b>Inventroy</b>. We're dedicated to giving you the very
          best of Inventroy with a focus on quality and real-world problem
          solution.
        </p>
        <p>
          Bike Decor is a Professional Inventory Platform. Here we will provide
          you only interesting content, which you will like very much. We're
          dedicated to providing you the best of Inventory, with a focus on
          dependability and Stocking product. We're working to turn our passion
          for Inventory into a booming online website.
        </p>
        <p>
          Founded in 2019-09-18 by Bike Decor, bike decor has come a long way
          from its beginnings in <b>feni</b> located in{' '}
          <b>Bangladesh 🇧🇩, People's Republic of Bangladesh</b>. When Bike Decor
          first started out, our passion for Inventory drove us to start our own
          blog/website.
        </p>
        <p>
          We hope you enjoy our Inventory as much as we enjoy offering them to
          you. Please give your support and love. If you have any questions or
          comments, please don't hesitate to contact us. Thanks For Visiting Our
          Site Have a nice day !
        </p>
        <p>Sincerely, Bike Decor</p>
      </Container>
    </div>
  );
};

export default AboutUs;
