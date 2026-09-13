"use client";

import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "./CompanyInfo";
import { useState } from "react";
import Logo from "@/public/images/Rotex-Logo-1.png";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoSendSharp,
  IoChevronForward,
} from "react-icons/io5";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/aboutUs" },
  { label: "Products", href: "#" },
  { label: "Our Clients", href: "#" },
  { label: "Contact Us", href: "/contactUs" },
  { label: "Privacy Policy", href: "#" },
];

const productCategories = [
  { label: "Laboratory Equipment", href: "#" },
  { label: "Medical Devices", href: "#" },
  { label: "Pharmaceutical", href: "#" },
  { label: "Agricultural Tools", href: "#" },
  { label: "Industrial Machinery", href: "#" },
  { label: "Textile Solutions", href: "#" },
];

const socialLinks = [
  {
    Icon: FaFacebook,
    href: "#",
    label: "Facebook",
    color: "hover:bg-[#1877F2]",
  },
  {
    Icon: FaSquareXTwitter,
    href: "#",
    label: "X (Twitter)",
    color: "hover:bg-[#000000]",
  },
  {
    Icon: FaInstagramSquare,
    href: "#",
    label: "Instagram",
    color: "hover:bg-[#E1306C]",
  },
  {
    Icon: FaYoutube,
    href: "#",
    label: "YouTube",
    color: "hover:bg-[#FF0000]",
  },
  {
    Icon: FaLinkedin,
    href: "#",
    label: "LinkedIn",
    color: "hover:bg-[#0A66C2]",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full font-sans" style={{ backgroundColor: "#45BFFE" }}>
      {/* ─── Decorative Top Wave ─── */}
      <div
        className="w-full overflow-hidden leading-[0]"
        style={{ backgroundColor: "#fff" }}
      >
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[50px] md:h-[60px]"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="#45BFFE"
          />
        </svg>
      </div>

      {/* ─── Main Footer Body ─── */}
      <div className="container mx-auto px-4 max-w-7xl pt-10 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* ── Column 1: Brand / About ── */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="inline-block w-fit group">
              <div
                className="bg-white r px-3 py-2 shadow-md transition-transform duration-300 group-hover:scale-105"
                style={{ display: "inline-block" }}
              >
                <Image
                  src={Logo}
                  alt="Rotex International Logo"
                  width={160}
                  height={40}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-white/90 text-[13.5px] leading-relaxed">
              {companyInfo.shortDescription}
            </p>

            {/* Contact Info */}
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-start gap-3 text-white/90 text-[13.5px] hover:text-white transition-colors group"
                >
                  <span className="mt-[2px] flex-shrink-0 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <IoCallOutline size={15} className="text-white" />
                  </span>
                  <span>{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 text-white/90 text-[13.5px] hover:text-white transition-colors group"
                >
                  <span className="mt-[2px] flex-shrink-0 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <IoMailOutline size={15} className="text-white" />
                  </span>
                  <span>{companyInfo.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/90 text-[13.5px]">
                  <span className="mt-[2px] flex-shrink-0 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <IoLocationOutline size={15} className="text-white" />
                  </span>
                  <span>{companyInfo.address}</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/90 text-[13.5px]">
                  <span className="mt-[2px] flex-shrink-0 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <IoTimeOutline size={15} className="text-white" />
                  </span>
                  <span>{companyInfo.officeTime}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* ── Column 2: Quick Navigation ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-[15px] font-bold uppercase tracking-widest after:block after:mt-2 after:w-10 after:h-[3px] after:bg-white/50 after:rounded-full">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-white/85 text-[13.5px] hover:text-white hover:gap-3 transition-all duration-200 group"
                  >
                    <IoChevronForward
                      size={13}
                      className="text-white/60 group-hover:text-white transition-colors flex-shrink-0"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white text-[15px] font-bold uppercase tracking-widest mt-4 after:block after:mt-2 after:w-10 after:h-[3px] after:bg-white/50 after:rounded-full">
              Our Products
            </h3>
            <ul className="flex flex-col gap-2">
              {productCategories.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-white/85 text-[13.5px] hover:text-white hover:gap-3 transition-all duration-200 group"
                  >
                    <IoChevronForward
                      size={13}
                      className="text-white/60 group-hover:text-white transition-colors flex-shrink-0"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3 & 4: Newsletter & Social ── */}
          <div className="flex flex-col gap-5 sm:col-span-2">
            {/* Newsletter */}
            <div>
              <h3 className="text-white text-[15px] font-bold uppercase tracking-widest after:block after:mt-2 after:w-10 after:h-[3px] after:bg-white/50 after:rounded-full">
                Newsletter
              </h3>
              <p className="text-white/85 text-[13.5px] leading-relaxed mt-4">
                Subscribe to our newsletter and stay up to date with our latest
                products, offers, and industry news.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="mt-4 flex flex-col sm:flex-row gap-3"
              >
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3  bg-white/20 placeholder-white/60 text-white text-[13.5px] border border-white/30 outline-none focus:bg-white/30 focus:border-white transition-all duration-200"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#45BFFE] font-bold text-[13px]  hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap shadow-md cursor-pointer"
                >
                  <IoSendSharp size={15} />
                  Subscribe
                </button>
              </form>

              {subscribed && (
                <p className="mt-3 text-white text-[13px] font-semibold animate-pulse">
                  ✅ Thank you for subscribing!
                </p>
              )}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/20" />

            {/* Social Media */}
            <div>
              <h3 className="text-white text-[15px] font-bold uppercase tracking-widest after:block after:mt-2 after:w-10 after:h-[3px] after:bg-white/50 after:rounded-full">
                Follow Us
              </h3>
              <p className="text-white/85 text-[13.5px] mt-4 mb-4">
                Connect with us on social media for updates and more.
              </p>
              <div className="flex flex-wrap gap-3">
                {companyInfo.socialLinks.map(({ Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white ${color} hover:border-transparent hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Google Map Embed ── */}
            <div className="w-full overflow-hidden border-2 border-white/30 shadow-lg mt-1">
              <iframe
                title="Rotex International Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7673830870413!2d90.41449317486843!3d23.784099486716567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79e76b2f0b5%3A0x2e3c21cbc1082a1c!2sGulshan%201%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd"
                width="100%"
                height="170"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div
        className="border-t border-white/25"
        style={{ backgroundColor: "rgba(0,0,0,0.12)" }}
      >
        <div className="container mx-auto px-4 max-w-7xl py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/80 text-[12.5px] text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              {companyInfo.name}
            </span>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[12.5px] text-white/75">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/30">|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/30">|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
