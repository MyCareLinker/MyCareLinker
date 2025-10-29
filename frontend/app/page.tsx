"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/patients`)
      .then(res => {
        setPatients(res.data.entry || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching patients:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">MyCareLinker Patients</h1>

      {loading ? (
        <p>Loading patient data...</p>
      ) : patients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        <div className="space-y-3">
          {patients.map((p, i) => (
            <div key={i} className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <h2 className="text-lg font-semibold text-gray-800">
                {p.resource.name?.[0]?.given?.[0]} {p.resource.name?.[0]?.family}
              </h2>
              <p className="text-gray-600">DOB: {p.resource.birthDate || "N/A"}</p>
              <p className="text-gray-500 text-sm">ID: {p.resource.id}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
