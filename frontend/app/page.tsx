"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/patients`);
        setPatients(response.data.entry || []);
      } catch (err) {
        console.error("Error fetching patients:", err);
        setError("Failed to load patient data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center p-8 space-y-10 bg-gray-50 min-h-screen text-center">
      {/* Header / Intro */}
      <section className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-4 text-blue-600 tracking-tight">
          MyCareLinker
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Bridging the gap between healthcare providers — securely, seamlessly,
          and centered around the patient.
        </p>
      </section>

      {/* Why Section */}
      <section className="max-w-3xl text-left bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Why We Built This
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Every day, patients see multiple providers who don’t share the same systems.
          Records get scattered, duplicated, or lost — slowing care and risking errors.
          <br />
          <br />
          MyCareLinker is our proof of concept showing how FHIR standards can make secure,
          real-time data exchange possible across organizations.
        </p>
      </section>

      {/* How It Works */}
      <section className="max-w-3xl text-left bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">How It Works</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Our backend speaks the FHIR protocol to handle health data securely.</li>
          <li>Providers can view, share, and update patient info in one place.</li>
          <li>Patients remain in control of who can see their data.</li>
        </ul>
      </section>

      {/* Live Demo Section */}
      <section className="max-w-3xl text-left bg-white rounded-2xl shadow-md p-6 w-full">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
          See It in Action
        </h2>

        {loading && <p className="text-gray-500 text-center">Loading patients...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && !error && patients.length === 0 && (
          <p className="text-gray-500 text-center">No patients found.</p>
        )}

        {!loading && patients.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {patients.map((item: any) => {
              const p = item.resource;
              const name = p.name
                ? `${p.name[0]?.given?.join(" ")} ${p.name[0]?.family || ""}`
                : "Unknown Patient";
              const birthDate = p.birthDate || "N/A";
              const id = p.id || "—";

              return (
                <div
                  key={id}
                  className="border border-gray-200 rounded-xl p-4 shadow-sm bg-gray-50 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
                  <p className="text-gray-600 text-sm mb-1">DOB: {birthDate}</p>
                  <p className="text-gray-500 text-xs">ID: {id}</p>
                  <button className="mt-3 px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition">
                    Share Record
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* What's Next */}
      <section className="max-w-3xl text-left bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">What’s Next</h2>
        <p className="text-gray-600 leading-relaxed">
          This is just the start. Our next milestone: connecting real hospital systems
          through secure APIs, with full HIPAA compliance and patient consent flows.
          <br />
          <br />
          The goal is simple — empower every provider and patient to share health data
          as easily as we share messages.
        </p>
      </section>
    </main>
  );
}
