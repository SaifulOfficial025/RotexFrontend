import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { companyInfo } from "../components/CompanyInfo";

export default function ContactInfo() {
  const cards = [
    {
      icon: FaPhoneAlt,
      title: "Phone Support",
      details: companyInfo.phone,
      action: "Call us anytime",
      color: "from-blue-500/20 to-cyan-500/5",
      textColor: "text-blue-600",
      iconBg: "bg-blue-50",
      link: `tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`,
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      details: companyInfo.email,
      action: "We reply within 24h",
      color: "from-primary/20 to-primary/5",
      textColor: "text-primary",
      iconBg: "bg-primary/10",
      link: `mailto:${companyInfo.email}`,
    },
    {
      icon: FaMapMarkerAlt,
      title: "Office Address",
      details: companyInfo.address,
      action: "Visit our location",
      color: "from-orange-500/20 to-red-500/5",
      textColor: "text-orange-600",
      iconBg: "bg-orange-50",
      link: "https://www.google.com/maps/dir//Rotex+International,+26+Delwar+Complex,+Hatkhola+Rd,+Dhaka+1203/@23.7199051,90.417557,17z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3755b90c31b4a9d1:0xde8534ec449aeb3d!2m2!1d90.4200607!2d23.7197825!3e0?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: FaClock,
      title: "Office Hours",
      details: companyInfo.officeTime.replace(" | ", "\n"),
      action: "Drop by during hours",
      color: "from-green-500/20 to-emerald-500/5",
      textColor: "text-green-600",
      iconBg: "bg-green-50",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          const isMap = card.title === "Office Address";
          const isHours = card.title === "Office Hours";
          return (
            <a
              key={idx}
              href={isHours ? undefined : card.link}
              target={isMap ? "_blank" : undefined}
              rel={isMap ? "noopener noreferrer" : undefined}
              className={`group relative bg-white p-10 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2 flex flex-col items-center text-center ${isHours ? 'cursor-default' : 'cursor-pointer'} block`}
            >
              {/* Background gradient blob that reveals on hover */}
              <div
                className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${card.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              ></div>

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-full ${card.iconBg} flex items-center justify-center ${card.textColor} mb-6 group-hover:scale-110 group-hover:bg-white transition-all duration-500 shadow-sm group-hover:shadow-md relative z-10`}
              >
                <Icon size={24} />
              </div>

              <h4 className="text-xl font-black text-gray-900 mb-3 relative z-10">
                {card.title}
              </h4>
              <p className="text-gray-500 text-[15px] leading-relaxed whitespace-pre-line font-medium mb-6 relative z-10">
                {card.details}
              </p>

              <span
                className={`mt-auto text-sm font-bold uppercase tracking-widest ${card.textColor} opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 relative z-10`}
              >
                {card.action}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
