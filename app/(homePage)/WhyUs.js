"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Proven Industry Experience",
    subtitle: "20+ Years of Expertise",
    description:
      "Established in 2006, we bring extensive experience in scientific equipment, laboratory solutions, weighing systems, and industrial measurement.",
  },
  {
    number: "02",
    title: "Quality Without Compromise",
    subtitle: "Reliable Products. Reliable Results.",
    description:
      "We prioritize product quality and work with established brands to provide dependable solutions for professional applications.",
  },
  {
    number: "03",
    title: "Solutions Across Industries",
    subtitle: "One Partner. Multiple Industries.",
    description:
      "From textile and pharmaceutical to medical, education, water treatment, food processing, and more, we support a wide range of industries.",
  },
  {
    number: "04",
    title: "Service That Goes Further",
    subtitle: "Support Beyond the Sale",
    description:
      "Our commitment doesn't end with delivery. We provide ongoing cooperation, technical assistance, and after-sales support to help our customers succeed.",
  },
  {
    number: "05",
    title: "Value You Can Count On",
    subtitle: "Quality at a Reasonable Price",
    description:
      "We combine quality products with competitive and reasonable pricing while keeping our customers' interests at the forefront.",
  },
  {
    number: "06",
    title: "Partnerships That Last",
    subtitle: "Business Beyond Transactions",
    description:
      "We believe long-term relationships matter more than one-time business. Our goal is to become a trusted partner for every customer we serve.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Built on Trust. Driven by Quality.{" "}
            <br className="hidden md:block" />
            <span className="text-primary">Focused on Your Success.</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8 text-justify"></div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            For years,{" "}
            <strong className="text-primary">ROTEX International</strong> has
            been helping industries meet their scientific, laboratory, and
            measurement needs with quality products, dependable service, and
            long-term support. Since{" "}
            <strong className="text-primary">2006</strong>, our focus has
            remained simple — deliver the right solutions and build
            relationships that last.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative p-8 bg-gray-50 border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 group z-10 overflow-hidden cursor-default hover:-translate-y-2"
            >
              {/* Giant Background Number Watermark */}
              <div className="absolute -right-6 -bottom-8 text-[140px] font-black text-gray-200/40 group-hover:text-primary/10 transition-colors duration-700 z-0 select-none pointer-events-none tracking-tighter">
                {feature.number}
              </div>

              <div className="relative z-10 h-full flex flex-col">
                {/* Number & Line Indicator */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-black text-primary">
                    {feature.number}
                  </span>
                  <div className="h-0.5 bg-gray-200 flex-grow group-hover:bg-primary/50 transition-colors duration-500"></div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <h4 className="text-xs sm:text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">
                  {feature.subtitle}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base flex-grow">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer / Closing Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-24 text-center bg-gray-900  p-10 md:p-16 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Abstract ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-primary/30 blur-[120px] pointer-events-none rounded-full"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-black mb-6 tracking-wide">
              Quality. Service. Innovation.
            </h3>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-3xl mx-auto">
              Everything you need from a trusted scientific solutions partner.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
