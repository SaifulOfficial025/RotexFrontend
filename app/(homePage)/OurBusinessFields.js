"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import cement from "@/public/images/cement.jpg";
import waterTreatment from "@/public/images/water.jpg";
import digitalTruckScales from "@/public/images/truckscale.jpg";
import textileGarments from "@/public/images/textile.jpg";
import foodIndustry from "@/public/images/food.jpg";
import laboratoryGlassware from "@/public/images/glassware.jpg";
import laboratoryReagentChemicalAndRawMaterials from "@/public/images/reagent.jpg";
import powerPlant from "@/public/images/powerplant.jpg";
import environment from "@/public/images/environment.jpg";
import pharmaceutical from "@/public/images/pharma.jpg";
import steelRollingIndustry from "@/public/images/rollingmill.jpg";
import agricultural from "@/public/images/agriculture.jpg";
import medicalHospital from "@/public/images/medical.jpg";
import labEquipment from "@/public/images/lab.jpg";
import feedMill from "@/public/images/feed.jpg";
import collageUniversityResearch from "@/public/images/university.jpg";
import {
  FaIndustry,
  FaWater,
  FaTruck,
  FaShirt,
  FaUtensils,
  FaWineGlass,
  FaFlask,
  FaBolt,
  FaLeaf,
  FaPills,
  FaCubes,
  FaTractor,
  FaHospital,
  FaMicroscope,
  FaSeedling,
  FaGraduationCap,
} from "react-icons/fa6";

const fields = [
  { name: "Cement Industry", icon: FaIndustry, image: cement },
  { name: "Water Treatment plant", icon: FaWater, image: waterTreatment },
  { name: "Digital Truck Scales", icon: FaTruck, image: digitalTruckScales },
  { name: "Textile and Garments", icon: FaShirt, image: textileGarments },
  { name: "Food Industry", icon: FaUtensils, image: foodIndustry },
  {
    name: "Laboratory Glassware",
    icon: FaWineGlass,
    image: laboratoryGlassware,
  },
  {
    name: "Laboratory Reagent Chemical and Raw Materials",
    icon: FaFlask,
    image: laboratoryReagentChemicalAndRawMaterials,
  },
  { name: "Power Plant", icon: FaBolt, image: powerPlant },
  { name: "Environment", icon: FaLeaf, image: environment },
  { name: "Agricultural", icon: FaTractor, image: agricultural },
  { name: "Pharmaceutical", icon: FaPills, image: pharmaceutical },
  {
    name: "Steel Rolling Industry",
    icon: FaCubes,
    image: steelRollingIndustry,
  },
  { name: "Medical and Hospital", icon: FaHospital, image: medicalHospital },
  { name: "Lab equipment", icon: FaMicroscope, image: labEquipment },
  { name: "Feed mill", icon: FaSeedling, image: feedMill },
  {
    name: "Collage, University and Research",
    icon: FaGraduationCap,
    image: collageUniversityResearch,
  },
];

export default function OurBusinessFields() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Animated Header coming from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight uppercase">
            Our Business Fields
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            We provide comprehensive and innovative solutions across a diverse
            range of industries, ensuring unmatched quality and reliability in
            every sector we serve.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 overflow-hidden pb-4">
          {fields.map((field, index) => {
            const Icon = field.icon;

            // Alternate animation origin: even index items slide from left (-80), odd from right (80)
            const xOffset = index % 2 === 0 ? -80 : 80;
            // Delay based on row number so they waterfall down nicely
            const rowNumber = Math.floor(index / 2); // approximate row delay logic
            const delay = 0.1 + rowNumber * 0.05;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: xOffset }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
                className="group relative w-full h-48 sm:h-72 shadow-md hover:shadow-2xl transition-shadow duration-500 cursor-pointer ßoverflow-hidden"
              >
                {/* Background Image */}
                <Image
                  src={field.image}
                  alt={field.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Optional Primary Color Tint on Hover */}
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>

                {/* Content */}
                <div className="absolute inset-0 p-3 sm:p-6 flex flex-col justify-end z-10">
                  <div className="transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center mb-2 sm:mb-4 shadow-lg">
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-[13px] sm:text-lg md:text-xl font-bold text-white leading-tight">
                      {field.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
