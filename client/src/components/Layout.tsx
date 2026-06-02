import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, MapPin, Clock, Menu, X, Shield, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection for navbar shadow/blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top Banner (Desktop Only) */}
      <div className="hidden lg:block bg-primary text-primary-foreground text-xs py-2 border-b border-primary-foreground/10">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              206 E Chubbuck Rd, Pocatello, ID 83202
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-secondary" />
              Mon - Fri: 8:00 AM - 5:00 PM | 24/7 Emergency Restoration
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:2082371938" className="font-semibold text-secondary hover:underline flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              Office: (208) 237-1938
            </a>
            <span className="text-primary-foreground/40">|</span>
            <a href="tel:2082444420" className="font-bold text-red-400 hover:text-red-300 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" />
              24/7 Dispatch: (208) 244-4420
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border/50 py-3"
            : "bg-background py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="p-2 bg-primary rounded-lg text-secondary transition-transform duration-300 group-hover:scale-105">
                <Shield className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight text-primary leading-tight">
                  ROCKY MOUNTAIN
                </span>
                <span className="font-body text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                  Cleaning & Restoration
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  className={`font-display text-sm font-semibold tracking-wide cursor-pointer transition-colors hover:text-secondary ${
                    location === item.href
                      ? "text-secondary border-b-2 border-secondary pb-1"
                      : "text-foreground/80"
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </nav>

          {/* Header Action Button (Desktop Only) */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:2082371938">
              <Button className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 btn-hover-effect flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                (208) 237-1938
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground/80 hover:text-primary focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl animate-fade-in">
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-display text-lg font-bold py-2 cursor-pointer border-b border-border/40 ${
                      location === item.href ? "text-secondary" : "text-foreground/80"
                    }`}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:2082371938" className="w-full">
                  <Button className="w-full bg-primary text-primary-foreground font-semibold py-6 flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5 text-secondary" />
                    Call Office: (208) 237-1938
                  </Button>
                </a>
                <a href="tel:2082444420" className="w-full">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6 flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5 animate-pulse" />
                    24/7 Dispatch: (208) 244-4420
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Page Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-24 md:pb-12 border-t border-primary-foreground/10">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary rounded-lg text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight">
                ROCKY MOUNTAIN
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed font-body">
              Since 2007, Rocky Mountain Cleaning & Restoration has provided high-end water, fire, mold, and asbestos restoration services in Pocatello and surrounding areas. Licensed, insured, and ready 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-md uppercase tracking-wider text-secondary">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm font-body">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <div className="text-primary-foreground/70 hover:text-secondary hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5 cursor-pointer">
                      <ChevronRight className="w-3.5 h-3.5" />
                      {item.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-md uppercase tracking-wider text-secondary">
              Contact Details
            </h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70 font-body">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>
                  206 E Chubbuck Rd,<br />
                  Pocatello, ID 83202
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a href="tel:2082371938" className="hover:text-secondary hover:underline">
                  Office: (208) 237-1938
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-red-400 shrink-0" />
                <a href="tel:2082444420" className="hover:text-red-300 font-semibold text-red-400">
                  24/7 Emergency: (208) 244-4420
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Service Area */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-md uppercase tracking-wider text-secondary">
              Business Hours
            </h3>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70 font-body">
              <li className="flex justify-between border-b border-primary-foreground/10 pb-1.5">
                <span>Mon - Fri:</span>
                <span className="font-semibold text-primary-foreground">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-primary-foreground/10 pb-1.5">
                <span>Sat - Sun:</span>
                <span className="text-primary-foreground/50">Closed (Office)</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-red-400 font-semibold pt-1">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                24/7 Emergency Dispatch Available
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50 font-body gap-4">
          <p>
            &copy; {new Date().getFullYear()} Rocky Mountain Cleaning & Restoration. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <span>Licensed • Insured • Bonded</span>
            <span>IICRC Certified Firm</span>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Click-to-Call Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/90 backdrop-blur-md border-t border-border flex gap-3">
        <a href="tel:2082371938" className="flex-1">
          <Button className="w-full bg-primary text-primary-foreground font-bold py-6 flex items-center justify-center gap-2 shadow-lg">
            <Phone className="w-5 h-5 text-secondary" />
            Call Office
          </Button>
        </a>
        <a href="tel:2082444420" className="flex-1">
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 flex items-center justify-center gap-2 shadow-lg">
            <Shield className="w-5 h-5 animate-pulse" />
            24/7 Emergency
          </Button>
        </a>
      </div>
    </div>
  );
}
