"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MapPin } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const treatments = [
    { name: "Natural Cancer Treatment", href: "/treatments/natural-cancer" },
    { name: "Autoimmunity", href: "/treatments/autoimmunity" },
    { name: "Hormone Testing & Balancing", href: "/treatments/hormone-testing" },
    { name: "Hyperbaric Oxygen", href: "/treatments/hyperbaric-oxygen" },
    { name: "EBOO Therapy", href: "/treatments/eboo-therapy" },
    { name: "Vitamin C Therapy", href: "/treatments/vitamin-c" },
    { name: "PEMF Therapy", href: "/treatments/pemf" },
    { name: "Methylene Blue", href: "/treatments/methylene-blue" },
    { name: "Mistletoe Injections", href: "/treatments/mistletoe" },
    { name: "Rife Frequency Therapy", href: "/treatments/rife" },
    { name: "Long Covid & Vaccine Injury", href: "/treatments/long-covid" },
  ];

  return (
    <header className="bg-white border-b border-sage-100 shadow-sm">
      {/* Top contact bar */}
      <div className="bg-sage-50 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm text-sage-700">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>560 West Brown Road, Mesa, AZ 85201</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:480-292-8602" className="font-medium hover:text-sage-800">
                480-292-8602
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo-transparent.png"
              alt="The Flow Co. IV+O2 Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <div>
              <div className="text-xl font-bold text-sage-800">
                The Flow Co.
              </div>
              <div className="text-sm text-sage-600 font-medium">
                IV+O2
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sage-700 hover:text-sage-800 font-medium">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sage-700 hover:text-sage-800 font-medium">
                    Treatments
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-96 gap-3 p-4">
                      {treatments.map((treatment) => (
                        <Link
                          key={treatment.href}
                          href={treatment.href}
                          className="block p-2 text-sm text-sage-700 hover:text-sage-800 hover:bg-sage-50 rounded-md transition-colors"
                        >
                          {treatment.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/team" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sage-700 hover:text-sage-800 font-medium">
                      Team
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/membership" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sage-700 hover:text-sage-800 font-medium">
                      Membership
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/articles" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sage-700 hover:text-sage-800 font-medium">
                      Articles
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button className="bg-sage-600 hover:bg-sage-700 text-white">
              <Link href="/book-online">Book Online</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium text-sage-700 hover:text-sage-800"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <div className="space-y-2">
                  <div className="text-lg font-medium text-sage-700">Treatments</div>
                  <div className="ml-4 space-y-2">
                    {treatments.map((treatment) => (
                      <Link
                        key={treatment.href}
                        href={treatment.href}
                        className="block text-sage-600 hover:text-sage-800"
                        onClick={() => setIsOpen(false)}
                      >
                        {treatment.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/team"
                  className="text-lg font-medium text-sage-700 hover:text-sage-800"
                  onClick={() => setIsOpen(false)}
                >
                  Team
                </Link>

                <Link
                  href="/membership"
                  className="text-lg font-medium text-sage-700 hover:text-sage-800"
                  onClick={() => setIsOpen(false)}
                >
                  Membership
                </Link>

                <Link
                  href="/articles"
                  className="text-lg font-medium text-sage-700 hover:text-sage-800"
                  onClick={() => setIsOpen(false)}
                >
                  Articles
                </Link>

                <Button className="bg-sage-600 hover:bg-sage-700 text-white mt-4">
                  <Link href="/book-online" onClick={() => setIsOpen(false)}>
                    Book Online
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}