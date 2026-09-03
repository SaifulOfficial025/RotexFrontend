import Image from "next/image";
import Link from "next/link";

// ─── Slide Content Panel ──────────────────────────────────────────────────────
// Renders the animated text (left) and image (right) for the active slide.
export default function SlideContent({ slide, animKey, currentSlide }) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center px-4 md:px-10 lg:px-16 py-6 md:py-0">
      {/* Left: Text — animates from bottom */}
      <div
        key={`text-${animKey}`}
        className="w-full md:flex-1 flex flex-col justify-center md:pr-8 animate-slide-up text-center md:text-left"
      >
        {/* Brand / Logo text */}
        <span
          className={`text-sm font-bold uppercase tracking-[3px] mb-2 md:mb-3 ${slide.logoColor}`}
        >
          {slide.logoText}
        </span>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight mb-3 md:mb-4 drop-shadow-lg">
          {slide.title}
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-white/75 mb-4 md:mb-6 max-w-sm leading-relaxed mx-auto md:mx-0">
          {slide.description}
        </p>

        {/* Price — only shown when defined */}
        {slide.price && (
          <div className="mb-4 md:mb-6">
            <span className="text-xl md:text-2xl font-bold text-white">{slide.price}</span>
          </div>
        )}

        {/* CTA */}
        <Link
          href="#"
          className="inline-block self-center md:self-start px-6 md:px-7 py-2.5 md:py-3 bg-white text-gray-900 text-sm font-bold uppercase tracking-wide hover:bg-primary hover:text-white transition-all duration-300 rounded-sm shadow-lg"
        >
          Shop Now
        </Link>
      </div>

      {/* Right: Image — animates from right */}
      <div
        key={`img-${animKey}`}
        className="w-full md:flex-1 flex items-center justify-center animate-slide-right mt-4 md:mt-0"
      >
        <div className="relative w-full h-[200px] sm:h-[240px] md:h-full md:min-h-[380px]">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-contain drop-shadow-2xl"
            priority={currentSlide === 0}
            quality={80}
          />
        </div>
      </div>

      {/* ── CSS Animations ── */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .animate-slide-right {
          animation: slideRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </div>
  );
}
