"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("");

  // Call Node.js backend API
  const callApi = async () => {
    try {
      const res = await axios.get("http://localhost:5000/ping");
      setMessage(res.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Error calling API");
    }
  };

  // Refresh UI (clear the message)
  const refreshMessage = () => {
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Ping Pong Test
        </h1>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={callApi}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Hit /ping API
          </button>

          <button
            onClick={refreshMessage}
            className="px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600 transition"
          >
            Refresh
          </button>
        </div>

        <h2 className="mt-6 text-xl text-gray-700">
          {message || "Click the button to call the API"}
        </h2>
      </div>
    </div>
  );
}
