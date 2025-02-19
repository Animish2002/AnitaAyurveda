import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="border-b bg-white">
      <div className="flex h-20 items-center px-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center mr-8">
          <div className="h-10 w-10 bg-emerald-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-serif">A</span>
          </div>
          <div className="ml-3">
            <h1 className="text-lg font-serif text-stone-800">Anita Ayurveda</h1>
            <p className="text-sm text-emerald-600 font-medium">Holistic Healing Center</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-stone-50 hover:text-emerald-600 focus:bg-stone-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href="/"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-stone-600 hover:text-emerald-600">About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-2">
                    <NavigationMenuLink 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-50 hover:text-emerald-600"
                      href="/our-story"
                    >
                      Our Story
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-50 hover:text-emerald-600"
                      href="/team"
                    >
                      Our Team
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-stone-600 hover:text-emerald-600">Treatments</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[250px] p-2">
                    <NavigationMenuLink 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-50 hover:text-emerald-600"
                      href="/panchakarma"
                    >
                      Panchakarma
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-50 hover:text-emerald-600"
                      href="/consultation"
                    >
                      Consultation
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-stone-50 hover:text-emerald-600 focus:bg-stone-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href="/contact"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="bg-emerald-600 hover:bg-emerald-700">
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
                <Button variant="ghost" className="justify-start" asChild>
                  <a href="/">Home</a>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <a href="/about">About Us</a>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <a href="/treatments">Treatments</a>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <a href="/contact">Contact</a>
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700 mt-4">
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