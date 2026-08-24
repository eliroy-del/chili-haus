import { businessConfig } from "@/lib/config";
import { whatsappOrderLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-dark text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 sm:text-sm lg:px-8">
        <p className="min-w-0 flex-1 truncate tracking-wide">
          Fresh meals · Local & continental favourites · Delivery across Accra
        </p>
        <a
          href={whatsappOrderLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-chili-gold transition hover:text-white"
        >
          <MessageCircle className="size-3.5" aria-hidden />
          Order on WhatsApp
          <span aria-hidden>→</span>
        </a>
      </div>
      <span className="sr-only">{businessConfig.name} announcement</span>
    </div>
  );
}
