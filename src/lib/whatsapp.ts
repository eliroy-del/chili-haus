import { businessConfig } from "@/lib/config";

export function createWhatsAppLink(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(productName: string) {
  return `Hello Chili Haus 👋
I would like to order:
Product: ${productName}
Quantity:
Delivery/Pickup:
Preferred time:

Please confirm availability and total price.`;
}

export function generalOrderMessage() {
  return "Hello Chili Haus, I would like to place an order.";
}

export function bulkOrderMessage(people?: number) {
  if (people) {
    return `Hello Chili Haus, I would like to enquire about a bulk order for ${people} people.`;
  }
  return "Hello Chili Haus, I would like to enquire about a bulk / catering order.";
}

export function whatsappOrderLink(productName?: string) {
  const message = productName
    ? orderMessage(productName)
    : generalOrderMessage();
  return createWhatsAppLink(businessConfig.whatsapp, message);
}

export function whatsappBulkLink(people?: number) {
  return createWhatsAppLink(
    businessConfig.whatsapp,
    bulkOrderMessage(people),
  );
}

export function telLink(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}
