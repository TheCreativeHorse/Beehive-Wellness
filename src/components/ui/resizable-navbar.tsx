"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

// Navbar Root Component
export const Navbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute top-0 z-50 w-full bg-transparent",
      className
    )}
    {...props}
  />
));
Navbar.displayName = "Navbar";

// Navbar Body Component
export const NavBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full flex h-20 items-center px-4",
      className
    )}
    {...props}
  />
));
NavBody.displayName = "NavBody";

// Navbar Logo Component
export const NavbarLogo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center", className)}
    {...props}
  />
));
NavbarLogo.displayName = "NavbarLogo";

// Navbar Items Component
interface NavItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<{ name: string; link: string }>;
}

export const NavItems = React.forwardRef<HTMLDivElement, NavItemsProps>(
  ({ className, items, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("hidden md:flex items-center space-x-8", className)}
      {...props}
    >
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="text-white hover:text-white/80 transition-colors font-medium text-lg"
        >
          {item.name}
        </a>
      ))}
    </div>
  )
);
NavItems.displayName = "NavItems";

// Navbar Button Component
interface NavbarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const NavbarButton = React.forwardRef<HTMLButtonElement, NavbarButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        variant === "primary" &&
          "bg-pigment-blue text-white hover:bg-pigment-blue/90 px-6 py-3 text-base",
        variant === "secondary" &&
          "border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2",
        className
      )}
      {...props}
    />
  )
);
NavbarButton.displayName = "NavbarButton";

// Mobile Nav Component
export const MobileNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("md:hidden", className)}
    {...props}
  />
));
MobileNav.displayName = "MobileNav";

// Mobile Nav Header Component
export const MobileNavHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between px-4 py-4 h-20", className)}
    {...props}
  />
));
MobileNavHeader.displayName = "MobileNavHeader";

// Mobile Nav Toggle Component
interface MobileNavToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

export const MobileNavToggle = React.forwardRef<HTMLButtonElement, MobileNavToggleProps>(
  ({ className, isOpen, ...props }, ref) => (
    <button
      ref={ref}
      className={cn("p-2 hover:bg-white/10 rounded-md text-white", className)}
      {...props}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  )
);
MobileNavToggle.displayName = "MobileNavToggle";

// Mobile Nav Menu Component
interface MobileNavMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavMenu = React.forwardRef<HTMLDivElement, MobileNavMenuProps>(
  ({ className, isOpen, onClose, children, ...props }, ref) => {
    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "absolute top-full left-0 right-0 bg-background border-b shadow-lg px-4 py-4 space-y-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
MobileNavMenu.displayName = "MobileNavMenu";
