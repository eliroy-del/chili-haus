import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button-variants";
import type { ButtonSize, ButtonVariant } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export function LinkButton({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {variant === "whatsapp" ? <WhatsAppIcon className="size-4" /> : null}
      {children}
    </a>
  );
}
