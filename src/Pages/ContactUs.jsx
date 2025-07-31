import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    error,
    formState: { isSubmitting },
  } = useForm();
  const onsubmit = (data) => {
    console.log(data);
    alert('Thank You '+data.name+ ' For Your Feedback')
  };
  return (
    <div>
      <div className="contact-wrapper">
        <div className="bg-img h-96 w-full">
          <img
            className="h-96 w-full object-cover -z-10 "
            src="./long-bg-2.jpg"
            alt=""
          />
        <span className=' absolute top-10 flex h-96 w-full items-center font-Nunito justify-center text-white text-4xl font-extrabold underline underline-offset-8'>Contact Us</span>

        </div>
        <div className="contact-container p-10 font-Nunito text-xl w-5/6 mx-auto flex flex-wrap md:flex-nowrap gap-4">
          <div className="first-content w-full md:w-1/2">
            <img className="h-full w-full " src="./img1.jpg" alt="" />
          </div>
          <div className="second-content w-full md:w-1/2 flex flex-col gap-10">
            <p className=" underline-offset-8 underline text-4xl font-extrabold decoration-green-500">Get in Touch</p>
            <form
              className="flex flex-col text-xl gap-7"
              onSubmit={handleSubmit(onsubmit)}
            >
              < p htmlFor="name">Enter Your Name</ p>
              <input
                className="bg-gray-200 outline-none p-5 text-black"
                type="text"
                id="name"
                {...register("name")}
              />
              < p htmlFor="email">Enter Your Mail</ p>
              <input
                className="bg-gray-200 p-5 outline-none text-black"
                type="email"
                id="email"
                {...register("email")}
              />
              < p htmlFor="">Enter Your Subject</ p>
              <input
                className="bg-gray-200 p-5 outline-none text-black"
                type="text"
                id="subject"
                {...register("subject")}
              />
              <p htmlFor="">Enter Your Message</p>
              <textarea
                id="w3review"
                name="w3review"
                rows="10"
                className="bg-gray-200 outline-none p-5 text-black"
                {...register("message")}
                cols="50"
              ></textarea>
              <input
                type="submit"
                value="submit"
                className=" hover:bg-green-500 h-14 sm:w-24 w-full cursor-pointer bg-green-400"
                placeholder="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
