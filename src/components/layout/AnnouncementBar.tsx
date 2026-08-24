import { businessConfig } from "@/lib/config";
import { telLink } from "@/lib/whatsapp";
import { Phone } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-dark text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 sm:text-sm lg:px-8">
        <p className="min-w-0 flex-1 truncate tracking-wide">
          Fresh meals · Local & continental favourites · Delivery across Accra
        </p>
        <a
          href={telLink(businessConfig.phones.internationalDisplay)}
          className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-chili-gold transition hover:text-white"
          aria-label={`Call ${businessConfig.phones.internationalDisplay}`}
        >
          <Phone className="size-3.5" aria-hidden />
          {businessConfig.phones.internationalDisplay}
        </a>
      </div>
      <span className="sr-only">{businessConfig.name} announcement</span>
    </div>
  );
}
