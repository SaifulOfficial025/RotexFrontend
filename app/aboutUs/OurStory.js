export default function OurStory() {
  const stats = [
    { value: "20+", label: "Years of Excellence" },
    { value: "500+", label: "Clients Served" },
    { value: "50+", label: "Global Brands" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section className="relative w-full min-h-[700px] flex items-center overflow-hidden bg-white">
      {/* Subtle background image on the right side only */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
          alt="Our Story"
          className="w-full h-full object-cover"
        />
        {/* Fade left so it blends into white */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
        {/* Subtle color tint */}
        <div className="absolute inset-0 bg-primary/5"></div>
      </div>

      {/* Light accent orbs */}
      <div className="absolute top-16 left-10 w-72 h-72 rounded-full bg-primary/8 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-56 h-56 rounded-full bg-primary/6 blur-2xl pointer-events-none"></div>

      {/* Content */}
      <div className="relative  z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 md:py-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Text Block */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Driven by Quality,{" "}
              <span className="text-primary">Built on Trust</span>
            </h1>

            {/* Decorative divider */}
            <div className="w-16 h-1 bg-primary rounded-full"></div>

            {/* Body */}
            <p className="text-gray-600 text-[16px] leading-relaxed max-w-lg">
              Established in 2006, Rotex International has grown as a scientific
              products company serving the laboratory, industrial, textile,
              medical, pharmaceutical, educational, and other sectors across
              Bangladesh. <br />
              We specialize in the import, distribution, supply, and support of
              scientific instruments, weighing equipment, laboratory testing
              products, textile testing equipment, consumables, and measurement
              solutions.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg">
              Our approach is to provide quality products, reasonable pricing,
              dependable service, and lasting customer support. We believe our
              success is built not only on the products we supply, but also on
              the trust and relationships we develop with our customers.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/contactUs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold text-[14px] tracking-wide transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="#mission"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-bold text-[14px] tracking-wide hover:border-primary hover:text-primary transition-all duration-300"
              >
                Our Mission ↓
              </a>
            </div>
          </div>

          {/* Right: Stats cards */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 p-6 md:p-8  border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] hover:border-primary/30 transition-all duration-300 group"
              >
                <span className="text-4xl md:text-5xl font-black text-primary transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-gray-500 text-[14px] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
