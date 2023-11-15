import React from "react";

const Contact = () => {
  return (
    <section className="py-10" id="contact">
      <div className="w-[89%] max-w-[1400px] m-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <div className="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left  md:justify-between">
              <div className="mb-6">
                <h1 className="text-base font-medium mb-2">Email Address</h1>
                <a
                  href="mailto:support.yourdomain@gmail.com"
                  className="text-gray-500"
                >
                  support@moonlamps.com
                </a>
              </div>
              <div className="mb-6">
                <h1 className="text-base font-medium mb-2">Phone Number</h1>
                <a href="tel:+(123)45678" className="text-gray-500">
                  (123) 456-789
                </a>
              </div>
              <div className="mb-6">
                <h1 className="text-base font-medium mb-2">Address</h1>
                <p className="text-gray-500">
                  123 Elon Musk parkway drive Raleigh, NC 12302
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <form>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="border border-gray-400 text-gray-900 text-sm block w-full py-3 px-1"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="border border-gray-400 text-gray-900 text-sm block w-full py-3 px-1"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Your Subject"
                  className="border border-gray-400 text-gray-900 text-sm block w-full py-3 px-1"
                />
                <textarea
                  className="border border-gray-400 text-gray-900 text-sm block w-full py-3 px-1"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  rows={3}
                  style={{ resize: "none" }}
                />
                <div className="text-right">
                  <button
                    type="submit"
                    className="py-2 px-4 rounded-lg uppercase cursor-pointer bg-primary text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
