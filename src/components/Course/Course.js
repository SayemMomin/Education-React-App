import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartPlus, faCartArrowDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import './Course.css'


const Course = (props) => {
   console.log(props)
    const {img, title, author, price} = props.course
    return (
      <div className="col-lg-4 col-md-6 mb-3">
        <div className="card ">
          <div>
            <img src={img} className="card-img-top" alt="..."/>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">by {author}</p>
            <p>Price: ${price}</p>
          </div>
          <div className="card-footer">
          <button className="bg-primary" onClick={() => props.handleAddCourse(props.course)}><FontAwesomeIcon icon={faCaretRight} />Enroll Now</button>
          </div>
        </div>
      </div>
            
            

    );
};

export default Course;