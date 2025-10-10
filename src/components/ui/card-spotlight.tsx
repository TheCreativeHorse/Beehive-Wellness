"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardSpotlight = React.forwardRef<HTMLDivElement, CardSpotlightProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-pigment-blue/20 bg-gradient-to-br from-pigment-blue/90 to-pigment-blue/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-pigment-blue/40 hover:shadow-2xl hover:shadow-pigment-blue/30",
          className
        )}
        {...props}
      >
        {/* Spotlight effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);

CardSpotlight.displayName = "CardSpotlight";
