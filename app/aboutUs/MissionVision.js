"use client";

import { IoRocketOutline, IoEyeOutline } from "react-icons/io5";
import {
  FaArrowRight,
  FaIndustry,
  FaBriefcase,
  FaBuilding,
} from "react-icons/fa6";

export default function MissionVision() {
  return (
    <div className="flex flex-col w-full">
      {/* ─── MISSION SECTION ─── */}
      <section
        id="mission"
        className="py-16 md:py-24 bg-white relative overflow-hidden scroll-mt-24"
      >
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <IoRocketOutline size={40} className="text-primary" />
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Our mission is to empower our clients by providing innovative,
            high-quality solutions that directly address their core challenges.
            We strive to maintain the highest standards of integrity,
            operational excellence, and customer service in every project we
            undertake. By continually pushing the boundaries of what is
            possible, we aim to deliver sustainable, long-term value that drives
            growth and positive impact for all our stakeholders and the
            communities we serve.
          </p>
        </div>
      </section>

      {/* ─── VISION HERO SECTION ─── */}
      <section
        id="vision"
        className="py-20 md:py-32 bg-[#F8F9FA] relative overflow-hidden border-t border-gray-100"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          {/* Soft glows */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-300/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Vision Header */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-primary"></span>
              <h4 className="text-primary font-black tracking-widest uppercase text-sm md:text-base flex items-center gap-2">
                <IoEyeOutline size={20} />
                Our Grand Vision
              </h4>
              <span className="w-12 h-[2px] bg-primary"></span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] max-w-5xl mb-8">
              Building a stronger tomorrow under{" "}
              <span className="text-primary">Rotex Corporation</span>.
            </h2>

            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
              We envision a powerful conglomerate built on trust, innovation,
              and excellence — with two dynamic concerns driving growth across
              industries and lifestyles.
            </p>
          </div>

          {/* ─── THE THREE ENTITIES ─── */}
          <div className="flex flex-col gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* ═══════════════════════════════════════════════════ */}
            {/* ENTITY 1: ROTEX CORPORATION (THE MOTHER) */}
            {/* ═══════════════════════════════════════════════════ */}
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 bg-white p-8 md:p-14 group shadow-[0_8px_40px_rgb(0,0,0,0.06)] hover:shadow-[0_16px_60px_rgb(0,0,0,0.1)] transition-shadow duration-500">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-in-out"></div>
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-yellow-400 to-primary"></div>

              <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
                <div className="flex flex-col items-center lg:items-start gap-6 lg:w-[35%]">
                  <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <FaBuilding className="text-primary" size={40} />
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-10 flex items-center justify-center w-full max-w-[340px] border border-gray-100 shadow-md">
                    <img
                      src="/images/Rotex-Logo-1 corp.png"
                      alt="Rotex Corporation"
                      className="h-20 md:h-28 w-auto object-contain mix-blend-multiply"
                    />
                  </div>
                  <span className="text-primary text-xs font-bold uppercase tracking-[0.25em] border-2 border-primary/30 bg-primary/5 px-4 py-1.5 rounded-full">
                    The Mother Brand
                  </span>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 tracking-tight">
                    Rotex Corporation
                  </h3>
                  <p className="text-gray-500 text-[16px] md:text-lg leading-relaxed mb-6">
                    The corporation envisioned to unite all our ventures under
                    one powerful tree. Rotex Corporation will stand as a symbol
                    of Bangladeshi excellence, overseeing diverse business
                    concerns spanning Industrial Equipment, Lifestyle Products,
                    and beyond - all are driven by the same core values of
                    quality, reliability, and excellence.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs font-bold uppercase tracking-widest text-gray-500">
                    <span className="bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                      Multi-Sector Conglomerate
                    </span>
                    <span className="bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                      Bangladesh Origin
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Two Concerns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* ═══════════════════════════════════════════════════ */}
              {/* CONCERN 1: ROTEX INTERNATIONAL */}
              {/* ═══════════════════════════════════════════════════ */}
              <div className="relative rounded-3xl overflow-hidden bg-white border border-green-200/60 p-8 md:p-10 group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_50px_rgba(34,139,34,0.08)] transition-all duration-500 hover:-translate-y-1">
                {/* Soft glow */}
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors duration-700"></div>
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-emerald-400"></div>

                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                    <FaIndustry className="text-primary" size={28} />
                  </div>

                  <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                    Concern of Rotex Corporation
                  </span>

                  <div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex items-center justify-center w-full mb-6 border border-gray-100 shadow-sm group-hover:shadow-lg transition-shadow duration-500">
                    <img
                      src="/images/Rotex-Logo-1.png"
                      alt="Rotex International"
                      className="h-20 md:h-24 w-auto object-contain mix-blend-multiply"
                    />
                  </div>

                  <h4 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                    Rotex International
                  </h4>

                  <p className="text-gray-500 leading-relaxed text-[14px] mb-6 flex-grow">
                    Your trusted partner for professional industrial and
                    laboratory equipment — serving Cement, Pharmaceutical,
                    Textile, Food, Power Plant, Medical, Environmental, and many
                    more sectors across Bangladesh.
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-8 text-[10px] font-bold uppercase tracking-wider">
                    <span className="bg-primary/5 text-primary px-2.5 py-1 rounded-full border border-primary/15">
                      Industrial Equipment
                    </span>
                    <span className="bg-primary/5 text-primary px-2.5 py-1 rounded-full border border-primary/15">
                      Lab Solutions
                    </span>
                    <span className="bg-primary/5 text-primary px-2.5 py-1 rounded-full border border-primary/15">
                      12+ Industries
                    </span>
                  </div>

                  <button className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all hover:text-gray-900">
                    Explore Products <FaArrowRight />
                  </button>
                </div>
              </div>

              {/* ═══════════════════════════════════════════════════ */}
              {/* CONCERN 2: ROCARRY */}
              {/* ═══════════════════════════════════════════════════ */}
              <div className="relative rounded-3xl overflow-hidden bg-white border border-purple-200/60 p-8 md:p-10 group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_50px_rgba(128,0,128,0.08)] transition-all duration-500 hover:-translate-y-1">
                {/* Soft glow */}
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-300/5 rounded-full blur-[80px] group-hover:bg-purple-300/10 transition-colors duration-700"></div>
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 to-pink-400"></div>

                {/* Coming Soon Badge */}
                <div className="absolute top-5 right-5 z-20">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[9px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg shadow-purple-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Launching Soon
                  </span>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                    <FaBriefcase className="text-purple-500" size={28} />
                  </div>

                  <span className="text-purple-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                    Concern of Rotex Corporation
                  </span>

                  <div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex items-center justify-center w-full mb-6 border border-gray-100 shadow-sm group-hover:shadow-lg transition-shadow duration-500">
                    <img
                      src="/images/rocarry.jpeg"
                      alt="RoCarry"
                      className="h-20 md:h-24 w-auto object-contain mix-blend-multiply rounded-xl"
                    />
                  </div>

                  <h4 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                    RoCarry
                  </h4>

                  <p className="text-gray-500 leading-relaxed text-[14px] mb-6 flex-grow">
                    Our upcoming premium bag brand, proudly originating from
                    Bangladesh with production excellence sourced from China.
                    Designed for durability, style, and everyday functionality —
                    set to make its mark in the market very soon.
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-8 text-[10px] font-bold uppercase tracking-wider">
                    <span className="bg-purple-50 text-purple-500 px-2.5 py-1 rounded-full border border-purple-200/50">
                      Premium Bags
                    </span>
                    <span className="bg-purple-50 text-purple-500 px-2.5 py-1 rounded-full border border-purple-200/50">
                      🇧🇩 Bangladesh Origin
                    </span>
                    <span className="bg-purple-50 text-purple-500 px-2.5 py-1 rounded-full border border-purple-200/50">
                      🇨🇳 Made in China
                    </span>
                  </div>

                  <span className="text-purple-400 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                    Stay Tuned
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
