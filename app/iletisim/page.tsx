"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";

const subjects = [
  "General Information Request",
  "Project Partnership Application",
  "Support & Assistance",
  "Event Application",
  "Feedback / Suggestion",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    let newErrors: any = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    if (!form.topic.trim()) newErrors.topic = "Please select a subject.";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccessPopup(true);
      setForm({ name: "", email: "", topic: "", message: "" });
      setErrors({});
      setTimeout(() => setSuccessPopup(false), 2500);
    }

    setLoading(false);
  };

  return (
    <section
      className="
      w-full min-h-screen 
      bg-neutral-50 dark:bg-neutral-950
      transition-colors duration-300
    "
    >
      {/* ---------------- MOBILE HEADER IMAGE ---------------- */}
      <div className="w-full relative h-56 overflow-hidden md:hidden">
        <Image
          src="/kapakim.png"
          alt="Contact Cover Image"
          fill
          className="
            object-cover 
            opacity-0 animate-fadeInSoft
          "
        />

        {/* BOTTOM TO TOP SHADOW */}
        <div
          className="
            absolute bottom-0 left-0 w-full h-40 
            bg-linear-to-t from-white to-transparent
            dark:from-black dark:to-transparent
          "
        />
      </div>

      {/* ---------------- PAGE CONTENT ---------------- */}
      <div className="px-6 py-14 md:py-40 flex justify-center">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 text-neutral-900 dark:text-neutral-50">

            <h1 className="text-3xl md:text-4xl font-bold mt-4">
              Get in Touch
            </h1>

            <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed max-w-sm">
              You can contact us to learn more about our project, explore collaboration
              opportunities, or share your suggestions.
            </p>

            <div className="mt-4 flex flex-col gap-4 text-sm">
              <div>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs mb-1">
                  Email
                </p>
                <p className="font-medium">contact@chiltribune.com</p>
                 <p className="font-medium">iletisim@cocuktribunu.org</p>
              </div>

              <div>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs mb-1">
                  Working Hours
                </p>
                <p className="font-medium">Weekdays 09:00 – 20:00</p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={submitForm}
            className="
              bg-white dark:bg-neutral-900 
              border border-neutral-200 dark:border-neutral-800
              rounded-2xl p-6 shadow-xl
              flex flex-col gap-5
              transition-colors duration-300
              max-w-sm mx-auto w-full
            "
          >
            {/* NAME */}
            <div>
              <label className="text-sm text-neutral-700 dark:text-neutral-300">
                Full Name *
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="
                mt-2 w-full 
                bg-neutral-100 dark:bg-neutral-800 
                border border-neutral-300 dark:border-neutral-700
                text-neutral-900 dark:text-neutral-50
                rounded-xl px-4 py-2.5 text-sm outline-none
              "
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.name}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-neutral-700 dark:text-neutral-300">
                Email *
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                className="
                mt-2 w-full 
                bg-neutral-100 dark:bg-neutral-800 
                border border-neutral-300 dark:border-neutral-700
                text-neutral-900 dark:text-neutral-50
                rounded-xl px-4 py-2.5 text-sm outline-none
              "
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.email}
                </p>
              )}
            </div>

            {/* TOPIC */}
            <div>
              <label className="text-sm text-neutral-700 dark:text-neutral-300">
                Subject *
              </label>
              <select
                name="topic"
                value={form.topic}
                onChange={handleChange}
                className="
                mt-2 w-full 
                bg-neutral-100 dark:bg-neutral-800
                border border-neutral-300 dark:border-neutral-700
                text-neutral-900 dark:text-neutral-50
                rounded-xl px-4 py-2.5 text-sm outline-none
              "
              >
                <option value="">Select a subject</option>
                {subjects.map((s) => (
                  <option key={s} value={s} className="text-black">
                    {s}
                  </option>
                ))}
              </select>
              {errors.topic && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.topic}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-neutral-700 dark:text-neutral-300">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="
                mt-2 w-full min-h-[110px]
                bg-neutral-100 dark:bg-neutral-800 
                border border-neutral-300 dark:border-neutral-700
                text-neutral-900 dark:text-neutral-50
                rounded-xl px-4 py-2.5 text-sm outline-none
              "
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.message}
                </p>
              )}
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="
              bg-[#006039] text-white font-medium text-sm rounded-full
              py-3 px-6 hover:brightness-110 transition
              flex items-center justify-center gap-2 relative
            "
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Send <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {successPopup && (
        <div
          className="
            fixed bottom-10 right-10 
            bg-white text-black 
            dark:bg-neutral-900 dark:text-white
            px-6 py-4 
            rounded-xl shadow-2xl 
            flex items-center gap-3 
            animate-slide-in
          "
        >
          <CheckCircle2 className="w-6 h-6 text-green-600" />
          <p className="text-sm font-medium">Your message has been sent successfully!</p>
        </div>
      )}
    </section>
  );
}