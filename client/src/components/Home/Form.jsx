import React, { useState, useEffect } from "react";
import { contact } from "../../constants/Images";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = "enquiry@decentppdxb.ae";

    const mailtoLink = `mailto:${recipient}?subject=${formData.subject}&body=${formData.message}`;
    window.location.href = mailtoLink;

    clear();
  };

  const clear = () => {
    setFormData({ email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-[#1a1e5d] lg:flex block overflow-hidden mt-16 md:ml-32 md:mr-32 justify-between ">
      {/* <div className="flex-1 bg-gray-300 p-4 transform -skew-x-6"> */}
      <img src={contact} alt="Image" className="lg:w-[40%] md:w-[100%] w-auto"  />
      {/* </div> */}

      <div className="bg-[#1a1e5] text-white mt-8 lg:mr-[15%]">
        <p
          className="text-left text-3xl font-bold md:ml-4 ml-4 mt-4 w-full"
          id="message"
        >
          If You Have Any Questions
        </p>
        <p className="text-left text-3xl font-bold md:ml-4 ml-4 mt-4 w-full"
          id="message">
          Connect With Us
        </p>
        <div className="lg:flex justify-center items-center lg:m-0 m-2">
          <form
            action="#"
            onSubmit={handleSubmit}
            className="mt-8 space-y-8 w-full md:mb-4"
          >
            <div>
              <label for="email" className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                className="shadow-sm bg-[#1a1e5d] text-white border-2 border-gray-200 text-sm rounded-lg block p-2 w-full"
                placeholder="name@example.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label for="subject" className="block mb-2 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                className="shadow-sm bg-[#1a1e5d] text-white text-sm border-2 border-gray-200 rounded-lg block p-2 w-full"
                placeholder="Let us know how we can help you"
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                value={formData.message}
                className="shadow-sm bg-[#1a1e5d] text-white text-sm border-2 border-gray-200 rounded-lg block p-2 w-full"
                placeholder="Leave a comment..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-bold text-center text-black rounded-lg bg-white sm:w-fit hover:bg-red-500 hover:text-white"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
