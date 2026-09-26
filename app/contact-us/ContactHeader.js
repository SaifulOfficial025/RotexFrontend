export default function ContactHeader() {
  return (
    <div className="bg-white py-16 md:py-24 relative overflow-hidden border-b border-gray-100">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-4">
          Let's <span className="text-primary">Connect</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about our products, need technical support, or want to explore partnership opportunities.
        </p>
      </div>
    </div>
  );
}
