import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Tastebuds Mumbai"
            className="w-12 h-12 rounded-full"
          />
          <span className="font-bold text-xl hidden sm:inline">
            Tastebuds Mumbai
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-secondary transition-colors">
            Home
          </Link>
          <Link to="/menu" className="hover:text-secondary transition-colors">
            Menu
          </Link>
          <Link
            to="/customization"
            className="hover:text-secondary transition-colors"
          >
            Customization
          </Link>
          <Link to="/gallery" className="hover:text-secondary transition-colors">
            Gallery
          </Link>
          <Link to="/about" className="hover:text-secondary transition-colors">
            About Us
          </Link>
          <Link to="/order" className="hover:text-secondary transition-colors">
            Order Online
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-2xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
