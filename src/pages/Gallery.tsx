import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  // Array of image imports (you’ll replace with your actual paths)
  const images = [
    "/src/assets/1.webp",
    "/src/assets/2.jpg",
    "/src/assets/3.webp",
    "/src/assets/4.webp",
    "/src/assets/5.webp",
    "/src/assets/6.webp",
    "/src/assets/7.webp",
    "/src/assets/8.webp",
    "/src/assets/9.webp",
    "/src/assets/10.jpg",
    "/src/assets/11.webp",
    "/src/assets/12.webp",
    "/src/assets/13.webp",
    "/src/assets/14.jpg",
    "/src/assets/15.webp",
    "/src/assets/16.jpg",
    "/src/assets/17.jpg",
    "/src/assets/18.webp",
    "/src/assets/19.webp",
    "/src/assets/20.jpg",
    "/src/assets/21.webp",
    "/src/assets/22.jpg",
    "/src/assets/23.webp",
    "/src/assets/24.webp",
    "/src/assets/25.webp",
    "/src/assets/26.webp",
    "/src/assets/27.webp",
    "/src/assets/28.webp",
    "/src/assets/29.webp",
    "/src/assets/30.jpg",
    "/src/assets/31.webp",
    "/src/assets/32.png",
    "/src/assets/33.jpg",
    "/src/assets/34.jpg",
    "/src/assets/35.webp",
    "/src/assets/36.webp",
    "/src/assets/37.webp",
    "/src/assets/38.webp",
    "/src/assets/39.webp",
    "/src/assets/40.webp",
    "/src/assets/41.webp",
    "/src/assets/42.webp",
    "/src/assets/43.webp",
    "/src/assets/44.webp",
    "/src/assets/45.webp",
    "/src/assets/46.webp",
    "/src/assets/47.jpg",
    "/src/assets/48.webp",
    "/src/assets/49.webp",
    "/src/assets/50.webp",
    "/src/assets/51.jpg",
    "/src/assets/52.jpg",
    "/src/assets/53.jpg",
    "/src/assets/54.jpg",
    "/src/assets/55.webp",
    "/src/assets/56.webp",

  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Page Title */}
      <section className="text-center py-12">
        <h1
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
          data-aos="fade-up"
        >
          📸 Our Sweet Gallery
        </h1>
        <p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A delicious glimpse into our handcrafted cakes, desserts, and special creations made with love.
        </p>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          data-aos="fade-up"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <img
                src={src}
                alt={`Tastebuds creation ${index + 1}`}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;

