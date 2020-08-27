import React from 'react';
import fakeEducationData from '../../Fakedata/EducationData'
import { useState } from 'react';
import './Shop.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [cart, setCart] = useState([])
    const handleAddCourse = (course) => {
        const newCart = [...cart, course]
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="course-container mt-3">
                {
                    fakeEducationData.map(course => 
                    <Course 
                        handleAddCourse = {handleAddCourse}
                        key = {course.id}
                        course= {course}>
                    </Course> )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;