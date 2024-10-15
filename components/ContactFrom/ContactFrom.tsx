"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
function ContactFrom() {
  const form = useRef<any>();
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm("service_8y50w3c", "template_xbeub0q", form.current, {
        publicKey: "OoKOvpmNSXplPGbsY",
      })
      .then(
        (result) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message successful!",
            showConfirmButton: true,
            timer: 2000,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="comments-box bg-success dark:bg-gray-100 px-6 py-8 rounded-lg">
        <form ref={form} onSubmit={sendEmail} id="contact-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="mb-4">
              <label className="block mb-1 text-base font-medium text-white dark:text-gray-700">
                Name
              </label>
              <input
                className=" text-success bg-white w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
                type="text"
                name="user_name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-base font-medium text-white dark:text-gray-700">
                Email
              </label>
              <input
                className="text-success bg-white w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
                type="email"
                name="user_email"
              />
            </div>
            <div className="col-span-2 mb-4">
              <label className="block mb-1 text-base font-medium text-white dark:text-gray-700">
                Subject
              </label>
              <input
                className="text-success bg-white w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Subject"
                type="text"
                name="subject"
              />
            </div>

            <div className="col-span-2 mb-4">
              <label className="block mb-1 text-base font-medium text-white dark:text-gray-700">
                Comment
              </label>
              <textarea
                name="message"
                className="text-success bg-white w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                rows={4}
                placeholder="Type details about your inquiry"
              ></textarea>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors inline-flex items-center"
              >
                Send Message
                <svg
                  className="ml-2 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 11.6665V6.6665H12.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
        <p className="ajax-response mb-0 text-green-500 hidden">
          Thank You! Your message has been sent.
        </p>
      </div>
    </div>
  );
}

export default ContactFrom;
