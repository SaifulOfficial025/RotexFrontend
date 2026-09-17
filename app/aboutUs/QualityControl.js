import { IoShieldCheckmarkOutline, IoSettingsOutline, IoStatsChartOutline } from "react-icons/io5";

export default function QualityControl() {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
              Uncompromising <span className="text-primary">Quality Control</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
            <p className="text-gray-300 leading-relaxed mb-8 text-[15px]">
              Quality isn't just a metric; it's the foundation of everything we build. Our rigorous quality control protocols are deeply embedded into every stage of our service delivery. From initial consultation to final deployment, we employ a multi-tiered inspection process to ensure absolute reliability and excellence.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <IoShieldCheckmarkOutline className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[16px] mb-1">Stringent Compliance</h4>
                  <p className="text-gray-400 text-[14px]">Adhering strictly to international standards and industry best practices in all operational procedures.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <IoSettingsOutline className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[16px] mb-1">Continuous Monitoring</h4>
                  <p className="text-gray-400 text-[14px]">Real-time tracking and automated testing systems that catch discrepancies before they become issues.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <IoStatsChartOutline className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[16px] mb-1">Data-Driven Improvement</h4>
                  <p className="text-gray-400 text-[14px]">Regular audits and feedback loops that allow us to continuously refine our methods and elevate our service benchmarks.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-square md:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
                alt="Quality Control Facility"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
