import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-16 space-y-12">
        {/* Page Title */}
        <section className="text-center">
          <h1 className="text-5xl md:text-6xl font-cursive text-primary font-bold mb-4">
            💜 About Us – “Connect & Build Trust”
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Focus on who we are, our story, our process, and our belief.
          </p>
        </section>

        {/* Intro Paragraph */}
        <section className="max-w-4xl mx-auto text-center">
          <p className="text-sm md:text-base text-foreground leading-relaxed">
            At <span className="font-semibold">Tastebuds Mumbai</span>, every dessert begins in a cozy home kitchen — where recipes are stirred with love, creativity, and a hint of nostalgia.
          </p>
        </section>

        {/* Our Story */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Story</h2>
          <p className="text-sm md:text-base text-foreground leading-relaxed">
            What started as one girl’s love for baking for family and friends soon grew into a city-wide favorite. <span className="font-semibold">Tastebuds Mumbai</span> was born from the idea that desserts should taste like joy — comforting, fresh, and full of heart.
          </p>
        </section>

        {/* Our Belief */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Belief</h2>
          <p className="text-sm md:text-base text-foreground leading-relaxed">
            We believe every celebration deserves something personal. That’s why we don’t mass-produce — we bake in small batches, use premium ingredients, and focus on customization that reflects you.
          </p>
        </section>

        {/* The Tastebuds Touch */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">The Tastebuds Touch</h2>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-foreground">
            <li>Freshly baked to order</li>
            <li>100% eggless options</li>
            <li>Designed to match your theme</li>
            <li>Delivered with care across Mumbai</li>
          </ul>
        </section>

        {/* Ordering Info */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ordering Info</h2>
          <p className="text-sm md:text-base text-foreground leading-relaxed">
            To place an order, simply WhatsApp us with your occasion and flavour. We’ll help you customize your dessert and make it memorable.
          </p>
        </section>

        {/* End Note */}
        <section className="max-w-4xl mx-auto text-center">
          <p className="text-sm md:text-base text-foreground leading-relaxed italic">
            From our oven to your heart — <span className="font-semibold">Tastebuds Mumbai</span> is where homemade goodness meets creative craftsmanship.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
