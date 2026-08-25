import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { businessConfig } from "@/lib/config";
import { telLink, whatsappOrderLink } from "@/lib/whatsapp";
import { Phone, Truck, Wallet } from "lucide-react";
import type { Metadata } from "next";
import type { ReactNode, SVGProps } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${businessConfig.name} in Accra — WhatsApp, phone, delivery and MoMo details.`,
  alternates: {
    canonical: "/contact",
  },
};

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.75A3.75 3.75 0 0 0 3.75 7.5v9a3.75 3.75 0 0 0 3.75 3.75h9a3.75 3.75 0 0 0 3.75-3.75v-9a3.75 3.75 0 0 0-3.75-3.75h-9Zm9.75 1.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" />
    </svg>
  );
}

function SnapchatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.504 0 .17.1.32.26.37.17.05 1.25.37 1.99.57.47.13.81.22 1.05.29.3.09.49.35.47.66-.04.53-.45.85-.86 1.06-.13.07-.41.2-.41.2-.48.2-.82.55-.82 1.11 0 .84.83 1.48 1.55 1.91.25.15.44.35.47.6.03.28-.12.53-.37.66-.49.25-1.28.35-2.11-.05-.17-.08-.35-.03-.47.1-.55.62-1.37 1.61-2.74 1.61-.39 0-.76-.08-1.11-.23-.19-.08-.4-.04-.55.1-.55.52-1.39 1.27-2.56 1.27s-2.01-.75-2.56-1.27c-.15-.14-.36-.18-.55-.1-.35.15-.72.23-1.11.23-1.37 0-2.19-.99-2.74-1.61-.12-.13-.3-.18-.47-.1-.83.4-1.62.3-2.11.05-.25-.13-.4-.38-.37-.66.03-.25.22-.45.47-.6.72-.43 1.55-1.07 1.55-1.91 0-.56-.34-.91-.82-1.11 0 0-.28-.13-.41-.2-.41-.21-.82-.53-.86-1.06-.02-.31.17-.57.47-.66.24-.07.58-.16 1.05-.29.74-.2 1.82-.52 1.99-.57.16-.05.26-.2.26-.37-.008-.159-.018-.324-.03-.504l-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.653 1.069 11.01.793 12 .793h.206z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-dark/8 bg-cream-deep/50 py-6 sm:py-8">
        <Container>
          <Reveal>
            <h1 className="font-display text-3xl tracking-tight text-dark sm:text-4xl">
              Contact
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-muted">
              Order on WhatsApp, call us, or find delivery and payment details
              below.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-6 sm:py-8 lg:py-10">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <ContactCard
              icon={<WhatsAppIcon className="size-5" />}
              title="WhatsApp"
              body={businessConfig.phones.primaryDisplay}
              action={
                <LinkButton
                  href={whatsappOrderLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="sm"
                  className="mt-3"
                >
                  Chat to Order
                </LinkButton>
              }
            />
            <ContactCard
              icon={<Phone className="size-5" />}
              title="Call"
              body={businessConfig.phones.internationalDisplay}
              action={
                <LinkButton
                  href={telLink(businessConfig.phones.primary)}
                  variant="outline"
                  size="sm"
                  className="mt-3"
                >
                  Call Now
                </LinkButton>
              }
            />
            <ContactCard
              icon={<Truck className="size-5" />}
              title="Delivery"
              body={businessConfig.deliveryNote}
            />
            <ContactCard
              icon={<Wallet className="size-5" />}
              title="MoMo"
              body={businessConfig.phones.momoDisplay}
            />
            <ContactCard
              icon={<InstagramIcon className="size-5" />}
              title="Instagram"
              body={`@${businessConfig.social.instagram}`}
              action={
                <LinkButton
                  href={businessConfig.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  className="mt-3"
                >
                  Follow
                </LinkButton>
              }
            />
            <ContactCard
              icon={<SnapchatIcon className="size-5" />}
              title="Snapchat"
              body={`@${businessConfig.social.snapchat}`}
              action={
                <LinkButton
                  href={`https://www.snapchat.com/add/${encodeURIComponent(businessConfig.social.snapchat.replace(/\s+/g, ""))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  className="mt-3"
                >
                  Add on Snapchat
                </LinkButton>
              }
            />
          </div>

          <Reveal delay={40}>
            <div className="mt-6 overflow-hidden rounded-xl border border-dark/10 bg-white">
              <div className="flex items-center justify-between gap-3 border-b border-dark/8 px-4 py-3">
                <div>
                  <h2 className="text-sm font-semibold text-dark">Find us</h2>
                  <p className="text-xs text-muted">{businessConfig.location}</p>
                </div>
                <LinkButton
                  href={businessConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                >
                  Open Maps
                </LinkButton>
              </div>
              <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
                <iframe
                  title="Chili Haus location on Google Maps"
                  src={`https://maps.google.com/maps?q=${businessConfig.mapsEmbedQuery}&z=16&output=embed`}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  body,
  action,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  action?: ReactNode;
}) {
  return (
    <Reveal>
      <div className="h-full rounded-xl border border-dark/10 bg-white px-4 py-4">
        <div className="inline-flex size-9 items-center justify-center rounded-full bg-chili-red/10 text-chili-red">
          {icon}
        </div>
        <h2 className="mt-2.5 text-sm font-semibold text-dark">{title}</h2>
        <p className="mt-1 text-sm text-muted">{body}</p>
        {action}
      </div>
    </Reveal>
  );
}
