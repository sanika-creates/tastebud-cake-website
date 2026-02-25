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
    "/gallery/1.webp",
    "/gallery/2.jpg",
    "/gallery/3.webp",
    "/gallery/4.webp",
    "/gallery/5.webp",
    "/gallery/6.webp",
    "/gallery/7.webp",
    "/gallery/8.webp",
    "/gallery/9.webp",
    "/gallery/10.jpg",
    "/gallery/11.webp",
    "/gallery/12.webp",
    "/gallery/13.webp",
    "/gallery/14.jpg",
    "/gallery/15.webp",
    "/gallery/16.jpg",
    "/gallery/17.jpg",
    "/gallery/18.webp",
    "/gallery/19.webp",
    "/gallery/20.jpg",
    "/gallery/21.webp",
    "/gallery/22.jpg",
    "/gallery/23.webp",
    "/gallery/24.webp",
    "/gallery/25.webp",
    "/gallery/26.webp",
    "/gallery/27.webp",
    "/gallery/28.webp",
    "/gallery/29.webp",
    "/gallery/30.jpg",
    "/gallery/31.webp",
    "/gallery/32.png",
    "/gallery/33.jpg",
    "/gallery/34.jpg",
    "/gallery/35.webp",
    "/gallery/36.webp",
    "/gallery/37.webp",
    "/gallery/38.webp",
    "/gallery/39.webp",
    "/gallery/40.webp",
    "/gallery/41.webp",
    "/gallery/42.webp",
    "/gallery/43.webp",
    "/gallery/44.webp",
    "/gallery/45.webp",
    "/gallery/46.webp",
    "/gallery/47.jpg",
    "/gallery/48.webp",
    "/gallery/49.webp",
    "/gallery/50.webp",
    "/gallery/51.jpg",
    "/gallery/52.jpg",
    "/gallery/53.jpg",
    "/gallery/54.jpg",
    "/gallery/55.webp",
    "/gallery/56.webp",

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

