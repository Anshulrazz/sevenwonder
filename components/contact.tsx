"use client";

import { Linkedin, SendIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const teamMembers = [
    {
      name: "John Deo",
      phone: "+91 98995 00475",
      image: "https://wallpaperaccess.com/full/5496283.jpg",
      linkedin: "https://www.linkedin.com/in/kamaljeet-singh"
    },
    {
      name: "Elan",
      phone: "+91 8600151877",
      image: "https://wallpapercrafter.com/desktop2/789452-women-face-portrait-depth-of-field-beauty-beautiful.jpg",
      linkedin: "https://www.linkedin.com/in/aakash-panpalia"
    }
  ];

  return (
    <section id="contact" className="container p-8 py-4 mx-auto">
      <h2 className="mb-2 text-3xl font-bold">Contact Us</h2>
      <p className="mb-6 text-gray-600">Drop us a line, Our team will contact you</p>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name*"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email ID*"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone Number*"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <textarea
            placeholder="Please write your query here."
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
          <button className="flex flex-row px-6 py-3 text-white bg-red-600 rounded-lg">Send Message</button>
        </div>

        {/* Team Members */}
        <div className="flex flex-row space-y-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center p-4 rounded-lg">
              <div className="relative mb-4 h-52 w-52">
            <Image
              src={member.image}
              alt={member.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.phone}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2">
            <Linkedin width={30} height={30} className="text-blue-600" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
