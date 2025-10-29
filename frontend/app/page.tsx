"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activity, setActivity] = useState<
    { name: string; recipient: string; timestamp: string }[]
  >([]);

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

  const handleShare = (name: string) => {
    const recipient = ["Dr. Lee", "Dr. Patel", "Dr. Johnson", "Clinic A"][Math.floor(Math.random() * 4)];
    const timestamp = new Date().toLocaleTimeString();
    setActivity((prev) => [{ name, recipient, timestamp }, ...prev]);
  };

  const scrollToWhy = () => {
    document.getElementById("why")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <head>
        <title>MyCareLinker</title>
        <meta
          name="description"
          content="Connecting healthcare providers with patient-centered data exchange"
        />
      </head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-800">

        {/* Hero Section */}
        <section className="text-center py-16 px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-700 tracking-tight drop-shadow-sm">
            MyCareLinker
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Building bridges between healthcare providers — securely, seamlessly,
            and centered around the patient.
          </p>
          <div className="mt-8">
            <button
              onClick={scrollToWhy}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 shadow-md transition"
            >
              Learn More
            </button>
          </div>
        </section>

        {/* Problem & Solution */}
        <section
          id="why"
          className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-4 mb-8 border border-blue-100"
        >
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Why We Built This</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Healthcare data is fragmented. Every provider uses different systems —
            leaving patient records scattered, duplicated, or lost.
            <br /><br />
            MyCareLinker is our proof of concept showing how FHIR standards can make secure,
            real-time data exchange possible across organizations — with the patient in control.
          </p>
        </section>

        {/* How It Works + Architecture Diagram */}
        <section className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl shadow-md p-8 max-w-4xl mx-4 mb-8 border border-blue-200">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">How It Works</h2>
          <p className="text-gray-700 text-lg mb-6 text-center">
            Providers and patients interact through MyCareLinker API using secure FHIR standards.
          </p>

          {/* Architecture Diagram */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <div className="bg-blue-200 rounded-xl p-6 text-center shadow-md w-40 transform transition hover:scale-105 hover:shadow-xl cursor-pointer">
              <span className="font-semibold text-blue-800">Provider A</span>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="w-24 h-1 bg-blue-600 md:absolute md:top-1/2 md:left-0 md:right-0"></div>
              <div className="bg-blue-400 rounded-xl p-6 text-center shadow-md w-48 z-10 transform transition hover:scale-105 hover:shadow-xl cursor-pointer">
                <span className="font-semibold text-white">MyCareLinker API</span>
                <p className="text-xs text-white mt-1">Secure FHIR Exchange</p>
              </div>
            </div>

            <div className="bg-blue-200 rounded-xl p-6 text-center shadow-md w-40 transform transition hover:scale-105 hover:shadow-xl cursor-pointer">
              <span className="font-semibold text-blue-800">Provider B</span>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">
            Patient consent required for every exchange
          </p>
        </section>

        {/* Live Demo */}
        <section className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-4 mb-8 border border-blue-100 w-full">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700 text-center">
            Live Demo: Patient Data Exchange
          </h2>
          <p className="text-gray-600 text-center mb-6">
            A simulated “Venmo for health records” — providers securely share patient data in real time.
          </p>

          {loading && <p className="text-gray-500 text-center">Loading patients...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {!loading && !error && patients.length === 0 && (
            <p className="text-gray-500 text-center">No patients found.</p>
          )}

          {!loading && patients.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {patients.map((item: any, index: number) => {
                const p = item.resource;
                const name =
                  p?.name && Array.isArray(p.name) && p.name.length > 0
                    ? p.name[0].text ||
                      `${(p.name[0].given || []).join(" ")} ${p.name[0].family || ""}`.trim()
                    : "(Unnamed Patient)";
                const birthDate = p.birthDate || "N/A";
                const id = p.id || `patient-${index + 1}`;

                return (
                  <div
                    key={id}
                    className="border border-blue-100 rounded-xl p-5 shadow-sm bg-gradient-to-br from-white to-blue-50 hover:shadow-md transition transform hover:-translate-y-1"
                  >
                    <h3 className="text-lg font-semibold text-blue-800 mb-1">{name}</h3>
                    <p className="text-gray-600 text-sm mb-1">DOB: {birthDate}</p>
                    <p className="text-gray-500 text-xs mb-3">ID: {id}</p>
                    <button
                      onClick={() => handleShare(name)}
                      className="mt-1 px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
                    >
                      Share Record
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Activity Feed */}
        <section className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl shadow-md p-8 max-w-4xl mx-4 mb-8 border border-blue-200 w-full">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700 text-center">Activity Feed</h2>
          {activity.length === 0 ? (
            <p className="text-gray-500 text-center">No sharing activity yet. Try sharing a record above!</p>
          ) : (
            <ul className="space-y-3 text-gray-700">
              {activity.map((a, i) => (
                <li key={i} className="bg-white border border-blue-100 p-4 rounded-xl shadow-sm">
                  <span className="font-semibold text-blue-800">{a.name}</span> shared their record with{" "}
                  <span className="text-blue-600">{a.recipient}</span> at {a.timestamp}.
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Vision */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl shadow-lg p-8 max-w-4xl mx-4 mb-12">
          <h2 className="text-3xl font-semibold mb-4">What’s Next</h2>
          <p className="leading-relaxed text-lg text-blue-50">
            This is just the start. Our next milestone is connecting real hospital systems
            through secure APIs, with full HIPAA compliance and patient consent flows.
            <br /><br />
            The vision is simple: a world where healthcare teams share information
            as easily as we share messages — with patients at the center of it all.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-sm text-gray-500 py-6">
          © {new Date().getFullYear()} MyCareLinker. Built with ❤️ to connect care.
        </footer>
      </main>
    </>
  );
}