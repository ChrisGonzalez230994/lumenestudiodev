import { useI18n, type Lang } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  const btn = (l: Lang, label: string) => (
    <button
      key={l}
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      className={`rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider transition-colors ${
        lang === l ? "bg-[#1A1A1A] text-white" : "text-gray-500 hover:text-black"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      className="inline-flex items-center gap-0.5 rounded-full border border-black/10 bg-white p-0.5"
      role="group"
      aria-label="Idioma / Language"
    >
      {btn("es", "ES")}
      {btn("en", "EN")}
    </div>
  );
}
