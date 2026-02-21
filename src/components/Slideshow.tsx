import { useState, useEffect } from "react";
import { gsap } from "gsap";
import cake1 from "@/assets/cake-1.jpg";
import cake2 from "@/assets/cake-2.jpg";
import cake3 from "@/assets/cake-3.jpg";
import cake4 from "@/assets/cake-4.jpg";
import cake5 from "@/assets/cake-5.jpg";

const images = [cake1, cake2, cake3, cake4, cake5];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".slideshow-image",
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-6xl mx-auto my-8 px-4">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl" style={{ aspectRatio: "16/9" }}>
        <img
          src={images[currentIndex]}
          alt={`Cake ${currentIndex + 1}`}
          className="slideshow-image w-full h-full object-cover"
        />
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
