import { LinkButton } from "@/components/ui/LinkButton";
import { whatsappOrderLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function MobileOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-dark/10 bg-cream/95 px-3 py-2.5 backdrop-blur-md md:hidden pb-[max(0.65rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <LinkButton href="#menu" variant="outline" className="w-full">
          Browse Menu
        </LinkButton>
        <LinkButton
          href={whatsappOrderLink()}
          target="_blank"
          rel="noopener noreferrer"
          variant="whatsapp"
          className="w-full"
        >
          <MessageCircle className="size-4" aria-hidden />
          WhatsApp Order
        </LinkButton>
      </div>
    </div>
  );
}
