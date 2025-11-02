"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [patients, setPatients] = useState<any[]>([]);
  const [role, setRole] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch patients
  useEffect(() => {
    if (!role) return;
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/patients`)
      .then((res) => {
        const entries = res.data.entry || [];
        setPatients(entries.map((e: any) => e.resource));
      })
      .catch((err) => console.error("Error fetching patients:", err))
      .finally(() => setLoading(false));
  }, [role]);

  // Simulate role-based filtering
  const getVisiblePatients = () => {
    if (role === "Provider A") return patients.slice(0, 2);
    if (role === "Provider B") return patients.slice(2, 4);
    if (role === "Patient") return patients.slice(0, 1);
    return [];
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 flex flex-col items-center justify-start px-6 py-10">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-blue-700 mb-2">MyCareLinker</h1>
      <p className="text-gray-600 mb-8 text-center max-w-2xl">
        Connecting healthcare providers through secure, patient-centered data exchange.
      </p>

      {/* Step 1: Role selection */}
      {!role ? (
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Demo Login</h2>
          <p className="text-gray-500 mb-6">Select your role to see how data sharing works.</p>

          <div className="flex flex-col gap-3">
            {["Provider A", "Provider B", "Patient", "Admin"].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition font-medium"
              >
                Log in as {r}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Dashboard */}
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl w-full mt-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-blue-700">
                {role} Dashboard
              </h2>
              <button
                onClick={() => setRole("")}
                className="text-sm text-gray-500 hover:text-red-500"
              >
                Log out
              </button>
            </div>

            {loading ? (
              <p>Loading patients...</p>
            ) : (
              <>
                {getVisiblePatients().length === 0 ? (
                  <p className="text-gray-500">No patients found for your role.</p>
                ) : (
                  <ul className="grid md:grid-cols-2 gap-4">
                    {getVisiblePatients().map((p, index) => (
                      <li
                        key={index}
                        className="border border-blue-100 rounded-xl p-4 hover:shadow-md transition bg-blue-50"
                      >
                        <h3 className="font-semibold text-blue-800 text-lg">
                          {p.name?.given?.[0]} {p.name?.family}
                        </h3>
                        <p className="text-gray-600 text-sm">DOB: {p.birthDate}</p>
                        <p className="text-gray-600 text-sm">ID: {p.id}</p>

                        {role.includes("Provider") && (
                          <button
                            className="mt-3 text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                            onClick={() =>
                              alert(`Record securely shared for patient ${p.id}`)
                            }
                          >
                            Share Record ➜
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </>
      )}
    </main>
  );
}
