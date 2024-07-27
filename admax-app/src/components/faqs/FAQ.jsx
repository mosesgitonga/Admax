import React, { useState } from "react";
import "./FAQ.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQS = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What services does Admax Tech Solutions provide?",
            answer: "We repair computers, sell new and refurbished computers, and offer accessories. Basically, if it's tech and it needs fixing, we've got your back!"
        },
        {
            question: "Where are you located?",
            answer: "We are in the heart of Nyeri Town. Just follow the sound of happy, working computers and you'll find us."
        },
        {
            question: "Do you offer home service repairs?",
            answer: "Absolutely! If your computer is feeling too lazy to leave the house, we can come to you. Just don’t offer it a cup of coffee, it might short-circuit."
        },
        {
            question: "Can you fix a computer that’s been run over by a car?",
            answer: "Well, let's just say we can work miracles, but we recommend avoiding this particular scenario. But hey, bring it in, we'll see what we can do!"
        },
        {
            question: "Do you sell gaming laptops?",
            answer: "Yes, we do! And they come with a free upgrade to your gaming skills... Just kidding, but they are pretty awesome machines."
        },
        {
            question: "Do you offer any warranties on your products?",
            answer: "Of course! We believe in our products. If they could talk, they'd say 'We're here to stay!' but they can't, so we'll just give you a warranty instead."
        },
        {
            question: "Can you recover lost data?",
            answer: "We can recover data from most situations, including accidental deletions, crashes, and those 'Oops' moments. Just don’t expect us to retrieve your high school romance files from the depths of the internet."
        }
    ];

    const toggleFAQ = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faqs-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faqs">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
                        <div className="faq-question">
                            {faq.question}
                            <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} className="fontIcon" />
                        </div>
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQS;
