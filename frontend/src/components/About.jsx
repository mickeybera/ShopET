import React from 'react';

function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-2 mb-2">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            About Us
          </h1>
          <p className="mt-4 text-gray-600">
            Your one-stop shop for the latest and greatest in technology.
          </p>
        </div>

        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              At TechWorld, our mission is to provide top-quality electronics at competitive prices. Whether you're looking for the latest mobile phones, laptops, headphones, or iPads, we’ve got you covered. We believe in delivering not just products but value and convenience to our customers.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Why Choose Us?</h2>
            <p className="text-gray-600">
              We are passionate about technology and dedicated to offering the best selection of devices to enhance your digital lifestyle. With our wide range of products, expert advice, and exceptional customer service, shopping with us is a breeze. We also offer fast shipping and hassle-free returns to ensure your satisfaction.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Products</h2>
            <p className="text-gray-600">
              From the latest smartphones to cutting-edge laptops, from high-fidelity headphones to sleek iPads, we offer a curated collection of electronics to meet all your needs. We partner with leading brands to bring you the best in technology at prices you’ll love.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Customer Satisfaction</h2>
            <p className="text-gray-600">
              Our customers are at the heart of everything we do. We’re committed to providing a seamless shopping experience, with support available whenever you need it. Your trust is our top priority, and we’re here to ensure that your experience with us is nothing short of excellent.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Get in Touch</h2>
            <p className="text-gray-600">
              Have any questions? Our friendly customer support team is here to help! Whether you need assistance with an order or want to learn more about our products, we’re just a click or call away.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;

