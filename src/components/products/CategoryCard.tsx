import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/data/types";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
  className?: string;
  index?: number;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className={cn(
        "group relative block min-h-[220px] overflow-hidden rounded-2xl focus-visible:outline-none",
        className,
      )}
    >
      {category.image ? (
        <Image
          src={category.image}
          alt=""
          fill
          sizes="(max-width: 768px) 90vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 texture-dark" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-dark/10" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-xl font-semibold text-cream">{category.label}</h3>
        {category.description ? (
          <p className="mt-1.5 text-sm leading-relaxed text-cream/75">
            {category.description}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
