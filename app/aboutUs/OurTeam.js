const teamMembers = [
  {
    name: "John Doe",
    designation: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Jane Smith",
    designation: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Robert Johnson",
    designation: "Lead Engineer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Emily Davis",
    designation: "Quality Assurance",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "John Doe",
    designation: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Jane Smith",
    designation: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Robert Johnson",
    designation: "Lead Engineer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Emily Davis",
    designation: "Quality Assurance",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
];

export default function OurTeam() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-gray-100 pb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Meet Our <span className="text-primary">Team</span>
            </h2>
          </div>
          <p className="text-gray-500 text-[15px] max-w-sm md:text-right leading-relaxed">
            Decades of combined expertise, a shared passion for quality, and a
            relentless drive to deliver excellence.
          </p>
        </div>

        {/* Cards Grid — Portrait full-bleed image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Full-bleed image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Permanent bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>

              {/* Primary color reveal on hover */}
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Corner accent */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/40 group-hover:border-white transition-colors duration-300"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40 group-hover:border-white transition-colors duration-300"></div>

              {/* Bottom text - slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                {/* Designation - hidden by default, shows on hover */}
                <p className="text-primary text-[12px] font-bold uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {member.designation}
                </p>
                {/* Name always visible */}
                <h3 className="text-white text-xl font-black tracking-tight leading-tight">
                  {member.name}
                </h3>
                {/* Animated underline */}
                <div className="mt-3 w-0 h-[2px] bg-primary group-hover:w-12 transition-all duration-400 delay-100"></div>
              </div>

              {/* Index number watermark */}
              <div className="absolute top-5 right-5 text-[11px] font-black text-white/30 group-hover:text-white/60 transition-colors duration-300 tracking-widest">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
