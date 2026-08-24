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
        "group relative block min-h-[140px] overflow-hidden rounded-xl focus-visible:outline-none sm:min-h-[160px]",
        className,
      )}
    >
      {category.image ? (
        <Image
          src={category.image}
          alt=""
          fill
          sizes="(max-width: 768px) 90vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 texture-dark" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-dark/10" />
      <div className="absolute inset-x-0 bottom-0 p-3.5">
        <h3 className="text-base font-semibold text-cream sm:text-lg">
          {category.label}
        </h3>
        {category.description ? (
          <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-cream/75">
            {category.description}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
