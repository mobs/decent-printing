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
    <div className="bg-[#1a1e5d] lg:flex block overflow-hidden mt-16 md:ml-32 md:mr-32 ">
      {/* <div className="flex-1 bg-gray-300 p-4 transform -skew-x-6"> */}
      <img src={contact} alt="Image" className="object-cover" />
      {/* </div> */}

      <div className="bg-[#1a1e5] text-white mt-16">
        <p
          className="lg:text-left text-center text-3xl font-bold lg:ml-16 mt-4 w-full"
          id="message"
        >
          {" "}
          Feel free to connect with us!!!{" "}
        </p>
        <div className="md:flex justify-center items-center md:m-0 m-2">
          <form
            action="#"
            onSubmit={handleSubmit}
            className="mt-8 space-y-8 md:w-96 w-auto md:mb-4"
          >
            <div>
              <label for="email" className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full"
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
                className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full"
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
                className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full"
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
