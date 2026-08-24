"use client";

import { navCategories } from "@/data/categories";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export function CategoryNav() {
  const [active, setActive] = useState("all");

  return (
    <section
      id="categories"
      className="border-y border-dark/8 bg-white/60 py-4 backdrop-blur-sm"
      aria-label="Quick categories"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          {navCategories.map((category) => {
            const isActive = active === category.id;
            return (
              <Link
                key={category.id}
                href={category.href}
                onClick={() => setActive(category.id)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "border-chili-red bg-chili-red text-white"
                    : "border-dark/10 bg-cream text-dark hover:border-dark/20 hover:bg-white",
                )}
              >
                {category.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
