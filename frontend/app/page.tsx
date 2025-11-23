"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
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
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 md:px-12">
      {/* Hero Section */}
      <section className="text-center py-24">
        <h1 className="text-5xl font-bold mb-6 text-blue-700">
          MyCareLinker
        </h1>
        <p className="text-xl max-w-2xl mx-auto leading-relaxed text-gray-700 mb-4">
          A simple API to send and receive patient records between healthcare organizations.
        </p>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Built for IT teams. Secure, FHIR-compatible, and usage-based. Drop-in code samples included.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#demo"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition"
          >
            Try the Demo
          </a>
          <a
            href="/docs"
            className="inline-block bg-white text-blue-700 px-6 py-3 rounded-xl shadow-md hover:bg-gray-200 transition"
          >
            API Docs
          </a>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 bg-white max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Why MyCareLinker
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Healthcare IT teams spend hours transferring patient records manually — CDs, faxes, or giant PDFs. MyCareLinker provides a secure API layer so records flow seamlessly between organizations.
        </p>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-12">
          Live Demo
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading patients...</p>
        ) : patients.length === 0 ? (
          <p className="text-center text-gray-600">No patients found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {patients.map((p, index) => {
              const nameObj = Array.isArray(p.resource.name)
                ? p.resource.name[0]
                : p.resource.name;
              const firstName = nameObj?.given?.[0] || "Unnamed";
              const lastName = nameObj?.family || "Patient";

              return (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold text-blue-700 mb-1">
                    {firstName} {lastName}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    <strong>DOB:</strong> {p.resource.birthDate}
                  </p>
                  <p className="text-gray-600 mb-2">
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

      {/* Architecture Section */}
      <section className="py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          How It Works
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          MyCareLinker sits between healthcare systems, normalizes FHIR data, and enables secure, auditable transfers. One provider initiates, the patient consents, and the receiving provider gets the data — fast and compliant.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex flex-col items-center bg-blue-100 rounded-xl p-6 shadow-md w-40">
            <span className="font-semibold text-blue-700">Clinic A</span>
            <span className="text-gray-600 text-sm mt-2 text-center">
              Patient data originates
            </span>
          </div>

          <div className="text-4xl text-gray-400 font-bold">→</div>

          <div className="flex flex-col items-center bg-blue-200 rounded-xl p-6 shadow-md w-40">
            <span className="font-semibold text-blue-700">MyCareLinker</span>
            <span className="text-gray-600 text-sm mt-2 text-center">
              Secure transfer & audit
            </span>
          </div>

          <div className="text-4xl text-gray-400 font-bold">→</div>

          <div className="flex flex-col items-center bg-blue-100 rounded-xl p-6 shadow-md w-40">
            <span className="font-semibold text-blue-700">Clinic B</span>
            <span className="text-gray-600 text-sm mt-2 text-center">
              Data received
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} MyCareLinker. All rights reserved.
      </footer>
    </main>
  );
}
