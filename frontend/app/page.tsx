import React from 'react';
import { 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Database, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2,
  Lock,
  Workflow
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <Workflow className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                MyCare<span className="text-teal-600">Linker</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-teal-600 transition">Features</a>
              <a href="#api" className="hover:text-teal-600 transition">API Reference</a>
              <a href="#pricing" className="hover:text-teal-600 transition">Pricing</a>
              <button className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition shadow-sm">
                Get API Key
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-100 px-3 py-1 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Now in Public Sandbox</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              The Plaid for <span className="text-teal-600">Health Records.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Connect to any EHR, exchange FHIR bundles, and orchestrate imaging access with a single API. Built for developers by engineers who hate fax machines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition shadow-lg shadow-teal-500/20">
                <span>Start Integrating</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition">
                View Documentation
              </button>
            </div>
          </div>

          {/* Terminal Mockup */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
                </div>
                <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">POST /v1/share-record</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="flex">
                  <span className="text-teal-400 mr-4">1</span>
                  <span className="text-pink-400">curl</span>
                  <span className="text-slate-300 ml-2">-X POST https://api.mycarelinker.com/v1/share</span>
                </div>
                <div className="flex">
                  <span className="text-teal-400 mr-4">2</span>
                  <span className="text-slate-400 ml-4">-H "Authorization: Bearer sk_prod_2025"</span>
                </div>
                <div className="flex">
                  <span className="text-teal-400 mr-4">3</span>
                  <span className="text-slate-400 ml-4">
                    -d '{'{"patient_id": "MRN-99", "dest": "CENTRAL-HOSP"}'}'
                  </span>
                </div>
                <div className="mt-4 text-slate-500 italic"># Response (202 OK)</div>
                <div className="text-green-400">
                  {`{`} <br />
                  &nbsp;&nbsp;"transaction_id": "TX_88102", <br />
                  &nbsp;&nbsp;"status": "DELIVERED", <br />
                  &nbsp;&nbsp;"audit_url": "https://logs.mcl.io/..." <br />
                  {`}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Infrastructure for Connected Care</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Skip the months of HL7 integration hell. We provide the stable abstraction layer you need to build faster.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Zap className="text-teal-500" />, 
                title: "Unified FHIR Gateway", 
                desc: "Send data to Epic, Cerner, or Athena using a single standardized FHIR R4 schema." 
              },
              { 
                icon: <ShieldCheck className="text-blue-500" />, 
                title: "HIPAA Compliant", 
                desc: "Enterprise-grade encryption, BAA included, and cryptographically signed audit logs for every byte." 
              },
              { 
                icon: <Database className="text-purple-500" />, 
                title: "DICOM Orchestration", 
                desc: "Don't move gigabytes. Generate secure WADO-RS pointers to stream imaging directly." 
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:shadow-xl hover:shadow-slate-200/50 transition duration-300">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Pricing Model */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
            <div className="p-8 md:p-12 text-center">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">Simple Pricing</span>
              <h2 className="text-4xl font-extrabold mt-4 mb-6">Developer First. Period.</h2>
              <div className="flex justify-center items-baseline mb-8">
                <span className="text-6xl font-black">$0.01</span>
                <span className="text-slate-500 ml-2">/ successful record sync</span>
              </div>
              <p className="text-slate-600 mb-8">First 1,000 requests per month are on us. No contracts, no implementation fees, no enterprise sales circus.</p>
              <div className="grid grid-cols-2 gap-4 text-left max-w-md mx-auto mb-10">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-teal-500 w-5 h-5" />
                  <span className="text-sm text-slate-700">Sandbox Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-teal-500 w-5 h-5" />
                  <span className="text-sm text-slate-700">99.9% Uptime SLA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-teal-500 w-5 h-5" />
                  <span className="text-sm text-slate-700">Usage Logs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-teal-500 w-5 h-5" />
                  <span className="text-sm text-slate-700">Webhooks</span>
                </div>
              </div>
              <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-xl hover:bg-slate-800 transition">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Workflow className="text-teal-500 w-6 h-6" />
                <span className="text-2xl font-bold tracking-tight">
                  MyCare<span className="text-teal-500">Linker</span>
                </span>
              </div>
              <p className="text-slate-400 max-w-sm">
                Simplifying the messy world of healthcare data exchange with a single, reliable API.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-widest text-xs text-slate-500">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">API Status</a></li>
                <li><a href="#" className="hover:text-white transition">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-widest text-xs text-slate-500">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Security (BAA)</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-slate-500 text-sm">
            <p>© 2025 MyCareLinker Inc.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}