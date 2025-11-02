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
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-blue-100 via-white to-gray-50">
        <h1 className="text-5xl font-bold mb-6 text-blue-700">MyCareLinker</h1>
        <p className="text-xl max-w-2xl mx-auto leading-relaxed text-gray-700">
          Bridging the gap between healthcare providers. Securely. Seamlessly. 
          Think of it like <strong>Venmo — but for patient records.</strong>
        </p>
        <a
          href="#story"
          className="mt-10 inline-block bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition"
        >
          Learn How It Works ↓
        </a>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 bg-white px-8">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-12">
          The Problem We're Solving
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            Every day, patients walk into new clinics, specialists, or hospitals — 
            and their doctors can’t access their full medical history.
          </p>
          <p>
            Why? Because healthcare data lives in silos. One system (Epic) doesn’t
            easily talk to another (Cerner, Allscripts, or custom hospital EHRs).
            So patients repeat tests. Doctors guess. And care suffers.
          </p>
          <p>
            MyCareLinker fixes that by creating a simple, secure bridge — one that
            lets verified healthcare providers <strong>exchange patient data 
            in seconds</strong> using modern, interoperable standards like FHIR.
          </p>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-gray-100 px-8">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-12">
          See How It Could Work
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading patients...</p>
        ) : patients.length === 0 ? (
          <p className="text-center text-gray-600">No patients found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {patients.map((p, index) => {
              const nameObj = Array.isArray(p.resource.name)
                ? p.resource.name[0]
                : p.resource.name;
              const firstName = nameObj?.given?.[0] || "Unnamed";
              const lastName = nameObj?.family || "Patient";

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition animate-fadeIn"
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

      {/* Architecture Section */}
      <section className="py-24 bg-white px-8">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-12">
          Under the Hood: Secure & Interoperable
        </h2>

        <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed space-y-6 mb-12">
          <p>
            MyCareLinker is built on top of <strong>FHIR APIs</strong>, the global healthcare
            standard for data exchange. This means it can connect to major EHR systems like
            Epic, Cerner, and AthenaHealth — without changing how they store or structure data.
          </p>
          <p>
            It works like this: one provider initiates a share request, the patient consents,
            and the data is securely transferred to another provider’s system. Think of it
            as a digital “handoff” between doctors — encrypted, auditable, and HIPAA compliant.
          </p>
        </div>

        {/* Minimalist Data Flow Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center bg-blue-100 rounded-xl p-6 shadow-md w-40 animate-fadeIn">
            <span className="font-semibold text-blue-700">Clinic A</span>
            <span className="text-gray-600 text-sm mt-2 text-center">
              Patient data originates here
            </span>
          </div>

          <div className="text-4xl text-gray-400 font-bold animate-pulse">→</div>

          <div className="flex flex-col items-center bg-blue-200 rounded-xl p-6 shadow-md w-40 animate-fadeIn">
            <span className="font-semibold text-blue-700">MyCareLinker</span>
            <span className="text-gray-600 text-sm mt-2 text-center">
              Secure exchange & audit
            </span>
          </div>

          <div className="text-4xl text-gray-400 font-bold animate-pulse">→</div>

          <div className="flex flex-col items-center bg-blue-100 rounded-xl p-6 shadow-md w-40 animate-fadeIn">
            <span className="font-semibold text-blue-700">Clinic B</span>
            <span className="text-gray-600 text-sm mt-2 text-center">
              Data received & viewable
            </span>
          </div>
        </div>
      </section>

      {/* Vision / CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center px-8">
        <h2 className="text-3xl font-semibold mb-6">The Future of Connected Care</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-10">
          This is just the beginning. MyCareLinker isn’t another EHR — 
          it’s the missing link between them. A platform that makes 
          interoperability human again.
        </p>
        <a
          href="mailto:mycarelinker@gmail.com"
          className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Get in Touch
        </a>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} MyCareLinker. All rights reserved.
      </footer>
    </main>
  );
}