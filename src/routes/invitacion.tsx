import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Calendar,
  Gift,
  Heart,
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  ChevronDown,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { invitationConfig as cfg } from "@/lib/invitation-config";

export const Route = createFileRoute("/invitacion")({
  head: () => ({
    meta: [
      { title: cfg.meta.title },
      { name: "description", content: cfg.meta.description },
      { property: "og:title", content: cfg.meta.title },
      { property: "og:description", content: cfg.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/invitacion" },
      ...(cfg.meta.ogImage
        ? [
            { property: "og:image", content: cfg.meta.ogImage },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:image", content: cfg.meta.ogImage },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: "/invitacion" }],
  }),
  component: InvitationPage,
});

// ---- Countdown ----
function useCountdown(targetISO: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, new Date(targetISO).getTime() - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff / 3_600_000) % 24);
  const minutes = Math.floor((diff / 60_000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, ended: diff === 0 };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ---- Cover ----
function Cover({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      key="cover"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center text-center px-6"
      style={{
        background: `radial-gradient(circle at 50% 30%, var(--inv-cream) 0%, var(--inv-bg) 70%)`,
        backgroundImage:
          "radial-gradient(circle at 50% 30%, var(--inv-cream) 0%, var(--inv-bg) 70%), repeating-linear-gradient(45deg, rgba(224,184,77,0.04) 0 2px, transparent 2px 14px)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-xl"
      >
        <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: "var(--inv-accent)" }}>
          {cfg.tagline ?? "Te invitamos"}
        </div>
        <h1 className="text-5xl sm:text-7xl font-normal leading-tight" style={{ fontFamily: "var(--inv-serif)", color: "var(--inv-ink)" }}>
          {cfg.honorees}
        </h1>
        <div className="mt-6 mx-auto h-px w-20" style={{ background: "var(--inv-accent)" }} />
        <p className="mt-6 text-sm tracking-[0.3em] uppercase" style={{ color: "var(--inv-ink)" }}>
          {cfg.dateLabel}
        </p>

        <button
          onClick={onEnter}
          className="mt-12 inline-flex flex-col items-center gap-2 group"
          aria-label="Abrir invitación"
        >
          <span
            className="px-8 py-3 rounded-full text-sm font-medium tracking-wider uppercase shadow-md transition-transform group-hover:scale-105"
            style={{ background: "var(--inv-accent)", color: "var(--inv-ink)" }}
          >
            Abrir invitación
          </span>
          <ChevronDown className="h-5 w-5 animate-bounce" style={{ color: "var(--inv-accent)" }} />
        </button>
      </motion.div>
    </motion.div>
  );
}

// ---- Hero ----
function Hero() {
  const cd = useCountdown(cfg.dateISO);
  const units: [string, number][] = [
    ["Días", cd.days],
    ["Horas", cd.hours],
    ["Min", cd.minutes],
    ["Seg", cd.seconds],
  ];
  return (
    <section className="relative px-6 pt-24 pb-20 text-center">
      <Reveal>
        <p className="text-[10px] tracking-[0.4em] uppercase" style={{ color: "var(--inv-accent)" }}>
          {cfg.tagline ?? "Invitación"}
        </p>
        <h1
          className="mt-6 text-5xl sm:text-7xl lg:text-8xl leading-[1.05]"
          style={{ fontFamily: "var(--inv-serif)", color: "var(--inv-ink)" }}
        >
          {cfg.honorees}
        </h1>
        <div className="mt-8 mx-auto h-px w-16" style={{ background: "var(--inv-accent)" }} />
        <p className="mt-6 inline-flex items-center gap-2 text-sm tracking-[0.3em] uppercase" style={{ color: "var(--inv-ink)" }}>
          <Calendar className="h-4 w-4" /> {cfg.dateLabel}
        </p>
      </Reveal>

      {cfg.coverPhotoUrl && (
        <Reveal delay={0.15}>
          <div className="mt-12 mx-auto max-w-md aspect-[3/4] rounded-[40%/30%] overflow-hidden shadow-xl">
            <img src={cfg.coverPhotoUrl} alt={cfg.honorees} className="w-full h-full object-cover" />
          </div>
        </Reveal>
      )}

      <Reveal delay={0.2}>
        <div className="mt-14 grid grid-cols-4 gap-2 max-w-md mx-auto">
          {units.map(([label, n]) => (
            <div
              key={label}
              className="rounded-2xl py-4 px-2"
              style={{ background: "var(--inv-cream)" }}
            >
              <div
                className="text-3xl sm:text-4xl tabular-nums"
                style={{ fontFamily: "var(--inv-serif)", color: "var(--inv-ink)" }}
              >
                {String(n).padStart(2, "0")}
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase mt-1" style={{ color: "var(--inv-accent)" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

// ---- Event card ----
function EventCard({ data }: { data: NonNullable<typeof cfg.ceremony> }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.mapsQuery)}`;
  return (
    <Reveal>
      <div
        className="rounded-3xl p-8 shadow-sm text-center"
        style={{ background: "var(--inv-cream)" }}
      >
        <h3 className="text-3xl mb-4" style={{ fontFamily: "var(--inv-serif)", color: "var(--inv-ink)" }}>
          {data.title}
        </h3>
        <div className="space-y-2 text-sm" style={{ color: "var(--inv-ink)" }}>
          <p className="inline-flex items-center gap-2 justify-center"><Clock className="h-4 w-4" />{data.time}</p>
          <p className="font-medium">{data.venue}</p>
          <p className="opacity-75">{data.address}</p>
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-transform hover:scale-105"
          style={{ background: "var(--inv-accent)", color: "var(--inv-ink)" }}
        >
          <MapPin className="h-4 w-4" /> Cómo llegar
        </a>
      </div>
    </Reveal>
  );
}

function EventDetails() {
  if (!cfg.ceremony && !cfg.reception) return null;
  return (
    <section className="px-6 py-20">
      <Reveal>
        <h2
          className="text-center text-4xl sm:text-5xl mb-12"
          style={{ fontFamily: "var(--inv-serif)", color: "var(--inv-ink)" }}
        >
          El día
        </h2>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
        {cfg.ceremony && <EventCard data={cfg.ceremony} />}
        {cfg.reception && <EventCard data={cfg.reception} />}
      </div>
      {cfg.dressCode && (
        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm tracking-[0.25em] uppercase" style={{ color: "var(--inv-accent)" }}>
            Dress code · <span style={{ color: "var(--inv-ink)" }}>{cfg.dressCode}</span>
          </p>
        </Reveal>
      )}
    </section>
  );
}

// ---- Story + gallery ----
function StorySection() {
  const story = cfg.story;
  const [lightbox, setLightbox] = useState<number | null>(null);
  if (!story) return null;

  const photos = story.photos.length > 0
    ? story.photos
    : Array.from({ length: 6 }, (_, i) => `placeholder-${i}`);
  const heights = ["h-48", "h-64", "h-56", "h-72", "h-52", "h-60"];

  return (
    <section className="px-6 py-20" style={{ background: "var(--inv-cream)" }}>
      <Reveal>
        <h2
          className="text-center text-4xl sm:text-5xl"
          style={{ fontFamily: "var(--inv-serif)", color: "var(--inv-ink)" }}
        >
          {story.title}
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-center leading-relaxed" style={{ color: "var(--inv-ink)" }}>
          {story.text}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 columns-2 md:columns-3 gap-4 max-w-3xl mx-auto">
          {photos.map((src, i) => (
            <button
              key={i}
              onClick={() => story.photos.length > 0 && setLightbox(i)}
              className={`mb-4 w-full ${heights[i % heights.length]} rounded-2xl overflow-hidden block break-inside-avoid shadow-sm hover:shadow-md transition-shadow`}
              style={{
                background: story.photos.length === 0
                  ? `linear-gradient(${135 + i * 30}deg, var(--inv-primary), var(--inv-accent))`
                  : undefined,
              }}
              aria-label={`Foto ${i + 1}`}
            >
              {story.photos.length > 0 && (
                <img src={src} alt={`Recuerdo ${i + 1}`} className="w-full h-full object-cover" />
              )}
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setLightbox(null)}
              aria-label="Cerrar"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={photos[lightbox]}
              alt=""
              className="max-h-[85vh] max-w-full rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ---- RSVP ----
function Rsvp() {
  const [form, setForm] = useState({
    guest_name: "",
    party_size: 1,
    attending: "yes" as "yes" | "no",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const name = form.guest_name.trim();
    if (!name || name.length > 120) {
      setStatus("error");
      setError("Nombre inválido");
      return;
    }
    const { error: sbError } = await supabase.from("rsvp_responses" as never).insert({
      guest_name: name,
      party_size: Math.min(20, Math.max(1, Number(form.party_size) || 1)),
      attending: form.attending === "yes",
      notes: form.notes.trim().slice(0, 500) || null,
      event_slug: cfg.eventSlug,
    } as never);
    if (sbError) {
      setStatus("error");
      setError(sbError.message);
      return;
    }
    setStatus("ok");
  }

  return (
    <section className="px-6 py-20">
      <Reveal>
        <h2
          className="text-center text-4xl sm:text-5xl"
          style={{ fontFamily: "var(--inv-serif)", color: "var(--inv-ink)" }}
        >
          Confirmá tu asistencia
        </h2>
        <p className="mt-3 text-center text-sm" style={{ color: "var(--inv-ink)", opacity: 0.7 }}>
          Tu confirmación nos ayuda a organizar mejor el día.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 max-w-md mx-auto">
          {status === "ok" ? (
            <div
              className="rounded-3xl p-10 text-center shadow-sm"
              style={{ background: "var(--inv-cream)" }}
            >
              <Heart className="h-8 w-8 mx-auto mb-4" style={{ color: "var(--inv-accent)" }} />
              <h3 className="text-2xl" style={{ fontFamily: "var(--inv-serif)", color: "var(--inv-ink)" }}>
                ¡Gracias por confirmar!
              </h3>
              <p className="mt-2 text-sm" style={{ color: "var(--inv-ink)", opacity: 0.75 }}>
                Nos vemos pronto.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-3xl p-8 shadow-sm space-y-5"
              style={{ background: "var(--inv-cream)" }}
            >
              <Field label="Nombre y apellido">
                <input
                  required
                  maxLength={120}
                  value={form.guest_name}
                  onChange={(e) => setForm((f) => ({ ...f, guest_name: e.target.value }))}
                  className="inv-input"
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Acompañantes (total)">
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={form.party_size}
                    onChange={(e) => setForm((f) => ({ ...f, party_size: Number(e.target.value) }))}
                    className="inv-input"
                  />
                </Field>
                <Field label="¿Asistís?">
                  <div className="flex gap-2 mt-1">
                    {(["yes", "no"] as const).map((v) => (
                      <button
                        type="button"
                        key={v}
                        onClick={() => setForm((f) => ({ ...f, attending: v }))}
                        className="flex-1 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition"
                        style={{
                          background: form.attending === v ? "var(--inv-accent)" : "transparent",
                          color: "var(--inv-ink)",
                          border: "1px solid var(--inv-accent)",
                        }}
                      >
                        {v === "yes" ? "Sí" : "No"}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>

              <Field label="Restricciones o canción que pedís (opcional)">
                <textarea
                  rows={3}
                  maxLength={500}
                  value={form.notes}
                  onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                  className="inv-input resize-none"
                />
              </Field>

              {error && <p className="text-xs text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider shadow-md transition-transform hover:scale-[1.02] disabled:opacity-60"
                style={{ background: "var(--inv-accent)", color: "var(--inv-ink)" }}
              >
                {status === "submitting" ? "Enviando..." : "Confirmar"}
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--inv-accent)" }}>
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

// ---- Gifts ----
function Gifts() {
  if (!cfg.gifts) return null;
  return (
    <section className="px-6 py-20" style={{ background: "var(--inv-cream)" }}>
      <Reveal>
        <div className="max-w-lg mx-auto text-center">
          <Gift className="h-7 w-7 mx-auto mb-4" style={{ color: "var(--inv-accent)" }} />
          <h2
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: "var(--inv-serif)", color: "var(--inv-ink)" }}
          >
            {cfg.gifts.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--inv-ink)" }}>
            {cfg.gifts.note}
          </p>
          <div className="mt-8 space-y-3">
            {cfg.gifts.items.map((it) => (
              <div
                key={it.label}
                className="rounded-2xl px-5 py-4 flex items-center justify-between bg-white/60"
              >
                <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--inv-accent)" }}>
                  {it.label}
                </span>
                {it.href ? (
                  <a href={it.href} target="_blank" rel="noopener noreferrer" className="font-medium" style={{ color: "var(--inv-ink)" }}>
                    {it.value}
                  </a>
                ) : (
                  <span className="font-medium" style={{ color: "var(--inv-ink)" }}>{it.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

// ---- Music ----
function MusicPlayer({ enabled }: { enabled: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!enabled || !cfg.music) return;
    const a = audioRef.current;
    if (!a) return;
    a.muted = true;
    a.volume = 0.5;
    void a.play().then(() => setPlaying(true)).catch(() => {});
  }, [enabled]);

  if (!cfg.music) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex gap-2">
      <audio ref={audioRef} src={cfg.music.src} loop preload="auto" />
      <button
        onClick={() => {
          const a = audioRef.current;
          if (!a) return;
          if (a.paused) { void a.play(); setPlaying(true); } else { a.pause(); setPlaying(false); }
        }}
        className="h-11 w-11 rounded-full shadow-lg grid place-items-center backdrop-blur"
        style={{ background: "var(--inv-accent)", color: "var(--inv-ink)" }}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>
      <button
        onClick={() => {
          const a = audioRef.current;
          if (!a) return;
          a.muted = !a.muted;
          setMuted(a.muted);
        }}
        className="h-11 w-11 rounded-full shadow-lg grid place-items-center bg-white/90"
        style={{ color: "var(--inv-ink)" }}
        aria-label={muted ? "Activar sonido" : "Silenciar"}
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </div>
  );
}

// ---- Page ----
function InvitationPage() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!entered) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [entered]);

  const themeVars = useMemo(
    () =>
      ({
        "--inv-primary": cfg.theme.primary,
        "--inv-accent": cfg.theme.accent,
        "--inv-cream": cfg.theme.cream,
        "--inv-bg": cfg.theme.bg,
        "--inv-ink": cfg.theme.ink,
        "--inv-serif": cfg.theme.serif,
        "--inv-sans": cfg.theme.sans,
      }) as React.CSSProperties,
    [],
  );

  return (
    <main
      style={{ ...themeVars, background: "var(--inv-bg)", color: "var(--inv-ink)", fontFamily: "var(--inv-sans)" }}
      className="min-h-screen"
    >
      <style>{`
        .inv-input {
          width: 100%;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(224,184,77,0.35);
          border-radius: 0.75rem;
          padding: 0.65rem 0.9rem;
          font-size: 0.9rem;
          color: var(--inv-ink);
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .inv-input:focus { border-color: var(--inv-accent); box-shadow: 0 0 0 3px rgba(224,184,77,0.2); }
      `}</style>

      <AnimatePresence>{!entered && <Cover onEnter={() => setEntered(true)} />}</AnimatePresence>

      <Hero />
      <EventDetails />
      <StorySection />
      <Rsvp />
      <Gifts />

      <footer className="px-6 py-12 text-center text-xs tracking-[0.3em] uppercase" style={{ color: "var(--inv-accent)" }}>
        Con amor · {cfg.honorees}
      </footer>

      <MusicPlayer enabled={entered} />
    </main>
  );
}
