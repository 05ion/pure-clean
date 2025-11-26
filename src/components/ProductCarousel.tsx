import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import productMain from "@/assets/product-main.jpg";
import featureReach from "@/assets/feature-reach.webp";
import multipurpose from "@/assets/multipurpose.webp";
import tankCapacity from "@/assets/tank-capacity.webp";
import powerfulSteam from "@/assets/powerful-steam.webp";

const images = [
  { src: productMain, alt: "PureClean Pro Steam Cleaner with All Accessories" },
  { src: featureReach, alt: "Extended Reach and Easy to Use Design" },
  { src: multipurpose, alt: "Multipurpose Heavy-Duty Steam Cleaner" },
  { src: tankCapacity, alt: "Large 1.5L Tank Capacity" },
  { src: powerfulSteam, alt: "1800W Powerful Steam Cleaning" },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full max-w-md mx-auto md:max-w-full">
      {/* Main Image */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-muted mb-4 shadow-lg">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="block w-full h-auto object-contain"
        />
        
        {/* Navigation Buttons */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full shadow-lg"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full shadow-lg"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Thumbnail Strip */}
      <div className="relative">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                currentIndex === index
                  ? "border-primary scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
