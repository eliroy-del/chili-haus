import { LinkButton } from "@/components/ui/LinkButton";
import { businessConfig } from "@/lib/config";
import { whatsappOrderLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  label?: string;
  message?: string;
  productName?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function WhatsAppButton({
  label = "Order on WhatsApp",
  productName,
  size = "md",
  className,
}: WhatsAppButtonProps) {
  return (
    <LinkButton
      href={whatsappOrderLink(productName)}
      target="_blank"
      rel="noopener noreferrer"
      variant="whatsapp"
      size={size}
      className={className}
      aria-label={`${label} — ${businessConfig.name}`}
    >
      <MessageCircle className="size-4" aria-hidden />
      {label}
    </LinkButton>
  );
}
