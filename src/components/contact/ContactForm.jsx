"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/message`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      toast.success("Message sent successfully!");

      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
      <h3 className="text-2xl font-bold text-white">Let’s Work Together</h3>

      <p className="text-gray-400 text-sm mt-2">
        Fill out the form and I’ll reply soon.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <Input
          name="phone"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message..."
          value={form.message}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-[#0B1120] border border-white/10 text-white outline-none focus:border-cyan-400"
        />

        <button
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-semibold hover:scale-[1.02] transition"
        >
          {loading ? "Sending..." : "Send Message"}
          <FiSend />
        </button>
      </form>
    </div>
  );
}

function Input({ ...props }) {
  return (
    <input
      {...props}
      className="w-full p-4 rounded-xl bg-[#0B1120] border border-white/10 text-white outline-none focus:border-cyan-400"
    />
  );
}
