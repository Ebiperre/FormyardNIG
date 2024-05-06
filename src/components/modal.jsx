import React, { useState } from 'react';
import portfolio from '../../src/assets/portfolio/--FORMYARD LIMITED COMPANY PROFILE. (1).pdf';

const Modal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission, e.g., initiate download
    // ...

    // Close the modal after form submission
    onClose();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    validateForm();
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm();
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    validateForm();
  };

  const validateForm = () => {
    // Check if both email and phone number are entered
    if (
      email.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      name.trim() !== ''
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white w-full max-w-md p-6 rounded-md">
          <button
            className="absolute top-0 right-0 p-4"
            onClick={onClose}
            aria-label="Close Modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <h2 className="text-2xl font-bold mb-4">Download Form</h2>
          {/* Your form goes here */}
          <form onSubmit={handleFormSubmit}>
            {/* Your form inputs go here */}
            <h2>Fill out the form to proceed to download</h2>
            <form>
              <div className="mt-1 ">
                <input
                  type="text"
                  name="name"
                  placeholder="full-name"
                  autoComplete="email"
                  required
                  value={name}
                  onChange={handleNameChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="mt-1 ">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="mt-1 mb-2 ">
                <input
                  type="number"
                  name="number"
                  autoComplete="email"
                  required
                  placeholder="phone number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* <div className='w-full '>
                    <label htmlFor="name">
                    </label>
                    <input type="number" placeholder='number' required className='border w-full' />
                </div> */}
            </form>
            <button
              type="button"
              disabled={!isFormValid}
              className={` ${
                isFormValid ? '' : 'opacity-50 pointer-events-none'
              }`}
            >
              <a
                href={portfolio}
                download
                type="submit"
                onClick={onClose}
                className="bg-[#FFDD00] text-black rounded-full px-6 py-2 font-bold cursor-pointer"
              >
                Download
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
