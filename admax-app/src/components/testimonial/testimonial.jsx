import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import "./testimonial.css";

const testimonials = [
  {
    quote: "This product exceeded my expectations. The quality is unmatched!",
    name: "Moses Gitonga ",
    title: "Software developer",
    image: "moses.jpg",
    rating: 5
  },
  {
    quote: "Fantastic service and support. Highly recommend to everyone.",
    name: "John Karuki",
    title: "Business Owner",
    image: "johnsmith.jpeg",
    rating: 4
  },
  {
    quote: "A great experience from start to finish. Truly exceptional.",
    name: "Alice Nyambura",
    title: "Freelancer",
    image: "alice.jpeg",
    rating: 5
  }
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-wrapper">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon left" />
            <p className="testimonial-quote">{testimonial.quote}</p>
            <FontAwesomeIcon icon={faQuoteRight} className="quote-icon right" />
            <div className="testimonial-profile">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div className="testimonial-info">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-title">{testimonial.title}</p>
                <div className="testimonial-rating">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
