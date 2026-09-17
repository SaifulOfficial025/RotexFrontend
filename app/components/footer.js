"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyInfo } from "./CompanyInfo";
import { categories, menus } from "./CategoriesAndMenus";
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
  FaWhatsapp,
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
  const pathname = usePathname();
  const dynamicMenus = menus.map((m) => ({
    ...m,
    active:
      pathname === m.href || (m.href !== "/" && pathname.startsWith(m.href)),
  }));
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
      <div className="container mx-auto px-4 max-w-7xl pt-6 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1.2fr_2.2fr] gap-10 lg:gap-12">
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
              <div className="flex items-start gap-3 text-white/90 text-[13.5px]">
                <span className="mt-[2px] flex-shrink-0 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <IoLocationOutline size={15} className="text-white" />
                </span>
                <span>{companyInfo.address}</span>
              </div>
              <li className="pt-2">
                <a
                  href={`https://wa.me/${companyInfo.phone.replace(/[^0-9+]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-white/70 text-primary text-[13px] font-bold py-2.5 px-4  transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 w-fit"
                >
                  <FaWhatsapp size={20} className="text-primary" />
                  <span>Connect on WhatsApp</span>
                </a>
              </li>
              <li></li>
              <li>
                {/* <div className="flex items-start gap-3 text-white/90 text-[13.5px]">
                  <span className="mt-[2px] flex-shrink-0 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <IoTimeOutline size={15} className="text-white" />
                  </span>
                  <span>{companyInfo.officeTime}</span>
                </div> */}
              </li>
            </ul>
          </div>

          {/* ── Column 2: Quick Navigation ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-[15px] font-bold uppercase tracking-widest after:block after:mt-2 after:w-10 after:h-[3px] after:bg-white/50 after:rounded-full">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {dynamicMenus.map(({ label, href, active }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={`flex items-center text-[13.5px] transition-all duration-200 group ${active ? "text-white font-bold gap-3" : "text-white/85 gap-2 hover:text-white hover:gap-3"}`}
                  >
                    <IoChevronForward
                      size={13}
                      className={`transition-colors flex-shrink-0 ${active ? "text-white" : "text-white/60 group-hover:text-white"}`}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Newsletter & Social ── */}
          <div className="flex flex-col gap-5">
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
                className="mt-4 flex flex-col gap-3"
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

            {/* Social Media (Inline) */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <span className="text-white text-[14px] font-bold uppercase tracking-widest">
                Follow Us:
              </span>
              <div className="flex gap-2">
                {companyInfo.socialLinks.map(({ Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white ${color} hover:border-transparent hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div
        className="border-t border-white/25"
        style={{ backgroundColor: "rgba(0,0,0,0.12)" }}
      >
        <div className="container mx-auto px-4 max-w-7xl py-4 flex flex-col sm:flex-col items-center justify-between gap-3">
          <p className="text-white/80 text-[12.5px] text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">{companyInfo.name}</span>
            . All rights reserved.
          </p>

          {/* <div className="flex items-center gap-4 text-[12.5px] text-white/75">
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
          </div> */}
        </div>
      </div>
    </footer>
  );
}
