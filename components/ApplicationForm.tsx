"use client";

import { useState, FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ApplicationForm() {
  const { isVisible, scrollProgress, elementRef } = useScrollAnimation(0.2);

  // Slower, more gradual fade-in
  const opacity = isVisible ? Math.min(1, scrollProgress * 1.2) : 0;
  const transform = `translateY(${(1 - scrollProgress) * 30}px)`;
  const blur = (1 - scrollProgress) * 5;
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    linkedinUrl: "",
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("state", formData.state);
      formDataToSend.append("linkedinUrl", formData.linkedinUrl);
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      const response = await fetch("/api/submit-application", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Application submitted successfully! We'll be in touch soon.",
        });
        // Reset form
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          city: "",
          state: "",
          linkedinUrl: "",
          resume: null,
        });
        // Reset file input
        const fileInput = document.getElementById("resume") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="application-form" 
      ref={elementRef as any}
      className="py-20 px-4"
    >
      <div 
        className="max-w-2xl mx-auto"
        style={{
          opacity,
          transform,
          filter: `blur(${blur}px)`,
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, filter 0.6s ease-out',
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-space-light">
          Apply Now
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Take the first step toward launching your career with us
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-space-navy/70 backdrop-blur-sm p-8 rounded-lg border border-space-accent/20 space-y-6"
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium mb-2 text-space-light"
            >
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-space-dark/50 border border-space-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-space-accent focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-2 text-space-light"
            >
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-space-dark/50 border border-space-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-space-accent focus:border-transparent"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-space-light"
            >
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-space-dark/50 border border-space-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-space-accent focus:border-transparent"
              placeholder="john.doe@example.com"
            />
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium mb-2 text-space-light"
            >
              City <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-space-dark/50 border border-space-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-space-accent focus:border-transparent"
              placeholder="Greenville"
            />
          </div>

          {/* State */}
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium mb-2 text-space-light"
            >
              State <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="state"
              name="state"
              required
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-space-dark/50 border border-space-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-space-accent focus:border-transparent"
              placeholder="South Carolina"
            />
          </div>

          {/* LinkedIn URL */}
          <div>
            <label
              htmlFor="linkedinUrl"
              className="block text-sm font-medium mb-2 text-space-light"
            >
              LinkedIn Profile URL <span className="text-gray-500">(Optional)</span>
            </label>
            <input
              type="url"
              id="linkedinUrl"
              name="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-space-dark/50 border border-space-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-space-accent focus:border-transparent"
              placeholder="https://linkedin.com/in/johndoe"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium mb-2 text-space-light"
            >
              Resume <span className="text-gray-500">(Optional)</span>
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="w-full px-4 py-3 bg-space-dark/50 border border-space-accent/30 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-space-accent file:text-white hover:file:bg-space-purple focus:outline-none focus:ring-2 focus:ring-space-accent"
            />
            <p className="mt-2 text-sm text-gray-400">
              Accepted formats: PDF, DOC, DOCX (Max 2MB)
            </p>
          </div>

          {/* Submit Status */}
          {submitStatus.type && (
            <div
              className={`p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-900/30 border border-green-500/50 text-green-300"
                  : "bg-red-900/30 border border-red-500/50 text-red-300"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-space-accent to-space-purple text-white font-semibold rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-space-accent/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting this form, you agree to our{" "}
            <a
              href="/privacy-policy"
              className="text-space-accent hover:underline"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="/terms-of-service"
              className="text-space-accent hover:underline"
            >
              Terms of Service
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}