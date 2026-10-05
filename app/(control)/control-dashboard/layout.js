import React from "react";
import DashboardWrapper from "./components/DashboardWrapper";

export const metadata = {
 title: "Control Panel | Rotex",
 robots: {
  index: false,
  follow: false,
 },
};

export default function DashboardLayout({ children }) {
 return <DashboardWrapper>{children}</DashboardWrapper>;
}
