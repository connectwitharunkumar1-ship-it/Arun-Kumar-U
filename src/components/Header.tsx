import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-md py-3 border-slate-200 shadow-sm"
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold text-[#004aad] leading-none">Ii-MAT</span>
            <span className="text-[8px] font-serif font-medium text-slate-500 uppercase tracking-tighter">Indian Institute</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink
                    href={link.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-slate-100/50 font-medium"
                    )}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <Link to="/admin">
              <Button variant="ghost" className="font-medium">Login / Signup</Button>
            </Link>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#004aad] hover:bg-[#003366] text-white px-6 rounded-full font-medium"
            >
              Get Brochure
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Button 
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    // Close sheet if possible, but SheetTrigger usually handles it or we need state
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full py-6 rounded-xl font-medium text-lg"
                >
                  Get Brochure
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
