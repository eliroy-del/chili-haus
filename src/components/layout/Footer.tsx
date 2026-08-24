import { businessConfig } from "@/lib/config";
import { telLink, whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";
import Link from "next/link";

const explore = [
  { href: "/", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#meal-packages", label: "Meal Packages" },
  { href: "#freezer", label: "Freezer Friendly" },
  { href: "#frozen", label: "Frozen Foods" },
  { href: "#sauces", label: "Sauces & Shito" },
  { href: "#bulk", label: "Bulk Orders" },
];

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
                <a href="#delivery" className="hover:text-white">
                  Delivery · Accra (fee applies)
                </a>
              </li>
              <li>MoMo · {businessConfig.phones.momoDisplay}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-chili-gold">
              Connect
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              <li>
                <a
                  href={businessConfig.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Instagram · @{businessConfig.social.instagram}
                </a>
              </li>
              <li>Snapchat · @{businessConfig.social.snapchat}</li>
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
