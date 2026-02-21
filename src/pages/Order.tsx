import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 🔹 Import all images here
import cupcake1 from "../assets/cupcake1.jpg";
import cupcake2 from "../assets/cupcake2.webp";
import cupcake3 from "../assets/cupcake3.jpg";
import cupcake4 from "../assets/cupcake4.jpg";
import cupcake5 from "../assets/cupcake5.jpg";
import cupcake6 from "../assets/cupcake6.webp";
import cupcake7 from "../assets/cupcake7.webp";

import cake1 from "../assets/cake1.jpg";
import cake2 from "../assets/cake2.jpg";
import cake3 from "../assets/cake3.webp";
import cake4 from "../assets/2.jpg";
import cake5 from "../assets/cake5.jpg";
import cake6 from "../assets/cake6.jpg";
import cake7 from "../assets/cake7.jpg";

import brownie from "../assets/brownie.jpg";
import brownie2 from "../assets/brownie2.jpg";
import brownie3 from "../assets/brownie3.jpg";
import brownie4 from "../assets/brownie4.jpg";
import brownie5 from "../assets/brownie5.jpg";
import brownie6 from "../assets/brownie6.jpg";
import brownie7 from "../assets/brownie7.jpg";
import brownie8 from "../assets/brownie8.jpg";
import brownie9 from "../assets/brownie9.jpg";

import pastry from "../assets/pastry.webp";
import jars from "../assets/jars.png";
import cups from "../assets/cups.jpg";
import bites from "../assets/bites.webp";
import pops from "../assets/pops.webp";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

const menuItems: MenuItem[] = [
  // 🧁 CUPCAKES
  { id: 1, name: "Vanilla Custard with Fruit (optional)", price: 50, category: "Cupcakes", image: cupcake1 },
  { id: 2, name: "Vanilla Funfutti", price: 50, category: "Cupcakes", image: cupcake2 },
  { id: 3, name: "Chocolate Mousse Cupcake", price: 50, category: "Cupcakes", image: cupcake3 },
  { id: 4, name: "Dark Chocolate Cupcake", price: 60, category: "Cupcakes", image: cupcake4 },
  { id: 5, name: "Dark Chocolate with Salted Caramel", price: 60, category: "Cupcakes", image: cupcake5 },
  { id: 6, name: "Red Velvet with Cheese Cream", price: 60, category: "Cupcakes", image: cupcake6 },
  { id: 7, name: "Red Velvet with Chocolate Ganache", price: 60, category: "Cupcakes", image: cupcake7 },

  // 🍰 CAKES
  { id: 8, name: "Vanilla Custard with Fruit (optional)", price: 1200, category: "Cakes", image: cake1 },
  { id: 9, name: "Vanilla Funfutti", price: 1000, category: "Cakes", image: cake2 },
  { id: 10, name: "Chocolate Mousse Cake", price: 1000, category: "Cakes", image: cake3 },
  { id: 11, name: "Dark Chocolate Cake", price: 1200, category: "Cakes", image: cake4 },
  { id: 12, name: "Dark Chocolate with Salted Caramel Cake", price: 1200, category: "Cakes", image: cake5 },
  { id: 13, name: "Red Velvet with Cheese Cream Cake", price: 1000, category: "Cakes", image: cake6 },
  { id: 14, name: "Red Velvet with Chocolate Ganache Cake", price: 1200, category: "Cakes", image: cake7 },

  // 🍫 BROWNIES & BLONDIES
  { id: 15, name: "Chocolate Brownie", price: 50, category: "Brownies & Blondies", image: brownie },
  { id: 16, name: "Oreo Brownie", price: 50, category: "Brownies & Blondies", image: brownie2 },
  { id: 17, name: "Kitkat Brownie", price: 55, category: "Brownies & Blondies", image: brownie3 },
  { id: 18, name: "Nutella Blondie", price: 55, category: "Brownies & Blondies", image: brownie4 },
  { id: 19, name: "Salted Caramel Brownie", price: 55, category: "Brownies & Blondies", image: brownie5 },
  { id: 20, name: "White Chocolate Blondie", price: 45, category: "Brownies & Blondies", image: brownie6 },
  { id: 21, name: "Raspberry Blondie", price: 45, category: "Brownies & Blondies", image: brownie7 },
  { id: 22, name: "Peanut Butter Blondie", price: 50, category: "Brownies & Blondies", image: brownie8 },
  { id: 23, name: "Paradise Blondie Brownie", price: 60, category: "Brownies & Blondies", image: brownie9 },

  // 🍮 DESSERTS
  { id: 24, name: "Pastries (Any Flavour)", price: 120, category: "Desserts", image: pastry },
  { id: 25, name: "Jars (Any Flavour)", price: 120, category: "Desserts", image: jars },
  { id: 26, name: "Dessert Cups (Any Flavour)", price: 35, category: "Desserts", image: cups },
  { id: 27, name: "Cake Bites (Any Flavour)", price: 35, category: "Desserts", image: bites },
  { id: 28, name: "Pop Ups (Any Flavour)", price: 20, category: "Desserts", image: pops },
];

const categories = ["All", "Cupcakes", "Cakes", "Brownies & Blondies", "Desserts"];

interface CartItem extends MenuItem {
  quantity: number;
}

const Order = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().trim().includes(searchTerm.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const updateQuantity = (id: number, qty: number) => {
    if (qty < 1) return;
    setCart((prev) =>
      prev.map((c) => (c.id === id ? { ...c, quantity: qty } : c))
    );
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const getWhatsAppLink = () => {
    let message = "Hello Tastebuds Mumbai! I want to order:\n";
    cart.forEach((item) => {
      message += `- ${item.name} x${item.quantity}\n`;
    });
    message += `Total: ₹${totalPrice}`;
    return `https://wa.me/919326491719?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 space-y-12">
        {/* Intro */}
        <section className="text-center">
          <h1 className="text-5xl md:text-6xl font-cursive text-primary font-bold mb-4">
            🛒 Order Online
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Search your favorite desserts or cakes, add them to your cart, and order easily via WhatsApp.
          </p>
        </section>

        {/* Search Bar */}
        <section className="flex justify-center">
          <input
            type="text"
            placeholder="Search for cakes, cupcakes, brownies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm md:text-base"
          />
        </section>

        {/* Categories */}
        <section className="flex justify-center gap-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 transform ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg scale-105"
                  : "bg-card text-foreground hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-400 hover:to-indigo-400 hover:text-white shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Menu Items */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* Updated image styling */}
              <img src={item.image} alt={item.name} className="w-full max-h-48 object-contain bg-white" />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.name}</h3>
                  <p className="text-muted-foreground mb-2 text-sm">₹{item.price}</p>
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-2 bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-secondary transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
          {filteredItems.length === 0 && (
            <p className="text-center col-span-3 text-muted-foreground">No items found.</p>
          )}
        </section>

        {/* Cart Section */}
        {cart.length > 0 && (
          <section className="bg-card p-6 rounded-2xl shadow-lg max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold text-primary mb-4">Your Cart</h2>
            <div className="space-y-2">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">₹{item.price} x {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-2 text-red-500 font-bold"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="font-semibold text-lg">Total: ₹{totalPrice}</p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                Place Order via WhatsApp
              </a>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Order;
