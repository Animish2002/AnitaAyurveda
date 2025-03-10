import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle home scroll
  const handleHomeScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="border-b bg-white">
      <div className="flex h-20 items-center px-4 max-w-7xl mx-auto">
        <div className="flex items-center mr-8">
          <div className="w-20 rounded-full flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dkv3bx51z/image/upload/v1741200118/AnitaAyurvedaLogo_ggkap2.webp"
              alt="Anita Ayurveda Logo"
            />
          </div>
          <div className="ml-3">
            <h1 className="text-lg font-serif text-stone-800">
              Anita Ayurveda
            </h1>
            <p className="text-sm text-emerald-600 font-medium">
              Holistic Healing Center
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={handleHomeScroll}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-stone-50 hover:text-emerald-600 focus:bg-stone-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection("#about")}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-stone-50 hover:text-emerald-600 focus:bg-stone-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection("#treatments")}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-stone-50 hover:text-emerald-600 focus:bg-stone-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Treatments
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection("#appointment")}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-stone-50 hover:text-emerald-600 focus:bg-stone-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            onClick={() => scrollToSection("#appointment")}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-1 justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={handleHomeScroll}
                >
                  Home
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={() => scrollToSection("#about")}
                >
                  About Us
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={() => scrollToSection("#treatments")}
                >
                  Treatments
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={() => scrollToSection("#appointment")}
                >
                  Contact
                </Button>
                <Button
                  className="bg-emerald-600 hover:bg-emerald-700 mt-4"
                  onClick={() => scrollToSection("#appointment")}
                >
                  Book Appointment
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
