import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { businessConfig } from "@/lib/config";
import { telLink, whatsappOrderLink } from "@/lib/whatsapp";
import { MapPin, Phone, Truck, Wallet } from "lucide-react";
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
              icon={<MapPin className="size-5" />}
              title="Location"
              body={businessConfig.location}
              action={
                <LinkButton
                  href={businessConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  className="mt-3"
                >
                  Open in Google Maps
                </LinkButton>
              }
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

          <Reveal delay={60}>
            <p className="mt-6 text-center text-sm text-muted">
              Snapchat · @{businessConfig.social.snapchat}
            </p>
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
