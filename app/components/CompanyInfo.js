import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const companyInfo = {
  name: "Rotex Lab",
  shortDescription:
    "Rotex Lab is a trusted supplier of premium laboratory, medical, and industrial equipment — delivering quality solutions across Bangladesh since inception.",
  phone: "+880 1700-000000",
  email: "info@rotexbd.com",
  address:
    "House #12, Road #4, Block B, Niketan, Gulshan-1, Dhaka-1212, Bangladesh",
  officeTime: "Sun – Thu: 9:00 AM – 6:00 PM | Fri – Sat: Closed",
  socialLinks: [
    {
      Icon: FaFacebook,
      href: "#",
      label: "Facebook",
      color: "hover:bg-[#1877F2]",
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
      Icon: FaSquareXTwitter,
      href: "#",
      label: "X (Twitter)",
      color: "hover:bg-[#000000]",
    },
    {
      Icon: FaLinkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:bg-[#0A66C2]",
    },
  ],
};
