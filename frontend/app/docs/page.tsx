import Link from "next/link";
import Nav from "../components/Nav";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Nav />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">API Reference</h1>
        <p className="text-slate-600 mb-8">
          High-level routes. All requests require <code className="font-mono text-sm bg-slate-200 px-1 rounded">x-api-key</code> in the header.
        </p>

        {/* POST /v1/share-record */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sm font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">POST</span>
            <span className="font-mono text-lg">/v1/share-record</span>
          </div>
          <p className="text-slate-600 mb-4">Send a patient record to a destination organization. Think of it like “send SMS” in Twilio.</p>
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-2">Request body</h3>
          <pre className="p-4 bg-slate-900 text-slate-300 rounded-lg text-sm font-mono overflow-x-auto mb-4">
{`{
  "patientId": "string",       // Patient identifier (e.g. MRN)
  "destinationOrg": "string",  // Target org id
  "payload": {},               // FHIR Bundle, CCD, or PDF reference
  "consentToken": "string"     // Consent token for this share
}`}
          </pre>
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-2">Response</h3>
          <pre className="p-4 bg-slate-900 text-slate-300 rounded-lg text-sm font-mono overflow-x-auto">
{`{
  "transaction_id": "string",
  "delivery_status": "accepted | pending | failed",
  "audit_log": "https://..."
}`}
          </pre>
        </section>

        {/* GET /v1/record/:id */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sm font-semibold text-blue-500 bg-blue-50 px-2 py-0.5 rounded">GET</span>
            <span className="font-mono text-lg">/v1/record/:id</span>
          </div>
          <p className="text-slate-600 mb-4">Retrieve a record by id (e.g. transaction or record id).</p>
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-2">Response</h3>
          <pre className="p-4 bg-slate-900 text-slate-300 rounded-lg text-sm font-mono overflow-x-auto">
{`{
  "id": "string",
  "resource": { ... },  // FHIR resource or document reference
  "status": "string"
}`}
          </pre>
        </section>

        {/* POST /v1/consent */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sm font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">POST</span>
            <span className="font-mono text-lg">/v1/consent</span>
          </div>
          <p className="text-slate-600 mb-4">Create or update a consent token for sharing. Required before calling share-record.</p>
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-2">Request body</h3>
          <pre className="p-4 bg-slate-900 text-slate-300 rounded-lg text-sm font-mono overflow-x-auto">
{`{
  "patientId": "string",
  "scope": "string",    // e.g. "share-to-org:org_123"
  "expiresAt": "string" // ISO 8601
}`}
          </pre>
        </section>

        {/* GET /v1/audit/:transactionId */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sm font-semibold text-blue-500 bg-blue-50 px-2 py-0.5 rounded">GET</span>
            <span className="font-mono text-lg">/v1/audit/:transactionId</span>
          </div>
          <p className="text-slate-600 mb-4">Fetch the audit log for a given transaction. Use the link returned from share-record.</p>
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-2">Response</h3>
          <pre className="p-4 bg-slate-900 text-slate-300 rounded-lg text-sm font-mono overflow-x-auto">
{`{
  "transactionId": "string",
  "events": [ { "timestamp": "...", "action": "...", "actor": "..." } ]
}`}
          </pre>
        </section>

        <section className="pt-8 border-t border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Errors</h2>
          <p className="text-slate-600 mb-2">Standard HTTP status codes. Body shape:</p>
          <pre className="p-4 bg-slate-900 text-slate-300 rounded-lg text-sm font-mono overflow-x-auto">
{`{ "error": "string", "code": "string" }`}
          </pre>
          <p className="text-slate-600 mt-4">Rate limits and best practices will be documented as the API stabilizes.</p>
        </section>

        <div className="mt-12">
          <Link href="/demo" className="text-emerald-600 font-medium hover:underline">
            See the demo →
          </Link>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-slate-500">
          <Link href="/" className="text-emerald-600 hover:underline">← Home</Link>
        </div>
      </footer>
    </div>
  );
}
