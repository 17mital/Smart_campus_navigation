import React from 'react';
import './Aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="about-intro">
        <h1>About NMIMS Shirpur Campus</h1>
        <p className='aboutinfo' style={{ opacity:'0.8'}}>
          The riverside campus of NMIMS, Shirpur Campus, has a rich tradition of pursuing academic excellence and offers industry-oriented academic programs and excellent research infrastructure to equip its students with the skill set required to succeed in industry. It offers programs in Engineering, Pharmacy, Agriculture, and Textile. The multi-disciplinary nature of programs offered on campus allows it to impart an inter-disciplinary education to all its students.
        </p>
      </section>
      <div>------</div>
      <h2>Address: NMIMS Shirpur Campus</h2>
        <p> Mukesh Patel Technolgy Park,
Village: Babulde Bank of Tapi River,
National Highway No: 3,
Shirpur Dist, Savalade,
Maharashtra 425405</p>
      <section className="campus-map">
        <h2>Our Location</h2>
        
        <div className="map-container">
          <iframe
            title="NMIMS Shirpur Campus Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.760123456789!2d74.84439128948001!3d21.2847602874231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd94f1234567890%3A0xabcdef1234567890!2sNMIMS%20Shirpur%20Campus!5e0!3m2!1sen!2sin!4v1611234567890!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        
      </section>
    </div>
  );
};

export default AboutUs;
