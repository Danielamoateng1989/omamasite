import React from 'react';
import Service from './Services';
import './ServicesSection.css';

const ServicesSection = () => {
  const servicesData = [
    { title: 'Nursing Visits', description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
    { title: 'Home Care  Services', description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
    { title: 'Transportation', description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
    { title: 'Service 4', description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
    
  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
