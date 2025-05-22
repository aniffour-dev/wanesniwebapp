"use client";
import React, { useState, useRef } from "react";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [showOTPPopup, setShowOTPPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [showForm, setShowForm] = useState(true);
  const otpInputs = useRef([]);

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    terms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
  });

  const handleSubmit = async (
    values: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      terms: boolean;
    },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setSubmitting(true);

    try {
      // Send the email to the backend to generate and send OTP
      const response = await fetch("https://wanesni.com/otp-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          action: "send", // Add action to indicate this is for sending OTP
        }),
      });

      if (response.ok) {
        setEmail(values.email);
        setShowOTPPopup(true);
        setShowForm(false);
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("An error occurred while sending OTP.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Move to next input if a digit was entered
      if (value && index < 3) {
        const nextInput = otpInputs.current[
          index + 1
        ] as HTMLInputElement | null;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      const prevInput = otpInputs.current[index - 1] as HTMLInputElement | null;
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOTP = otpValues.join("");

    if (enteredOTP.length !== 4) {
      toast.error("Please enter a valid 4-digit OTP code");
      return;
    }

    try {
      // Send the OTP to the backend for verification
      const response = await fetch("https://wanesni.com/otp-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          otp: enteredOTP,
          action: "verify", // Add action to indicate this is for verifying OTP
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // OTP verification successful
        setShowOTPPopup(false);
        // toast.success("Verification successful! Welcome to our platform.");
        // Here you would typically redirect to a dashboard or another page
      } else {
        // OTP verification failed
        toast.error(data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("An error occurred while verifying OTP.");
    }
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        height: "100vh",
      }}
    >
      <Toaster />
      <div className="h-full py-10 w-full bg-gradient-to-r px-5 lg:px-0 from-black/60 via-slate-700/60 to-pink-600/60 backdrop-blur-sm md:backdrop-blur-xl flex items-center justify-center">
        <div className="w-full max-w-4xl bg-[#181f2a] rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
          {/* Left: Video Placeholder */}
          <div className="md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center bg-[#232b3b]">
            <div className="w-full h-full flex items-center justify-center relative">
              <Link
                href="/"
                className="absolute top-4 left-4 z-20 bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
              >
                <HiArrowLeft className="text-white w-6 h-6" />
              </Link>
              <video
                className="object-cover w-full h-full rounded-2xl md:rounded-none md:rounded-l-2xl"
                autoPlay
                loop
                muted
                playsInline
                poster="/assets/signup-poster.jpg"
              >
                <source
                  src="https://resources.tango.me/web/main-landing-page-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/60 via-violet-700/60 to-purple-600/60 backdrop-blur-sm md:backdrop-blur-xs rounded-2xl md:rounded-none md:rounded-l-2xl pointer-events-none" />
            </div>
          </div>
          {/* Right: Signup Form */}
          <div className="md:w-1/2 w-full bg-[#181f2a] p-6 md:p-8 flex flex-col justify-center">
            {showForm ? (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to Match? <span className="inline-block">👀</span>
                </h2>
                <p className="text-gray-300 mb-6 text-sm md:text-base">
                  Find real connections, meaningful conversations, and maybe
                  even love—right here, right now.
                </p>
                <button className="w-full flex items-center justify-center gap-2 bg-[#232b3b] text-white font-medium py-2 md:py-3 rounded-full mb-6 hover:bg-[#2d3648] transition text-sm md:text-base">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                  Sign up with Google
                </button>

                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    terms: false,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-400 text-sm mb-1">
                            First Name
                          </label>
                          <Field
                            type="text"
                            name="firstName"
                            placeholder="i.e. Davon"
                            className="w-full px-4 py-2 md:py-3 rounded-full bg-transparent border border-[#2d3648] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm md:text-base"
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="text-red-500 text-xs mt-1"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 text-sm mb-1">
                            Last Name
                          </label>
                          <Field
                            type="text"
                            name="lastName"
                            placeholder="i.e. Lean"
                            className="w-full px-4 py-2 md:py-3 rounded-full bg-transparent border border-[#2d3648] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm md:text-base"
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="text-red-500 text-xs mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-1">
                          Email Address
                        </label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="i.e. davon@mail.com"
                          className="w-full px-4 py-2 md:py-3 rounded-full bg-transparent border border-[#2d3648] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm md:text-base"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-1">
                          Password
                        </label>
                        <Field
                          type="password"
                          name="password"
                          placeholder="********"
                          className="w-full px-4 py-2 md:py-3 rounded-full bg-transparent border border-[#2d3648] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm md:text-base"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>
                      <div className="flex items-center mb-2">
                        <Field
                          type="checkbox"
                          name="terms"
                          id="terms"
                          className="mr-2 accent-pink-500"
                        />
                        <label
                          htmlFor="terms"
                          className="text-gray-400 text-xs md:text-sm"
                        >
                          I agree with the{" "}
                          <a href="#" className="text-pink-400 underline">
                            Terms &amp; Conditions
                          </a>{" "}
                          of Clarity
                        </label>
                      </div>
                      <ErrorMessage
                        name="terms"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l text-white font-semibold py-2 md:py-3 rounded-full transition text-base mt-2 disabled:opacity-50"
                      >
                        {isSubmitting ? "Processing..." : "Create Account"}
                      </button>
                    </Form>
                  )}
                </Formik>

                <p className="text-gray-400 text-xs md:text-sm mt-6 text-center">
                  Already have an account?{" "}
                  <a href="/login" className="text-pink-400 hover:underline">
                    Log in
                  </a>
                </p>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white text-center">
                  HELLO 2 STEP
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* OTP Popup */}
      {showOTPPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#181f2a] p-8 rounded-2xl shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold text-white mb-4">
              Email Verification
            </h2>
            <p className="text-gray-300 mb-6">
              We've sent a verification code to{" "}
              <span className="font-semibold">{email}</span>. Please enter it
              below.
            </p>
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div className="flex justify-between mb-4">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={otpValues[index]}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    ref={(el: HTMLInputElement | null) => {
                      (otpInputs.current as Array<HTMLInputElement | null>)[
                        index
                      ] = el;
                    }}
                    className="w-12 h-12 text-center text-2xl bg-transparent border border-[#2d3648] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => {
                    setShowOTPPopup(false);
                    setShowForm(true);
                  }}
                  className="text-gray-400 hover:text-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l text-white font-semibold py-2 px-6 rounded-full transition"
                >
                  Verify
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm mt-4 text-center">
              Didn't receive a code?{" "}
              <button className="text-pink-400 hover:underline">Resend</button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
