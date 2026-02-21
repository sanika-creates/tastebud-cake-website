import { useEffect } from "react";
import AOS from "aos";
import Header from "@/components/Header";
import Slideshow from "@/components/Slideshow";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Slideshow */}
      <section id="home" className="py-8">
        <Slideshow />
      </section>

      {/* Tagline */}
      <section className="text-center py-8 px-4">
        <h2 
          className="font-cursive text-4xl md:text-5xl lg:text-6xl text-primary mb-4 font-bold"
          data-aos="fade-up"
        >
          Homemade. Heart-baked. Happiness delivered.
        </h2>
      </section>

      {/* Welcome Section */}
      <section className="container mx-auto px-4 py-12 text-center max-w-4xl" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Welcome to Tastebuds Mumbai
        </h1>
        <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
          Where every dessert is made with a pinch of creativity and a whole lot of love.
          From freshly baked cakes to indulgent jars and cupcakes, we bring you sweetness 
          straight from our kitchen in Mumbai.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/919326491719" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <i className="fab fa-whatsapp mr-2"></i>
            Order on WhatsApp
          </a>
          <a href="/menu" className="btn-primary">
            <i className="fas fa-cake-candles mr-2"></i>
            View Menu
          </a>
        </div>
      </section>

      {/* Why People Love Us */}
      <section id="about" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12" data-aos="fade-up">
            <i className="fas fa-heart text-red-400 mr-3"></i>
            Why People Love Us
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center p-6 bg-card rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="text-5xl mb-4">🧁</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Homemade Goodness</h3>
              <p className="text-muted-foreground">
                Every creation is baked fresh in small batches for that warm, home-kitchen taste.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="text-5xl mb-4">🎂</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Custom Designs</h3>
              <p className="text-muted-foreground">
                We design cakes and desserts that reflect you — your style, your story, your celebration.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="text-5xl mb-4">🥚</div>
              <h3 className="text-xl font-semibold text-primary mb-3">100% Eggless Options</h3>
              <p className="text-muted-foreground">
                Made to include everyone at your table.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Freshly Delivered</h3>
              <p className="text-muted-foreground">
                One message and your dessert is on its way across Mumbai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Creations */}
      <section id="menu" className="py-16 container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-primary mb-4">
            <i className="fas fa-star mr-3"></i>
            Our Signature Creations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse of our most-loved treats crafted with care and creativity.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-right">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🍫</span>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">Chocolate Truffle Cake</h3>
                <p className="text-muted-foreground">Rich, decadent, and our all-time favorite.</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-left">
            <div className="flex items-start gap-4">
              <span className="text-3xl">❤️</span>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">Red Velvet Jar</h3>
                <p className="text-muted-foreground">A sweet treat layered with love.</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-right">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🧁</span>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">Assorted Cupcakes</h3>
                <p className="text-muted-foreground">Perfect for parties, gifting, or midnight cravings.</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-left">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎨</span>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">Custom Theme Cakes</h3>
                <p className="text-muted-foreground">Because your moments deserve something made just for you.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="/menu" className="btn-primary">
            See Full Menu
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section id="gallery" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12" data-aos="fade-up">
            <i className="fas fa-comments mr-3"></i>
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-foreground italic mb-4">
                "The cake looked stunning and tasted even better! Totally worth every bite 💕"
              </p>
              <p className="text-primary font-semibold">— Neha S.</p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-foreground italic mb-4">
                "My order was customized exactly as I imagined — fresh, flavorful, and delivered on time!"
              </p>
              <p className="text-primary font-semibold">— Ritika D.</p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-foreground italic mb-4">
                "Their brownies are my new obsession 😍 Soft, gooey, and so good!"
              </p>
              <p className="text-primary font-semibold">— Kavya T.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 text-center" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-cursive text-primary mb-6">
            ✨ Every Dessert Tells a Story
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
            At Tastebuds Mumbai, each bake begins with a whisk, a smile, and a purpose — 
            to make your moments a little sweeter.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
