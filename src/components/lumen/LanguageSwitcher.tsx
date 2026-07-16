import { useI18n, type Lang } from "@/lib/i18n";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();

  const btn = (l: Lang, label: string) => (
    <button
      key={l}
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider transition-colors ${
        lang === l
          ? "bg-gradient-cta text-white"
          : "text-white/70 hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-0.5 backdrop-blur ${
        compact ? "" : ""
      }`}
      role="group"
      aria-label="Language"
    >
      {btn("es", "ES")}
      {btn("en", "EN")}
    </div>
  );
}
