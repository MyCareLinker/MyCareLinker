"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Nav from "../components/Nav";

const STUDY_TYPES = [
  { value: "xray", label: "X-ray" },
  { value: "ct", label: "CT" },
  { value: "mri", label: "MRI" },
  { value: "echo", label: "Echo (Cardiology)" },
  { value: "mammo", label: "Mammography" },
  { value: "us", label: "Ultrasound" },
];

const DATE_RANGES = [
  { value: "30d", label: "Last 30 days" },
  { value: "90d", label: "Last 90 days" },
  { value: "1y", label: "Last year" },
];

export default function DemoPage() {
  const [patients, setPatients] = useState<Array<{ resource: { id?: string; name?: { given?: string[]; family?: string }[]; birthDate?: string } }>>([]);
  const [loading, setLoading] = useState(true);
  const [shareResult, setShareResult] = useState<{ transactionId?: string; status?: string; auditLink?: string } | null>(null);
  const [criteria, setCriteria] = useState<Record<string, { studyType: string; dateRange: string }>>({});

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      setLoading(false);
      return;
    }
    axios
      .get(`${apiUrl}/patients`, { headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "demo" } })
      .then((res) => setPatients(res.data?.entry || []))
      .catch(() => setPatients([]))
      .finally(() => setLoading(false));
  }, []);

  const handleShareRecord = (patientId: string, studyType: string, dateRange: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      setShareResult({ status: "error", transactionId: undefined, auditLink: undefined });
      return;
    }
    setShareResult(null);
    axios
      .post(
        `${apiUrl}/v1/share-record`,
        {
          patientId,
          destinationOrg: "demo_central_hospital",
          documents: [{ type: "FHIR", content: {} }],
          consentToken: "demo_consent_token",
          studyType,
          dateRange,
        },
        { headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "demo", "Content-Type": "application/json" } }
      )
      .then((res) =>
        setShareResult({
          transactionId: res.data?.transactionId,
          status: res.data?.status,
          auditLink: res.data?.auditLink,
        })
      )
      .catch(() => setShareResult({ status: "error", transactionId: undefined, auditLink: undefined }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Nav />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Concept headline */}
        <header className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            The problem we solve
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Healthcare organizations still move records the hard way: CDs, faxes, secure email, portal downloads. 
            MyCareLinker is a single API so you can send and receive patient records between any org — with consent and a full audit trail.
          </p>
        </header>

        {/* Storytelling: why it hurts */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Where it hurts</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            IT teams spend hours on manual record transfer. Every EHR speaks a different dialect; every handoff is a one-off. 
            Referrals, telehealth, imaging follow-up, discharge summaries — each flow is custom-built or handled by hand.
          </p>
          <p className="text-slate-700 leading-relaxed">
            We give you one stable API. You send a patient identifier, a destination org, a payload (FHIR Bundle, CCD, or PDF), and a consent token. 
            You get back a transaction id, delivery status, and an audit log link. Same flow whether the other side is Epic, Cerner, or a small clinic.
          </p>
        </section>

        {/* Product concept */}
        <section className="mb-16 p-5 rounded-xl bg-slate-100 border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-4">How MyCareLinker works</h2>
          <p className="text-slate-700 mb-4">
            Public request form → automation when criteria match → tech dashboard for exceptions → IT controls access. When both clinics are customers, they talk faster.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="flex gap-2">
              <span className="text-emerald-600 font-medium">Request form</span>
              <span className="text-slate-600">— Other clinics request via a secure page (no MS Forms)</span>
            </div>
            <div className="flex gap-2">
              <span className="text-emerald-600 font-medium">Automation</span>
              <span className="text-slate-600">— If criteria match (consent, patient, study type, date range), we process automatically</span>
            </div>
            <div className="flex gap-2">
              <span className="text-emerald-600 font-medium">Tech dashboard</span>
              <span className="text-slate-600">— For failures or on-demand sends, techs log in and handle the queue</span>
            </div>
            <div className="flex gap-2">
              <span className="text-emerald-600 font-medium">IT admin</span>
              <span className="text-slate-600">— Add techs, view failures, manage orgs</span>
            </div>
          </div>
        </section>

        {/* Flow: Clinic A → MyCareLinker → Clinic B */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-8">How it works</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="flex flex-col items-center p-6 rounded-xl bg-white border border-slate-200 shadow-sm min-w-[160px]">
              <span className="font-bold text-slate-900">Clinic A</span>
              <span className="text-sm text-slate-500 mt-1 text-center">Patient data originates here</span>
            </div>
            <span className="text-2xl text-slate-400 font-bold">→</span>
            <div className="flex flex-col items-center p-6 rounded-xl bg-emerald-50 border border-emerald-200 shadow-sm min-w-[160px]">
              <span className="font-bold text-emerald-800">MyCareLinker</span>
              <span className="text-sm text-emerald-700 mt-1 text-center">Normalizes, secures, applies consent</span>
            </div>
            <span className="text-2xl text-slate-400 font-bold">→</span>
            <div className="flex flex-col items-center p-6 rounded-xl bg-white border border-slate-200 shadow-sm min-w-[160px]">
              <span className="font-bold text-slate-900">Clinic B</span>
              <span className="text-sm text-slate-500 mt-1 text-center">Receives record, full audit</span>
            </div>
          </div>
          <p className="text-center text-slate-600 mt-6 max-w-xl mx-auto">
            One provider initiates a share, patient consent is enforced, and the recipient gets the data — encrypted, auditable, and FHIR-compliant. All via a single API call.
          </p>
        </section>

        {/* Live demo: patient list + share with criteria */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Try it</h2>
          <p className="text-slate-600 mb-6">
            Simulate sharing imaging (X-rays, CT, MRI, Echo, etc.) by patient, study type, and date range. Select criteria, then click “Share imaging” to call <code className="font-mono text-sm bg-slate-200 px-1 rounded">POST /v1/share-record</code>.
          </p>

          {loading ? (
            <p className="text-slate-500">Loading patients…</p>
          ) : patients.length === 0 ? (
            <div className="p-6 rounded-xl bg-slate-100 border border-slate-200 text-slate-600">
              No sandbox data. Run the backend with mock patients, or read the API docs to try the endpoint with curl.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {patients.map((p, i) => {
                const nameObj = Array.isArray(p.resource.name) ? p.resource.name[0] : p.resource.name;
                const first = nameObj?.given?.[0] ?? "Unnamed";
                const last = nameObj?.family ?? "Patient";
                const id = p.resource.id ?? `patient-${i}`;
                const c = criteria[id] ?? { studyType: "xray", dateRange: "30d" };
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col"
                  >
                    <h3 className="font-semibold text-slate-900">{first} {last}</h3>
                    <p className="text-sm text-slate-500 mt-1">DOB: {p.resource.birthDate ?? "—"}</p>
                    <p className="text-sm text-slate-500 font-mono">ID: {id}</p>
                    <div className="mt-3 space-y-2">
                      <label className="block text-xs font-medium text-slate-600">Study type</label>
                      <select
                        value={c.studyType}
                        onChange={(e) => setCriteria((prev) => ({ ...prev, [id]: { ...(prev[id] ?? { studyType: "xray", dateRange: "30d" }), studyType: e.target.value } }))}
                        className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 bg-white"
                      >
                        {STUDY_TYPES.map((s) => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                      <label className="block text-xs font-medium text-slate-600">Date range</label>
                      <select
                        value={c.dateRange}
                        onChange={(e) => setCriteria((prev) => ({ ...prev, [id]: { ...(prev[id] ?? { studyType: "xray", dateRange: "30d" }), dateRange: e.target.value } }))}
                        className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 bg-white"
                      >
                        {DATE_RANGES.map((d) => (
                          <option key={d.value} value={d.value}>{d.label}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      onClick={() => handleShareRecord(id, c.studyType, c.dateRange)}
                      className="mt-3 w-full py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
                    >
                      Share imaging
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {shareResult && (
            <div className={`mt-6 p-4 rounded-xl border ${shareResult.status === "error" ? "bg-red-50 border-red-200" : "bg-emerald-50 border-emerald-200"}`}>
              {shareResult.status === "error" ? (
                <p className="text-red-800 text-sm">Request failed. Is the backend running with a valid API key?</p>
              ) : (
                <div className="text-sm text-emerald-800 font-mono space-y-1">
                  <p>transaction_id: {shareResult.transactionId}</p>
                  <p>status: {shareResult.status}</p>
                  {shareResult.auditLink && <p>audit: {shareResult.auditLink}</p>}
                </div>
              )}
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Ready to integrate?</h2>
          <p className="text-slate-600 mb-6">Start with 1,000 free API calls. No credit card required.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#quickstart"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
            >
              Get API Key
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition"
            >
              API Docs
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-slate-500">
          <Link href="/" className="text-emerald-600 hover:underline">← Home</Link>
          <span className="mx-2">·</span>
          © {new Date().getFullYear()} MyCareLinker
        </div>
      </footer>
    </div>
  );
}
