import React from 'react'
import { FaLinkedin, FaFacebookF, FaTwitter } from 'react-icons/fa';

function Contact() {
  return (
   <>
   <div className="bg-gray-100 min-h-screen flex justify-center items-center my-24">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Let’s Work Together</h2>
            <p className="mb-2">pbwebcrafts22@gmail.com</p>
            <p className="mb-2">Phone: +91-8975434272,</p>
            <p className="mb-6">+91-8767487235</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-600 hover:text-purple-600">
                <FaLinkedin size={24} />
              </a>
              <a href="https://facebook.com" className="text-gray-600 hover:text-purple-600">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-purple-600">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="md:w-1/2">
            <form className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <textarea
                  placeholder="Leave us a message..."
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

   </>
  )
}

export default Contact