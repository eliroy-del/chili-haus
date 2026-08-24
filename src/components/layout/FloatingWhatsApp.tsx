import { businessConfig } from "@/lib/config";
import { whatsappOrderLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappOrderLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 z-40 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.8)] transition hover:bg-whatsapp-dark hover:scale-105 md:bottom-6 md:flex"
      aria-label={`Order on WhatsApp — ${businessConfig.name}`}
      title="Order on WhatsApp"
    >
      <MessageCircle className="size-6" aria-hidden />
    </a>
  );
}
