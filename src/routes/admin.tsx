import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { getRsvpResponses } from "@/lib/admin.functions";
import { invitationConfig as cfg } from "@/lib/invitation-config";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin · RSVP" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

type Row = {
  id: string;
  guest_name: string;
  party_size: number;
  attending: boolean;
  notes: string | null;
  event_slug: string;
  submitted_at: string;
};

function AdminPage() {
  const fetchResponses = useServerFn(getRsvpResponses);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rows, setRows] = useState<Row[] | null>(null);
  const [confirmed, setConfirmed] = useState(0);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetchResponses({ data: { password, eventSlug: cfg.eventSlug } });
      if (!res.ok) {
        setError(res.error);
        setRows(null);
      } else {
        setRows(res.rows as Row[]);
        setConfirmed(res.confirmedGuests);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  if (!rows) {
    return (
      <main className="min-h-screen grid place-items-center bg-neutral-50 px-6">
        <form onSubmit={onSubmit} className="w-full max-w-sm bg-white rounded-2xl p-8 shadow-sm space-y-4">
          <h1 className="text-2xl font-semibold text-neutral-900">Admin · RSVP</h1>
          <p className="text-sm text-neutral-500">Ingresá la contraseña para ver las confirmaciones.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:border-neutral-900"
            required
          />
          {error && <p className="text-xs text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
          >
            {loading ? "Verificando..." : "Entrar"}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-neutral-900">RSVP · {cfg.honorees}</h1>
            <p className="text-sm text-neutral-500 mt-1">Evento: {cfg.eventSlug}</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-semibold text-neutral-900">{confirmed}</div>
            <div className="text-xs uppercase tracking-wider text-neutral-500">Invitados confirmados</div>
          </div>
        </header>

        <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-neutral-500 border-b border-neutral-100">
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Asiste</th>
                <th className="px-4 py-3">Personas</th>
                <th className="px-4 py-3">Notas</th>
                <th className="px-4 py-3">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr><td colSpan={5} className="px-4 py-8 text-center text-neutral-500">Aún no hay confirmaciones.</td></tr>
              ) : rows.map((r) => (
                <tr key={r.id} className="border-b border-neutral-50">
                  <td className="px-4 py-3 font-medium text-neutral-900">{r.guest_name}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${r.attending ? "bg-green-100 text-green-700" : "bg-neutral-100 text-neutral-500"}`}>
                      {r.attending ? "Sí" : "No"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-neutral-700">{r.party_size}</td>
                  <td className="px-4 py-3 text-neutral-600 max-w-xs truncate">{r.notes || "—"}</td>
                  <td className="px-4 py-3 text-neutral-500 text-xs">
                    {new Date(r.submitted_at).toLocaleString("es-AR")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
