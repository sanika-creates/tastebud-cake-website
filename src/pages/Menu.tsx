import Header from "@/components/Header";
import Footer from "@/components/Footer";
import menu1 from "@/assets/menu1.jpg";
import menu2 from "@/assets/menu2.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Menu Page 1 */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={menu1}
              alt="Tastebuds Mumbai Menu Page 1"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Menu Page 2 */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={menu2}
              alt="Tastebuds Mumbai Menu Page 2"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
