"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, DollarSign, Phone, Menu } from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const MobileNavigation = () => {
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = [
    {
      name: "Home",
      href: "/",
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: "Services",
      href: "/#services",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: "Pricing",
      href: "/#pricing",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      name: "Contact",
      href: "/#contact",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      name: "Menu",
      href: "#",
      icon: <Menu className="h-5 w-5" />,
    },
  ];

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-border h-16 md:hidden"
    >
      <ul className="flex items-center justify-around h-full px-2">
        {navigationItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname?.includes(item.href));

          return (
            <li key={item.name} className="flex-1">
              <Link
                href={item.href}
                className={`flex flex-col items-center justify-center h-full transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <span
                  className={`transition-transform ${isActive ? "scale-110" : "scale-100"}`}
                >
                  {item.icon}
                </span>
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNavigation;
