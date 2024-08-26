import React from 'react';
import { ReactTyped } from 'react-typed';

function Home() {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className="md:w-1/2 order-2 md:order-1">

                <div className='flex space-x-1 justify-center mt-2 mx-3 text-2xl md:text-4xl'>
                    <h1>Let buy</h1>
                    <ReactTyped className='text-yellow-600 font-bold'
                        strings={["Smartphone", "Headphone", "Laptop"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                    />
                </div>
                <p className='mt-12 mx-5 text-sm md:text-md text-justify'>Welcome to TechShop, your one-stop destination for cutting-edge mobile phones, high-performance laptops, and immersive headphones. Whether you’re looking for the latest smartphone with advanced features, a powerful laptop for work or play, or crystal-clear headphones that elevate your audio experience, we’ve got you covered. Our carefully curated collection features top brands and the newest models, ensuring that you always find the perfect tech gear to meet your needs. Explore our selection today and stay ahead with the best in technology.</p>
                <div>
                    
                </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
                <img className='mt-3 rounded-md w-250 h-245' src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg?t=st=1724476570~exp=1724480170~hmac=6c3165ec60e2b92c51398d23b35fd6e40735fa398f3c32492f5fbacb255a547d&w=900" alt="" />
            </div>
        </div>
    );
}

export default Home;

