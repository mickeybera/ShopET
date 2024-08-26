import React from 'react';

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-600">
            We're here to help! Reach out to us anytime.
          </p>
        </div>

        <div className="space-y-6">
          {/* Contact Form */}
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email address"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter the subject"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="mt-1 p-2 w-full h-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Type your message here"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Information */}
          <div className="text-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-700">Get in Touch</h2>
            <p className="mt-4 text-gray-600">You can also reach us through the following:</p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-600"><strong>Email:</strong> support@techworld.com</p>
              <p className="text-gray-600"><strong>Phone:</strong> +1 234 567 890</p>
              <p className="text-gray-600"><strong>Address:</strong> 123 Tech Street, Silicon Valley, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

