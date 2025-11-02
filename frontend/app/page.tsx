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
