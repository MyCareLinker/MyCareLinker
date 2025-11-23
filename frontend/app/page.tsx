"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Healthcare Record Exchange
            <br />
            <span className="text-blue-600">Built for Developers</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
            A simple API to send and receive patient records between healthcare organizations.
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            Secure, FHIR-compatible, usage-based pricing. No enterprise sales. Just code.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#quickstart"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition font-semibold text-lg"
            >
              Get Started
            </a>
            <a
              href="/docs"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition font-semibold text-lg"
            >
              View API Docs
            </a>
            <a
              href="/demo"
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-200 transition font-semibold text-lg"
            >
              See Demo
            </a>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            One API Call. That's It.
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Send patient records between organizations with a single POST request. 
            We handle FHIR normalization, consent management, and audit logging.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm text-gray-100 font-mono">
                <code>{`POST /v1/share-record
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "patient_identifier": "patient-123",
  "destination_org": "clinic-b-org-id",
  "payload": {
    "resourceType": "Bundle",
    "type": "document",
    "entry": [...]
  },
  "consent_token": "consent-abc-xyz"
}

// Response
{
  "transaction_id": "txn_abc123",
  "delivery_status": "pending",
  "audit_log_url": "https://api.mycarelinker.com/v1/audit/txn_abc123"
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Built for IT Teams
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-3xl mb-4">🔐</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              HIPAA-Compliant
            </h3>
            <p className="text-gray-600">
              End-to-end encryption, audit logs, and consent management built in. 
              No compliance headaches.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              FHIR-Compatible
            </h3>
            <p className="text-gray-600">
              Accepts FHIR Bundles, CCDs, PDFs. We normalize and route to any destination format.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Developer Dashboard
            </h3>
            <p className="text-gray-600">
              API keys, usage logs, transaction history, and a sandbox playground. 
              Full control, zero friction.
            </p>
          </div>
        </div>
      </section>

      {/* API Endpoints Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Core API Endpoints
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Start with one endpoint. Expand as you need.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-semibold">
                  POST
                </span>
                <code className="text-gray-900 font-mono">/v1/share-record</code>
              </div>
              <p className="text-gray-600 text-sm">
                Send a patient record to another organization. Returns transaction ID and status.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-semibold">
                  GET
                </span>
                <code className="text-gray-900 font-mono">/v1/record/:id</code>
              </div>
              <p className="text-gray-600 text-sm">
                Retrieve a shared record by transaction ID. Includes full audit trail.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-semibold">
                  POST
                </span>
                <code className="text-gray-900 font-mono">/v1/consent</code>
              </div>
              <p className="text-gray-600 text-sm">
                Create and manage patient consent tokens for record sharing.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-semibold">
                  GET
                </span>
                <code className="text-gray-900 font-mono">/v1/audit/:transactionId</code>
              </div>
              <p className="text-gray-600 text-sm">
                Get complete audit log for any transaction. HIPAA-compliant logging.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a
              href="/docs"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              View Full API Documentation →
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Use Cases
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Telehealth Services
            </h3>
            <p className="text-gray-600">
              Automate record requests from primary care providers. 
              Receive structured FHIR data instead of faxes.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Specialty Practices
            </h3>
            <p className="text-gray-600">
              Send referral records to specialists automatically. 
              No more manual CD burning or secure email chains.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Radiology Centers
            </h3>
            <p className="text-gray-600">
              Receive imaging orders and send results back to referring physicians. 
              All auditable and compliant.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Small Clinics
            </h3>
            <p className="text-gray-600">
              Connect with larger health systems without expensive EMR integrations. 
              API-first, usage-based pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, Usage-Based Pricing
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            No contracts. No enterprise sales. Just pay for what you use.
          </p>
          
          <div className="bg-white rounded-lg border border-gray-200 p-8 max-w-md mx-auto">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              Free
            </div>
            <div className="text-gray-600 mb-6">
              First 10,000 API calls
            </div>
            <div className="border-t border-gray-200 pt-6">
              <div className="text-2xl font-semibold text-gray-900 mb-2">
                $0.005
              </div>
              <div className="text-gray-600 mb-6">
                per call after that
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Team Plan: $99/mo
              </div>
              <div className="text-sm text-gray-600">
                Alerts, dedicated logs, priority support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Built for Healthcare IT
        </h2>
        <div className="grid md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          <div className="text-center">
            <div className="text-2xl font-semibold text-gray-700 mb-2">FHIR R4</div>
            <div className="text-sm text-gray-500">Compatible</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-gray-700 mb-2">HIPAA</div>
            <div className="text-sm text-gray-500">Compliant</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-gray-700 mb-2">SOC 2</div>
            <div className="text-sm text-gray-500">In Progress</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-gray-700 mb-2">99.9%</div>
            <div className="text-sm text-gray-500">Uptime SLA</div>
          </div>
        </div>
      </section>

      {/* Quickstart CTA */}
      <section id="quickstart" className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get your API key in seconds. Start with 10,000 free calls. 
            No credit card required.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="/docs"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition font-semibold text-lg"
            >
              View Quickstart Guide
            </a>
            <a
              href="/demo"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg border-2 border-white hover:bg-blue-800 transition font-semibold text-lg"
            >
              Try the Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/docs" className="hover:text-white transition">API Documentation</a></li>
                <li><a href="/demo" className="hover:text-white transition">Demo</a></li>
                <li><a href="#quickstart" className="hover:text-white transition">Quickstart</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Status</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            © {new Date().getFullYear()} MyCareLinker. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
