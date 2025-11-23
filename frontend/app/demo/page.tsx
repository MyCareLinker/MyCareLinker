"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function DemoPage() {
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/patients`
        );
        setPatients(response.data.entry || []);
      } catch (error) {
        console.error("Error fetching patients:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, []);

  return (
    <main className="min-h-screen flex flex-col px-6 md:px-12 bg-gray-50">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto w-full py-6 mb-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MyCareLinker
          </Link>
          <div className="flex gap-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Home
            </Link>
            <Link
              href="/docs"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              API Docs
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-12 flex flex-col items-center justify-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Live Demo
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mb-6">
          See MyCareLinker in action. Browse patient records and simulate sharing 
          between healthcare organizations.
        </p>
      </section>

      {/* Story Section */}
      <section className="py-12 text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Why MyCareLinker
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          IT teams spend hours manually transferring patient records — CDs, faxes, giant PDFs. 
          MyCareLinker provides a secure API layer so records flow seamlessly between organizations, 
          auditable and HIPAA-compliant.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          No more burning CDs, sending secure emails, or waiting for fax machines. 
          One API call sends structured patient data where it needs to go, with full 
          consent management and audit trails.
        </p>
      </section>

      {/* Demo Section */}
      <section className="py-12 bg-white rounded-lg shadow-sm mb-12">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-12">
          Patient Records
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading patients...</p>
        ) : patients.length === 0 ? (
          <p className="text-center text-gray-600">No patients found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center">
            {patients.map((p, index) => {
              const nameObj = Array.isArray(p.resource.name)
                ? p.resource.name[0]
                : p.resource.name;
              const firstName = nameObj?.given?.[0] || "Unnamed";
              const lastName = nameObj?.family || "Patient";

              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center border border-gray-200"
                >
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    {firstName} {lastName}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    <strong>DOB:</strong> {p.resource.birthDate}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>ID:</strong> {p.resource.id}
                  </p>
                  <button className="w-full bg-blue-700 text-white py-2 rounded-xl hover:bg-blue-800 transition">
                    Share Record
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* How It Works Section */}
      <section className="py-12 text-center max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-blue-700 mb-10">
          How It Works
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex flex-col items-center bg-blue-100 rounded-xl p-6 shadow-md w-48">
            <span className="font-semibold text-blue-700">Clinic A</span>
            <span className="text-gray-600 text-sm mt-2 text-center">
              Patient data originates here
            </span>
          </div>

          <div className="text-4xl text-gray-400 font-bold animate-pulse">→</div>

          <div className="flex flex-col items-center bg-blue-200 rounded-xl p-6 shadow-md w-48">
            <span className="font-semibold text-blue-700">MyCareLinker</span>
            <span className="text-gray-600 text-sm mt-2 text-center">
              Normalizes & secures data, consent token applied
            </span>
          </div>

          <div className="text-4xl text-gray-400 font-bold animate-pulse">→</div>

          <div className="flex flex-col items-center bg-blue-100 rounded-xl p-6 shadow-md w-48">
            <span className="font-semibold text-blue-700">Clinic B</span>
            <span className="text-gray-600 text-sm mt-2 text-center">
              Receives & views patient data
            </span>
          </div>
        </div>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          One provider initiates a share, patient consents, and the recipient receives data — 
          encrypted, auditable, and FHIR-compliant. All handled through a simple API call.
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600 rounded-lg mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Integrate?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start with 10,000 free API calls. No credit card required.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href="/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition font-semibold text-lg"
            >
              Get Started
            </Link>
            <Link
              href="/docs"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg border-2 border-white hover:bg-blue-800 transition font-semibold text-lg"
            >
              View API Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-sm text-gray-500">
        <Link href="/" className="text-blue-600 hover:text-blue-700">
          ← Back to Home
        </Link>
        <div className="mt-4">
          © {new Date().getFullYear()} MyCareLinker. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

