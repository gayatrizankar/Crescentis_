import React from "react";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div><Navbar/></div>
      <div className="relative bg-gradient-to-b from-black via-purple-900/30 to-black py-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 font-serif font-bold"></div>
        <h1 className="text-5xl  text-yellow-400 relative z-10 font-dm-sans font-serif font-bold">
          Contact Us
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300 relative z-10">
          We’d love to hear from you! Get in touch with us for collaborations,
          inquiries, or just to say hello.
        </p>
      </div>

      {/* Contact Form + Info */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form Section */}
        <div className="bg-black/70 border border-yellow-400/40 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
            Get In Touch
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-yellow-400 outline-none text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-yellow-400 outline-none text-white"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-yellow-400 outline-none text-white"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-yellow-400 outline-none text-white"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
            >
              Send Now
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-4">
            <Phone className="text-yellow-400 w-8 h-8" />
            <div>
              <p className="text-lg font-semibold">Phone Number</p>
              <p className="text-gray-300">+1 (234) 567-890</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="text-yellow-400 w-8 h-8" />
            <div>
              <p className="text-lg font-semibold">Email Address</p>
              <p className="text-gray-300">info@galaxybrand.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MessageSquare className="text-yellow-400 w-8 h-8" />
            <div>
              <p className="text-lg font-semibold">Whatsapp</p>
              <p className="text-gray-300">+1 (987) 654-3210</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-yellow-400 w-8 h-8" />
            <div>
              <p className="text-lg font-semibold">Our Office</p>
              <p className="text-gray-300">2468 Star Blvd, Cosmic City, Galaxy</p>
            </div>
          </div>
          <div className="mt-6">
            <iframe
              title="Office Location"
              src="/maps_b482.jpg"
              className="w-full object-contain h-64 rounded-xl border-2 border-yellow-400"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="relative py-16 text-center bg-gradient-to-b from-black via-purple-900/30 to-black">
        
        <a href="/founders" className="mt-3 px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition">
           OUR FOUNDERS
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-6 text-center text-gray-400">
        <p>© 2025 Galaxy Brand. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
