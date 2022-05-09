import React from 'react';
import { Container } from 'react-bootstrap';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy">
      <Container>
        <h1 className="privacyHeading">Privacy Policy</h1>
        <div className="privacyBox">
          <h3>Notice</h3>
          <p>
            for bike decor One of our top priorities, which can be found at, is
            the privacy of our visitors. This paper outlines the types of
            information that collects and records, as well as how we use it.
            Please do not hesitate to contact us if you have any further
            questions or need additional details about our Privacy Policy. This
            Privacy Policy only applies to our online activities and is
            applicable to information exchanged and/or collected by visitors to
            our website. This policy does not extend to data collected outside
            of this website or by other means. The Privacy Policy Generator was
            used to build our Privacy Policy.
          </p>
        </div>
        <div className="privacyBox">
          <h3>Consent</h3>
          <p>
            Through using our website https://bike-decor.web.app, you consent to
            and adhere to the terms of our Privacy Policy.
          </p>
        </div>
        <div className="privacyBox">
          <h3>Information we collect</h3>
          <p>
            The personal information you are asked to provide, as well as the
            reasons for doing so, will be explained to you at the time you are
            asked to do so. If you contact us directly, we can obtain additional
            information about you, such as your name, email address, phone
            number, the contents of any message and/or attachments you send us,
            and any other information you choose to provide.
          </p>
        </div>
        {/*  */}
      </Container>
    </div>
  );
};

export default Privacy;
