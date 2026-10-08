"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Scan, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Booking() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/ariseemmanuel23@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.phone,
            service: values.service,
            message: values.message,
            _subject: "New portfolio contact",
            _template: "table",
            _captcha: "false",
            _replyto: values.email,
          }),
        },
      );

      if (response.ok) {
        setStatus("success");
        setValues({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-background text-foreground overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <span className="text-brand font-bold tracking-[0.2em] uppercase text-sm">
                Booking & Enquiries
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-serif">
                LET&apos;S MAKE
                <br />
                MUSIC
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed max-w-md">
                Available for church services, concerts, studio sessions,
                lessons, music direction and selected travel engagements.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <a
                href="mailto:ariseemmanuel23@gmail.com"
                className="group flex items-center gap-4 liquid-glass p-4 rounded-2xl hover:bg-foreground/5 transition-colors border-0"
              >
                <div className="bg-brand/20 p-3 rounded-full text-brand group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 font-medium uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-lg font-bold">ariseemmanuel23@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/2347037405371"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 liquid-glass p-4 rounded-2xl hover:bg-foreground/5 transition-colors border-0"
              >
                <div className="bg-brand/20 p-3 rounded-full text-brand group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 font-medium uppercase tracking-wider">
                    Call
                  </p>
                  <p className="text-lg font-bold">+234 703 740 5371</p>
                </div>
              </a>

              <div className="group flex items-center gap-4 liquid-glass p-4 rounded-2xl border-0">
                <div className="bg-brand/20 p-3 rounded-full text-brand">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 font-medium uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-lg font-bold">
                    Abuja / Minna, Niger State
                  </p>
                  <p className="text-sm text-brand">Available for Travel</p>
                </div>
              </div>

              {/* QR Code Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="liquid-glass p-6 rounded-2xl border-0 flex flex-col items-center gap-4"
              >
                <div className="flex items-center gap-2 text-foreground/60">
                  <Scan className="w-5 h-5 text-brand" />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Scan for Socials
                  </span>
                </div>
                <div className="relative w-40 h-40 bg-white rounded-xl p-2 shadow-lg">
                  <Image
                    src="/bassmanuel.png"
                    alt="BASSMANUEL QR Code - Scan for all social media links"
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
                <p className="text-xs text-foreground/50 text-center">
                  Scan to connect on all platforms
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="liquid-glass rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                <div className="bg-brand/20 p-4 rounded-full mb-6">
                  <CheckCircle2 className="w-12 h-12 text-brand" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-foreground/70">
                  Thank you for reaching out. I&apos;ll get back to you as soon
                  as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 px-6 py-2 rounded-full border border-foreground/20 hover:bg-foreground/5 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold uppercase tracking-wider text-foreground/80"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={values.name}
                      onChange={handleChange}
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-brand transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold uppercase tracking-wider text-foreground/80"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-brand transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-1 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold uppercase tracking-wider text-foreground/80"
                    >
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={values.phone}
                      onChange={handleChange}
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-brand transition-colors"
                      placeholder="+234..."
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-semibold uppercase tracking-wider text-foreground/80"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      required
                      value={values.service}
                      onChange={handleChange}
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-brand transition-colors appearance-none"
                    >
                      <option value="" className="text-foreground">
                        Select a service...
                      </option>
                      <option value="live" className="text-foreground">
                        Live Band Ministration
                      </option>
                      <option value="studio" className="text-foreground">
                        Studio Session
                      </option>
                      <option value="lessons" className="text-foreground">
                        1-on-1 Bass Lessons
                      </option>
                      <option value="direction" className="text-foreground">
                        Music Direction
                      </option>
                      <option value="other" className="text-foreground">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold uppercase tracking-wider text-foreground/80"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={values.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-brand transition-colors resize-none"
                    placeholder="Tell me about your event or project..."
                  ></textarea>
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group w-full flex items-center justify-center gap-2 bg-brand text-black font-bold text-lg rounded-xl px-8 py-4 mt-2 hover:bg-[#7ba378] transition-colors active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting"
                    ? "SENDING..."
                    : "SEND BOOKING REQUEST"}
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
