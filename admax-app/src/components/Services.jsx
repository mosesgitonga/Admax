import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: dodgerblue;
`;

const ServiceItem = styled(motion.div)`
  background: #e01515;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  align-items: center;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }


`;

const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

const ServiceTitle = styled.h2`
  margin-top: 10px;
  color: white;
  text-align: center;
`;

const ServiceDescription = styled.p`
  color: white;
  text-align: center;
  padding: 0 10px;
`;

const ServiceButton = styled(motion.button)`
  margin-top: 10px;
  padding: 10px 20px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.1);
  }
`;

const Services = () => {
  return (
    <Container>
      <ServiceItem
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        id='services'
      >
        <ServiceImage src="compRepair.jpeg" alt="Computer Repairs" />
        <ServiceTitle>Computer Repairs</ServiceTitle>
        <ServiceDescription>
          Our computer repair services cover a wide range of issues including SSD and HDD repairs, laptop screen and battery replacements, keyboard and charging port fixes, BIOS error troubleshooting, and repairs for broken casings and hinges.
        </ServiceDescription>
      </ServiceItem>
      <ServiceItem
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ServiceImage src="refurbished.jpeg" alt="Refurbished Sales" />
        <ServiceTitle>Refurbished Sales</ServiceTitle>
        <ServiceDescription>
          We offer a selection of high-quality refurbished computers, laptops, and other tech devices at competitive prices. Each refurbished item is carefully inspected and restored to ensure optimal performance, providing you with reliable and affordable tech solutions.
        </ServiceDescription>
        <ServiceButton whileHover={{ scale: 1.1 }}>See Products</ServiceButton>
      </ServiceItem>
      <ServiceItem
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ServiceImage src="cctv.jpeg" alt="CCTV installation" />
        <ServiceTitle>CCTV installation</ServiceTitle>
        <ServiceDescription>
          Our professional CCTV installation services offer top-notch security solutions for your home or business. We provide expert installation of high-quality surveillance cameras, ensuring comprehensive coverage and peace of mind.
        </ServiceDescription>
      </ServiceItem>
      <ServiceItem
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ServiceImage src="phoneRepair.jpeg" alt="Smartphone Repairs" />
        <ServiceTitle>Smartphone Repairs</ServiceTitle>
        <ServiceDescription>
          Our smartphone repair services encompass a wide range of issues, including screen replacements, battery and charging port repairs, software troubleshooting, and more. Trust our skilled technicians to provide efficient and reliable solutions to restore your device to optimal performance.
        </ServiceDescription>
      </ServiceItem>
      <ServiceItem
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ServiceImage src="windows.jpeg" alt="Software Installation" />
        <ServiceTitle>Software Installation</ServiceTitle>
        <ServiceDescription>
          Our comprehensive software installation services cover everything from operating systems like Windows and Linux to essential applications such as Microsoft Office, AutoCAD, and more. We ensure smooth installation and configuration, allowing you to focus on your work without technical hassles.
        </ServiceDescription>
      </ServiceItem>
      <ServiceItem
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ServiceImage src="bios.jpeg" alt="BIOS Errors Fixing" />
        <ServiceTitle>BIOS Errors Fixing</ServiceTitle>
        <ServiceDescription>
          We specialize in diagnosing and fixing BIOS errors, ensuring your computer starts up correctly and operates smoothly. Our expert technicians can resolve a wide range of BIOS-related issues, including error messages, boot failures, and configuration problems.
        </ServiceDescription>
      </ServiceItem>
    </Container>
  );
};

export default Services;
