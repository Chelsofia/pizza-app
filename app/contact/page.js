"use client";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className="flex flex-col items-center p-4 my-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#FBB200] text-white py-2 px-4 rounded-md font-semibold"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Google Maps Embed */}
      <div className="mt-10 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.498246616276!2d3.4504166557681026!3d6.45019813662744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf452da3bd44b%3A0x47331fb41adc9d28!2sLekki%20Phase%201%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1724317278194!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
