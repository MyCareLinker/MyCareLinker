"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          MyCareLinker
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition font-medium">
                Docs
              </Link>
              <Link href="/demo" className="text-gray-600 hover:text-gray-900 transition font-medium">
                Demo
              </Link>
              <a
                href="#quickstart"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-semibold"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              🚀 Developer Infrastructure for Healthcare IT
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Healthcare Record Exchange
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Built for Developers
              </span>
        </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed font-medium">
          A simple API to send and receive patient records between healthcare organizations.
        </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Secure, FHIR-compatible, usage-based pricing. No enterprise sales. Just code.
        </p>
            <div className="flex gap-4 flex-wrap justify-center mb-12">
          <a
                href="#quickstart"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg"
          >
                Get Started Free
          </a>
          <a
            href="/docs"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-blue-600 hover:shadow-lg transition font-semibold text-lg"
              >
                View API Docs
              </a>
              <a
                href="/demo"
                className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-200 transition font-semibold text-lg"
              >
                See Live Demo
              </a>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>99.9% Uptime</span>
              </div>
              <div>•</div>
              <div>10,000 Free API Calls</div>
              <div>•</div>
              <div>No Credit Card Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                &lt;100ms
              </div>
              <div className="text-gray-600 text-sm">Average Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-gray-600 text-sm">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                FHIR R4
              </div>
              <div className="text-gray-600 text-sm">Fully Compatible</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              One API Call. That's It.
            </h2>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              Send patient records between organizations with a single POST request.
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We handle FHIR normalization, consent management, and audit logging automatically.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-1 shadow-2xl">
              <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400 text-sm font-mono">curl example</span>
                </div>
                <pre className="text-sm text-gray-100 font-mono leading-relaxed">
                  <code>{`curl -X POST https://api.mycarelinker.com/v1/share-record \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "patient_identifier": "patient-123",
    "destination_org": "clinic-b-org-id",
    "payload": {
      "resourceType": "Bundle",
      "type": "document",
      "entry": [...]
    },
    "consent_token": "consent-abc-xyz"
  }'

// Response (200 OK)
{
  "transaction_id": "txn_abc123",
  "delivery_status": "pending",
  "audit_log_url": "https://api.mycarelinker.com/v1/audit/txn_abc123",
  "estimated_delivery": "2024-01-15T10:30:00Z"
}`}</code>
                </pre>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a href="/docs" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2">
                View Full API Reference
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for IT Teams
        </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to integrate healthcare record exchange into your workflow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-2xl transition-all border border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                🔐
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                HIPAA-Compliant
              </h3>
              <p className="text-gray-600 leading-relaxed">
                End-to-end encryption, comprehensive audit logs, and consent management built in. 
                No compliance headaches—we handle it all.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-2xl transition-all border border-purple-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                FHIR-Compatible
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Accepts FHIR Bundles, CCDs, PDFs, and more. We normalize and route to any destination format automatically.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-2xl transition-all border border-green-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                📊
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Developer Dashboard
              </h3>
              <p className="text-gray-600 leading-relaxed">
                API keys, usage logs, transaction history, and a sandbox playground. 
                Full control, zero friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints Preview */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Core API Endpoints
        </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start with one endpoint. Expand as you need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold">
                  POST
                </span>
                <code className="text-gray-900 font-mono text-lg font-semibold">/v1/share-record</code>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Send a patient record to another organization. Returns transaction ID and delivery status.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold">
                  GET
                </span>
                <code className="text-gray-900 font-mono text-lg font-semibold">/v1/record/:id</code>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Retrieve a shared record by transaction ID. Includes full audit trail and metadata.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold">
                  POST
                </span>
                <code className="text-gray-900 font-mono text-lg font-semibold">/v1/consent</code>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Create and manage patient consent tokens for record sharing. HIPAA-compliant consent tracking.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold">
                  GET
                </span>
                <code className="text-gray-900 font-mono text-lg font-semibold">/v1/audit/:transactionId</code>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Get complete audit log for any transaction. Perfect for compliance reporting and debugging.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/docs"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              View Full API Documentation
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by healthcare organizations of all sizes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-l-4 border-blue-600 hover:shadow-xl transition-all">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Telehealth Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Automate record requests from primary care providers. 
                Receive structured FHIR data instead of faxes and manual processes.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-l-4 border-purple-600 hover:shadow-xl transition-all">
              <div className="text-3xl mb-4">👨‍⚕️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Specialty Practices
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Send referral records to specialists automatically. 
                No more manual CD burning or secure email chains.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-l-4 border-green-600 hover:shadow-xl transition-all">
              <div className="text-3xl mb-4">🩻</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Radiology Centers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Receive imaging orders and send results back to referring physicians. 
                All auditable, compliant, and automated.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 border-l-4 border-orange-600 hover:shadow-xl transition-all">
              <div className="text-3xl mb-4">🏪</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Small Clinics
                  </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with larger health systems without expensive EMR integrations. 
                API-first, usage-based pricing that scales with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stop the Manual Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how MyCareLinker compares to traditional methods.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="grid md:grid-cols-2 divide-x divide-gray-200">
                <div className="p-8 bg-red-50">
                  <div className="text-red-600 font-bold text-lg mb-4">❌ Traditional Methods</div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      <span>Manual CD burning and shipping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      <span>Fax machines and secure email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      <span>Hours of manual data entry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      <span>No audit trail or compliance tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      <span>Expensive EMR integrations</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8 bg-green-50">
                  <div className="text-green-600 font-bold text-lg mb-4">✅ MyCareLinker</div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>One API call, instant delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Automated, secure, and fast</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Zero manual work required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Complete audit logs and compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Usage-based, no contracts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
        </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No contracts. No enterprise sales. Just pay for what you use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  Free
                </div>
                <div className="text-gray-600 text-lg">
                  First 10,000 API calls
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    $0.005
                  </div>
                  <div className="text-gray-600 mb-4">
                    per call after that
                  </div>
                  <ul className="text-left space-y-3 text-gray-600 mt-6">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>10,000 free calls/month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>API access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Basic dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Community support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 border-2 border-blue-500 hover:shadow-2xl transition-all transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                POPULAR
              </div>
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-white mb-2">
                  $99
                </div>
                <div className="text-blue-100 text-lg">
                  per month
                </div>
              </div>
              <div className="border-t border-blue-400 pt-6">
                <div className="text-center">
                  <div className="text-gray-200 mb-4">
                    Everything in Free, plus:
                  </div>
                  <ul className="text-left space-y-3 text-white mt-6">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300">✓</span>
                      <span>Unlimited API calls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300">✓</span>
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300">✓</span>
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300">✓</span>
                      <span>Dedicated logs & alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300">✓</span>
                      <span>Team collaboration</span>
                    </li>
                  </ul>
                  <a
                    href="#quickstart"
                    className="mt-6 block w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-center"
                  >
                    Start Team Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges & Integrations */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for Healthcare IT
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by healthcare organizations. Built on industry standards.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 items-center justify-items-center mb-16">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">FHIR R4</div>
              <div className="text-sm text-gray-600">Fully Compatible</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">HIPAA</div>
              <div className="text-sm text-gray-600">Compliant</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">SOC 2</div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
          </div>

          {/* Integration Logos */}
          <div className="text-center">
            <p className="text-gray-600 mb-8 font-medium">Integrations Coming Soon</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
              <div className="text-2xl font-bold text-gray-400">Epic</div>
              <div className="text-2xl font-bold text-gray-400">Cerner</div>
              <div className="text-2xl font-bold text-gray-400">Athena</div>
              <div className="text-2xl font-bold text-gray-400">eClinicalWorks</div>
              <div className="text-2xl font-bold text-gray-400">HAPI FHIR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quickstart CTA */}
      <section id="quickstart" className="relative py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl mx-auto">
            Get your API key in seconds. Start with 10,000 free calls.
          </p>
          <p className="text-lg text-blue-200 mb-10">
            No credit card required. No contracts. Just code.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="/docs"
              className="bg-white text-blue-600 px-10 py-5 rounded-xl shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all font-bold text-lg"
            >
              View Quickstart Guide
            </a>
            <a
              href="/demo"
              className="bg-blue-700 text-white px-10 py-5 rounded-xl border-2 border-white hover:bg-blue-800 hover:scale-105 transition-all font-bold text-lg"
            >
              Try the Demo
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>10,000 free calls</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4 inline-block">
                MyCareLinker
              </Link>
              <p className="text-gray-500 text-sm mb-4">
                Healthcare record exchange API built for developers. 
                Secure, fast, and developer-friendly.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-white transition">Twitter</a>
                <a href="#" className="text-gray-500 hover:text-white transition">GitHub</a>
                <a href="#" className="text-gray-500 hover:text-white transition">LinkedIn</a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs" className="hover:text-white transition">API Documentation</Link></li>
                <li><Link href="/demo" className="hover:text-white transition">Demo</Link></li>
                <li><a href="#quickstart" className="hover:text-white transition">Quickstart</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Status</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <div>
        © {new Date().getFullYear()} MyCareLinker. All rights reserved.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
