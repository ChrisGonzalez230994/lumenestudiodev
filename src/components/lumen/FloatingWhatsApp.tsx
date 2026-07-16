import { useI18n } from "@/lib/i18n";

const WHATSAPP_URL =
  "https://wa.me/5492236195381?text=" +
  encodeURIComponent("¡Hola Lumen! Quiero más info sobre sus servicios.");

export function FloatingWhatsApp() {
  const { t } = useI18n();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("float.wa")}
      className="group fixed bottom-5 right-5 z-[70] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] ring-4 ring-[#25D366]/20 transition-all duration-300 hover:scale-110 hover:brightness-110 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 sm:h-8 sm:w-8"
        fill="currentColor"
      >
        <path d="M19.11 17.55c-.29-.14-1.71-.84-1.97-.94-.26-.1-.46-.14-.65.14-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.55-.01s-.51.07-.77.36c-.26.29-1.01.99-1.01 2.41 0 1.42 1.03 2.79 1.18 2.99.14.19 2.04 3.11 4.94 4.36.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34zM16.02 6.4c-5.31 0-9.62 4.31-9.62 9.62 0 1.7.45 3.36 1.29 4.82L6.4 25.6l4.94-1.28c1.4.76 2.98 1.16 4.59 1.16h.01c5.31 0 9.62-4.31 9.62-9.62 0-2.57-1-4.99-2.82-6.8-1.81-1.82-4.22-2.82-6.72-2.66z" />
      </svg>
    </a>
  );
}
