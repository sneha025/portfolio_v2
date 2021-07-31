import React, { useEffect, useState } from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    feedback: "",
  });
  const { firstName, lastName, email, feedback } = data;
  const ID = process.env.REACT_APP_EMAIL_JS_API_ID;

  useEffect(() => {
    init(ID);
  });

  const handleOnChange = (name) => (e) => {
    setData({ ...data, [name]: e.target.value });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    const serviceID = "service_o7mb6yp";
    const templateID = "template_w15pl4m";
    const templateParams = {
      to_name: "ADMIN",
      from_name: `${firstName} ${lastName}`,
      message: feedback,
      user_email: email,
    };
    emailjs.send(serviceID, templateID, templateParams, ID).then(
      (response) => {
        alert("Feedback Sent");
        console.log(response.status, response.text);
      },
      (err) => {
        console.log("Failed...", err);
        alert("Feedback Failed");
      }
    );
    setData({ ...data, firstName: "", lastName: "", email: "", feedback: "" });
  };

  return (
    <div className=" mt-10 ">
      <form
        className=" flex flex-col justify-center "
        onSubmit={handleOnSubmit}
      >
        <input
          className="p-4 my-6 pl-6 shadow-md rounded-xl placeholder-gray-500 border min-w-full min-h-full border-1 tracking-wide  focus:outline-none placeholder-opacity-75 text-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent ... "
          placeholder="first Name*"
          value={firstName}
          onChange={handleOnChange("firstName")}
        />
        <input
          className="p-4 my-6 pl-6 shadow-md rounded-xl placeholder-gray-500 border min-w-full min-h-full border-1 tracking-wide  focus:outline-none placeholder-opacity-75 text-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent ... "
          placeholder="Last Name*"
          value={lastName}
          onChange={handleOnChange("lastName")}
        />
        <input
          className="p-4 my-6 pl-6 shadow-md rounded-xl placeholder-gray-500 border min-w-full min-h-full border-1 tracking-wide  focus:outline-none placeholder-opacity-75 text-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent ... "
          placeholder="jonh@email.com*"
          value={email}
          onChange={handleOnChange("email")}
        />
        <input
          className="p-4 pb-20 my-6 pl-6 shadow-md rounded-xl placeholder-gray-500 border min-w-full min-h-full border-1 tracking-wide  focus:outline-none placeholder-opacity-75 text-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent ... "
          placeholder="How can i help you?*"
          value={feedback}
          onChange={handleOnChange("feedback")}
        />
      </form>
      <div className="flex justify-end">
        <span className="p-2 ">
          <button
            type="submit"
            className="bg-purple-600  font-semibold text-white py-2 px-4 border border-purple-600
 hover:border-transparent rounded  duration-150"
            onClick={handleOnSubmit}
          >
            Get in Touch
          </button>
        </span>
      </div>
    </div>
  );
};
export default ContactForm;
