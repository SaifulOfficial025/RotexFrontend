import { IoRocketOutline, IoEyeOutline } from "react-icons/io5";

export default function MissionVision() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Mission */}
          <div className="bg-white p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-primary/30 transition-colors duration-300 group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <IoRocketOutline
                size={32}
                className="text-primary group-hover:text-white transition-colors duration-300"
              />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Our mission is to empower our clients by providing innovative,
              high-quality solutions that directly address their core
              challenges. We strive to maintain the highest standards of
              integrity, operational excellence, and customer service in every
              project we undertake. By continually pushing the boundaries of
              what is possible, we aim to deliver sustainable, long-term value
              that drives growth and positive impact for all our stakeholders
              and the communities we serve.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-primary/30 transition-colors duration-300 group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <IoEyeOutline
                size={32}
                className="text-primary group-hover:text-white transition-colors duration-300"
              />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              To be the globally recognized leader in our industry, pioneering
              advancements that set new benchmarks for quality and reliability.
              We envision a future where our solutions are integral to the
              success of businesses worldwide, forging a more connected and
              efficient tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
