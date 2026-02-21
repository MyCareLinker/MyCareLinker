import Link from "next/link";
import Nav from "./components/Nav";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Nav />

      {/* Hero — developer-first, radiology-aware */}
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.22),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.2),transparent_55%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/40 px-3 py-1 text-xs font-medium text-emerald-100 mb-5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Phase 1 (POC): Radiology &amp; Cardiology
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold text-slate-50 leading-tight max-w-3xl">
            A simple API to send and receive patient records between healthcare organizations.
          </h1>
          <p className="mt-4 text-lg text-slate-200/80 max-w-2xl">
            Replace CDs, fax machines, and manual EPIC / Merge PACS workflows with a single, auditable API call.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#quickstart"
              className="inline-flex items-center gap-2 bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-lg font-semibold hover:bg-emerald-300 transition shadow-lg shadow-emerald-500/40"
            >
              Quickstart
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 border border-slate-600/60 text-slate-100 px-5 py-2.5 rounded-lg font-medium hover:bg-slate-900/60 transition"
            >
              API Reference
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 text-slate-200 hover:text-white font-medium transition"
            >
              See demo →
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-xs text-slate-200/80">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              Stop burning CDs for outside hospitals
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              No more copy-paste from MS Forms into EPIC
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
              Merge PACS exports with a single transaction_id
            </span>
          </div>
        </div>
      </header>

      {/* Code example — POST /v1/share-record */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
          Send a record
        </h2>
        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
          <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800">
            <span className="text-xs text-slate-500 font-mono">POST /v1/share-record</span>
            <span className="text-xs text-slate-500">Requires: x-api-key</span>
          </div>
          <pre className="p-4 sm:p-6 text-sm font-mono text-slate-300 overflow-x-auto">
            <code>{`curl -X POST https://api.mycarelinker.com/v1/share-record \\
  -H "x-api-key: sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "patientId": "MRN-12345",
    "destinationOrg": "org_central_hospital",
    "payload": { "resourceType": "Bundle", "type": "document", ... },
    "consentToken": "consent_abc..."
  }'`}</code>
          </pre>
          <div className="px-4 sm:px-6 py-3 border-t border-slate-800 bg-slate-800/50">
            <span className="text-xs text-slate-500">Response</span>
            <pre className="mt-1 text-sm font-mono text-emerald-400">
              {`{ "transaction_id": "tx_...", "delivery_status": "accepted", "audit_log": "https://..." }`}
            </pre>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-bold text-slate-50 mb-6">API routes</h2>
        <ul className="space-y-3 font-mono text-sm text-slate-100/90">
          <li className="flex items-center gap-3">
            <span className="text-emerald-600 font-semibold">POST</span>
            <span>/v1/share-record</span>
            <span className="text-slate-500">— Send record to destination org</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-blue-500 font-semibold">GET</span>
            <span>/v1/record/:id</span>
            <span className="text-slate-500">— Retrieve record by id</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-emerald-600 font-semibold">POST</span>
            <span>/v1/consent</span>
            <span className="text-slate-500">— Create or update consent</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-blue-500 font-semibold">GET</span>
            <span>/v1/audit/:transactionId</span>
            <span className="text-slate-500">— Audit log for a transaction</span>
          </li>
        </ul>
      </section>

      {/* Use cases */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/60">
        <h2 className="text-xl font-bold text-slate-50 mb-2">Use cases</h2>
        <p className="text-sm text-slate-300/80 mb-6">
          You keep your workflows in EPIC, Merge PACS, and your local tools. We handle the plumbing between organizations.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Referrals: send chart from PCP to specialist",
            "Telehealth: pull records into visit",
            "Imaging: share studies between radiology and clinic",
            "Discharge: push summary to follow-up care",
            "Patient access: fulfill record requests via API",
            "Health info exchange: one integration, many endpoints",
          ].map((useCase, i) => (
            <div key={i} className="p-4 rounded-lg bg-slate-900/70 border border-slate-700 text-slate-100 shadow-sm shadow-black/30">
              {useCase}
            </div>
          ))}
        </div>
      </section>

      {/* Product concept */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/60">
        <h2 className="text-xl font-bold text-slate-50 mb-2">How MyCareLinker works</h2>
        <p className="text-slate-300/80 mb-8">
          Public request form → automation when criteria match → tech dashboard for exceptions → IT controls access. When both clinics are customers, they talk faster.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Public request form", desc: "Other clinics request records via a secure page (no MS Forms). Org-registered, rate-limited, anti-spam." },
            { title: "Automation engine", desc: "If request matches criteria (consent, patient match, study type, date range), we process it automatically via EPIC + PACS API." },
            { title: "Tech dashboard", desc: "When automation fails or for on-demand sends, techs log in, see the queue, fix, and send. Full audit trail." },
            { title: "IT admin", desc: "Add techs, manage orgs, view failures and processing metrics. Control who can do what." },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900/70 border border-slate-700">
              <h3 className="font-semibold text-emerald-200 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-300/90">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-400/30">
          <h3 className="font-semibold text-emerald-200 mb-2">Network benefit</h3>
          <p className="text-sm text-slate-200/90">
            When both the requesting clinic and your hospital are MyCareLinker customers, requests can be fulfilled faster — direct API handoff, less manual work, lower cost.
          </p>
        </div>
      </section>

      {/* Radiology + cardiology import / export */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/60">
        <h2 className="text-xl font-bold text-slate-50 mb-4">Built for radiology import / export teams</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-rose-400/40 bg-rose-500/5 p-5">
            <h3 className="text-sm font-semibold text-rose-200 mb-2">Today</h3>
            <ul className="text-sm text-rose-100/90 space-y-2">
              <li>• Public MS Forms fill up with outside hospital requests</li>
              <li>• Techs copy name / DOB / study type into EPIC to validate</li>
              <li>• Manually open Merge PACS, find the right series, choose destination, click “send”</li>
              <li>• Jump back to EPIC to document what was shared for audit</li>
              <li>• Reverse all of this again for imports from CDs or secure emails</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/5 p-5">
            <h3 className="text-sm font-semibold text-emerald-200 mb-2">With MyCareLinker</h3>
            <ul className="text-sm text-emerald-100/90 space-y-2">
              <li>• A secure request form feeds straight into your API</li>
              <li>• You validate consent once and store a consent token</li>
              <li>• A single <code className="font-mono bg-emerald-900/40 px-1 rounded">transaction_id</code> represents the export</li>
              <li>• EPIC and Merge PACS stay your system of record; we handle cross-org delivery</li>
              <li>• Every step has an <code className="font-mono bg-emerald-900/40 px-1 rounded">audit_log</code> entry for compliance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/60">
        <h2 className="text-xl font-bold text-slate-50 mb-6">Built for healthcare IT</h2>
        <div className="flex flex-wrap gap-6 text-slate-200/90 text-sm">
          <span className="font-medium">HIPAA-aligned</span>
          <span className="font-medium">BAA available</span>
          <span className="font-medium">FHIR R4</span>
          <span className="font-medium">Cryptographic audit logs</span>
          <span className="font-medium">No lock-in</span>
        </div>
      </section>

      {/* Quickstart */}
      <section id="quickstart" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/60">
        <h2 className="text-xl font-bold text-slate-50 mb-4">Quickstart</h2>
        <ol className="list-decimal list-inside space-y-2 text-slate-200/90">
          <li>Create an account and get your API key from the dashboard.</li>
          <li>Call <code className="font-mono text-sm bg-slate-200 px-1 rounded">POST /v1/share-record</code> with patient id, destination org, payload, and consent token.</li>
          <li>Use the returned <code className="font-mono text-sm bg-slate-200 px-1 rounded">transaction_id</code> and <code className="font-mono text-sm bg-slate-200 px-1 rounded">audit_log</code> for tracking.</li>
        </ol>
        <div className="mt-6">
          <Link
            href="/demo"
            className="text-emerald-600 font-medium hover:underline"
          >
            See the concept in action on the Demo page →
          </Link>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/60">
        <h2 className="text-xl font-bold text-slate-50 mb-6">Pricing</h2>
        <p className="text-slate-300 mb-6">
          Pay-as-you-go only. No contracts. Admin portal included by default.
        </p>
        <div className="max-w-xl p-6 rounded-xl bg-slate-900/80 border border-slate-700">
          <h3 className="font-bold text-slate-50">Pay as you go</h3>
          <p className="mt-2 text-2xl font-bold text-slate-50">First 1,000 API calls free</p>
          <p className="mt-1 text-slate-300">Then $0.005 per call</p>
          <p className="mt-4 text-sm text-slate-400">
            Default access to admin portal: API keys, usage logs, transaction history, tech management. No separate team fee.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/95 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <span className="font-semibold text-slate-50">
              MyCare<span className="text-emerald-400">Linker</span>
            </span>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link href="/docs" className="hover:text-slate-100">Docs</Link>
              <Link href="/demo" className="hover:text-slate-100">Demo</Link>
              <a href="#" className="hover:text-slate-100">Status</a>
              <a href="#" className="hover:text-slate-100">Privacy</a>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            © {new Date().getFullYear()} MyCareLinker. Developer infrastructure for healthcare record exchange.
          </p>
        </div>
      </footer>
    </div>
  );
}
