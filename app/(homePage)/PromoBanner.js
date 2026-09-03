import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="py-16 my-12 bg-gray-900 text-center rounded-sm">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
        Summer Clearance Sale
      </h2>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        Get up to 50% off on selected items. Don&apos;t miss out on the biggest
        sale of the year. Upgrade your gear today.
      </p>
      <Link
        href="#"
        className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-sm hover:bg-opacity-90 transition-all uppercase tracking-wide text-sm"
      >
        Discover Now
      </Link>
    </section>
  );
}
