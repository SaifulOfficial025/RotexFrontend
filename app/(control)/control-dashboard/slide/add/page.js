"use client";
import React from "react";
import { useRouter } from "next/navigation";
import SlideForm from "../slide-form";

export default function AddSlide() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/control-dashboard/slide");
  };

  return (
    <div className="max-w-3xl">
      <SlideForm mode="add" onBack={handleBack} />
    </div>
  );
}
