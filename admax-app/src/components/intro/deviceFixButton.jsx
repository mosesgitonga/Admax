import React from 'react';
import './deviceFixButton.css';
import { motion } from 'framer-motion';

class RippleButton extends React.Component {
  constructor(props) {
    super(props);
    this.createRipple = this.createRipple.bind(this);
  }

  createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 10;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  render() {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="button"
        onClick={(e) => {
          this.createRipple(e);
          window.open('https://wa.me/254711279189?text="Hello, \nI would like to get my device fixed."', '_blank');
        }}
      >
        Get Your Device Fixed
      </motion.button>
    );
  }
}

export default RippleButton;
