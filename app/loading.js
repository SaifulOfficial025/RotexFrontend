export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes reveal {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-reveal {
          animation: reveal 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
        .animate-progress {
          animation: progress 1.5s ease-in-out infinite;
        }
      `,
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Animated Text Container */}
        <div className="relative text-5xl md:text-7xl font-extrabold tracking-[0.25em] text-gray-100 select-none">
          ROTEX
          {/* Animated Overlay */}
          <div className="absolute top-0 left-0 h-full text-primary overflow-hidden whitespace-nowrap animate-reveal border-r-[3px] border-primary">
            ROTEX
          </div>
        </div>

        {/* Small Progress Bar */}
        <div className="mt-8 w-48 h-[3px] bg-gray-100 rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/80 rounded-full animate-progress" />
        </div>

        <p className="mt-4 text-xs font-bold text-gray-400 tracking-widest uppercase animate-pulse">
          Initializing...
        </p>
      </div>
    </div>
  );
}
