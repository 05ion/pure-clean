const AnnouncementMarquee = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="font-semibold">🔥 40% OFF BLACK FRIDAY</span>
            <span className="mx-8">•</span>
            <span className="font-semibold">FREE SHIPPING</span>
            <span className="mx-8">•</span>
            <span className="font-semibold">LIMITED TIME SALE</span>
            <span className="mx-8">•</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementMarquee;
