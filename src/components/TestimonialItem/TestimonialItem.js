import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

const TestimonialItem = (props) => {
  return (
    <div className='ui'>
      <div className='contact-us'>
       <p className="testimonial-item__quote">r offer multiple blocks: intros, sliders, galleries, forms, articles, and so on. Start a project and click on the red plus buttons to see the blocks available for your theme.
			 </p>
			 <div className="testimonial-item__user">
				 <div className="testimonial-item__user_image">avatar image</div>
				 <div className="testimonial-item__user_name">name</div>
			 </div>
    </div>
  );
};

export default TestimonialItem;
