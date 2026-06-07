"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  businessType: z.string().min(1, "Please select your business type"),
  message: z.string().min(20, "Please tell me a bit more (at least 20 characters)"),
});

type FormData = z.infer<typeof schema>;

const businessTypes = [
  "Plumbing & Heating",
  "Electrical",
  "Roofing",
  "Cleaning",
  "Landscaping & Gardening",
  "Building & Construction",
  "Painting & Decorating",
  "HVAC",
  "Locksmith",
  "Pest Control",
  "Other Local Service Business",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    // Replace with your form submission endpoint (e.g. Resend, Formspree, etc.)
    await new Promise((res) => setTimeout(res, 800));
    console.log(data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3
          className="text-xl font-bold text-slate-900 mb-2"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          Message Received!
        </h3>
        <p className="text-slate-500 text-sm">
          Thanks for getting in touch. I'll review your details and get back to you within
          one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-5"
      noValidate
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          autoComplete="name"
          placeholder="e.g. James Hargreaves"
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          {...register("email")}
          id="email"
          type="email"
          autoComplete="email"
          placeholder="james@hargreavesplumbing.co.uk"
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Phone Number <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <input
          {...register("phone")}
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="07700 000 000"
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      {/* Business type */}
      <div>
        <label htmlFor="businessType" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Business Type <span className="text-red-500">*</span>
        </label>
        <select
          {...register("businessType")}
          id="businessType"
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          defaultValue=""
        >
          <option value="" disabled>Select your business type</option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.businessType && (
          <p className="text-red-500 text-xs mt-1">{errors.businessType.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Tell Me About Your Project <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          placeholder="e.g. We're a plumbing company based in Manchester. We're not appearing on Google Maps and our website is slow. We need help ranking locally and possibly a new website."
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors text-sm"
      >
        {isSubmitting ? "Sending…" : "Send My Message"}
        {!isSubmitting && <ArrowRight className="w-4 h-4" />}
      </button>

      <p className="text-slate-400 text-xs text-center">
        I typically respond within one business day. No spam, ever.
      </p>
    </form>
  );
}
