const AnnouncementMarquee = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden relative w-full">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center mx-4 text-sm md:text-base">
            <span className="font-semibold">🔥 40% OFF BLACK FRIDAY</span>
            <span className="mx-4">•</span>
            <span className="font-semibold">FREE SHIPPING</span>
            <span className="mx-4">•</span>
            <span className="font-semibold">LIMITED TIME SALE</span>
            <span className="mx-4">•</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementMarquee;
