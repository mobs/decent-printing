import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../constants/ProductData";

const Checkout = () => {
  const { productTitle } = useParams();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [body, setBody] = useState(
    "Hello,\n\nI am interested in your product and would like more information.\n\nBest regards,\n[Your Name]\n[Your Contact]"
  );

  const product = productData.find((p) => p.title === productTitle);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Regarding Your Product ${productTitle}`
    );
    const recipient = "enquiry@decentppdxb.ae";
    const body = encodeURIComponent(
      body + `\n\nContact Details: ${name}\n ${contact}`
    );

    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    clear();
  };

  const clear = () => {
    setName("");
    setContact("");
    setBody(
      "Hello,\n\nI am interested in your product and would like more information.\n\nBest regards,\n[Your Name]\n[Your Contact]"
    );
  };

  return (
    <div className="mb-8">
      <div className="h-16 w-screen flex items-center justify-center bg-gray-200 text-white">
        <span className="text-gray-600"> Home </span>
        <hr className="m-2 mt-4 h-px w-8 bg-black border-0" />
        <span className="text-black"> Checkout </span>
      </div>

      <div className="lg:flex md:m-32 ml-8 mr-8 justify-between">
        <div className="md:flex gap-8 md:h-64">
          <img className="h-48 w-48 rounded" src={product.image} />
          <div className="flex flex-col w-72 gap-4">
            <p className="flex text-lg font-bold"> {product.title} </p>
            <p className="text-lg text-gray-500">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              tristique malesuada elit, ut facilisis tellus elementum id. Nullam
              id consectetur diam. Pellentesque nec tristique sapien etiam non
              augue lacus{" "}
            </p>
          </div>
        </div>

        <div>
          <div className="h-full w-px bg-gray-400"> </div>
        </div>

        <div className="md:flex justify-center lg:mt-0 mt-8">
            
          <form
            action="#"
            onSubmit={handleSubmit}
            className="space-y-8 md:w-96 w-auto"
          >
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Your Name
              </label>
              <input
                type="name"
                id="name"
                className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full"
                placeholder="First Name + Last Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="contact"
                className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full"
                placeholder="Enter your contact number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="10"
                value={body}
                className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full"
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-500 sm:w-fit hover:bg-primary-800"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
