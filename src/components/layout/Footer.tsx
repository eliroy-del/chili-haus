import { businessConfig } from "@/lib/config";
import { telLink, whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

const explore = [
  { href: "/", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#meal-packages", label: "Meal Packages" },
  { href: "#freezer", label: "Freezer Friendly" },
  { href: "#frozen", label: "Frozen Foods" },
  { href: "#sauces", label: "Sauces & Shito" },
  { href: "#bulk", label: "Bulk Orders" },
];

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

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-28 bg-dark text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-16">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="relative size-12 overflow-hidden rounded-full bg-dark-soft">
              <Image
                src="/images/logo/chili-haus-logo.jpg"
                alt=""
                fill
                sizes="48px"
                className="object-cover scale-110"
              />
            </span>
            <div>
              <p className="font-script text-3xl text-chili-red">Chili Haus</p>
              <p className="text-xs text-cream/60">{businessConfig.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            Local and continental meals, freezer-friendly foods, baked treats,
            sauces and bulk packages — prepared for Accra cravings of every
            size.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-chili-gold">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-chili-gold">
              Order
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              <li>
                <a
                  href={whatsappOrderLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp · {businessConfig.phones.primaryDisplay}
                </a>
              </li>
              <li>
                <a
                  href={telLink(businessConfig.phones.primary)}
                  className="hover:text-white"
                >
                  Call · {businessConfig.phones.primaryDisplay}
                </a>
              </li>
              <li>
                <span>Delivery · Accra (fee applies)</span>
              </li>
              <li>MoMo · {businessConfig.phones.momoDisplay}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-chili-gold">
              Connect
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/75">
              <li>
                <a
                  href={businessConfig.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-white"
                  aria-label={`Instagram @${businessConfig.social.instagram}`}
                >
                  <InstagramIcon className="size-4 shrink-0" />
                  <span>@{businessConfig.social.instagram}</span>
                </a>
              </li>
              <li>
                <span
                  className="inline-flex items-center gap-2.5"
                  aria-label={`Snapchat @${businessConfig.social.snapchat}`}
                >
                  <SnapchatIcon className="size-4 shrink-0" />
                  <span>@{businessConfig.social.snapchat}</span>
                </span>
              </li>
              <li className="pt-2 text-cream/60">
                Service area · {businessConfig.location}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Chili Haus. All rights reserved.</p>
          <p>Your next meal is only a WhatsApp message away.</p>
        </div>
      </div>
    </footer>
  );
}
