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
          `${process.env.NEXT_PUBLIC_API_URL}/patients`,
          { headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY } }
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

  const handleShareRecord = async (patientId: string) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/share-record`,
        {
          patientId,
          destinationOrg: "ClinicB",
          documents: [{ type: "FHIR-Bundle", content: "mock" }],
          consentToken: "demo-consent-token",
        },
        { headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY } }
      );
      alert(`Record shared! Transaction ID: ${res.data.transactionId}`);
    } catch (error) {
      console.error(error);
      alert("Failed to share record.");
    }
  };

  return (
    <main className="flex flex-col flex-grow items-center justify-center px-4 md:px-12">
      {/* Hero */}
      <section className="text-center py-16 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">MyCareLinker</h1>
        <p className="text-xl text-gray-700 max-w-2xl mb-2">
          Secure API to send and receive patient records between healthcare organizations.
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          Built for IT teams. FHIR-compatible. Drop-in code samples.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#demo"
            className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition"
          >
            Try the Demo
          </a>
          <a
            href="#how-it-works"
            className="bg-white text-blue-700 px-6 py-3 rounded-xl shadow-md hover:bg-gray-200 transition"
          >
            How It Works
          </a>
        </div>
      </section>

      {/* Live Demo */}
      <section id="demo" className="py-16 bg-gray-100 text-center w-full">
        <h2 className="text-3xl font-semibold text-blue-700 mb-10">Live Demo</h2>

        {loading ? (
          <p className="text-gray-600">Loading patients...</p>
        ) : patients.length === 0 ? (
          <p className="text-gray-600">No patients found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {patients.map((p, idx) => {
              const nameObj = Array.isArray(p.resource.name)
                ? p.resource.name[0]
                : p.resource.name;
              const firstName = nameObj?.given?.[0] || "Unnamed";
              const lastName = nameObj?.family || "Patient";

              return (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    {firstName} {lastName}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    <strong>DOB:</strong> {p.resource.birthDate}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>ID:</strong> {p.resource.id}
                  </p>
                  <button
                    onClick={() => handleShareRecord(p.resource.id)}
                    className="w-full bg-blue-700 text-white py-2 rounded-xl hover:bg-blue-800 transition"
                  >
                    Share Record
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-700 mb-10">How It Works</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex flex-col items-center bg-blue-100 rounded-xl p-6 shadow-md w-48">
            <span className="font-semibold text-blue-700">Clinic A</span>
            <span className="text-gray-600 text-sm mt-2 text-center">Patient data originates here</span>
          </div>

          <div className="text-3xl text-gray-400 font-bold animate-pulse">→</div>

          <div className="flex flex-col items-center bg-blue-200 rounded-xl p-6 shadow-md w-48">
            <span className="font-semibold text-blue-700">MyCareLinker</span>
            <span className="text-gray-600 text-sm mt-2 text-center">
              Normalizes & secures data, consent token applied
            </span>
          </div>

          <div className="text-3xl text-gray-400 font-bold animate-pulse">→</div>

          <div className="flex flex-col items-center bg-blue-100 rounded-xl p-6 shadow-md w-48">
            <span className="font-semibold text-blue-700">Clinic B</span>
            <span className="text-gray-600 text-sm mt-2 text-center">Receives & views patient data</span>
          </div>
        </div>

        <p className="mt-12 text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          One provider initiates a share, patient consents, and the recipient receives data — encrypted, auditable, and FHIR-compliant.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-20 mb-8">
        <p>© {new Date().getFullYear()} MyCareLinker. All rights reserved.</p>
      </footer>
    </main>
  );
}
