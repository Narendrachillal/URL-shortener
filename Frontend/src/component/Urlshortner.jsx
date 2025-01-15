import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import axios from "axios";

export default function UrlShortener() {
  const [inputUrl, setInputUrl] = useState("");
  const [shortURL, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // To store error messages
  const [views, setViews] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Reset error state

    if (!inputUrl) {
      alert("Please enter a valid URL");
      setIsLoading(false);
      return;
    }

    try {
      // Send the URL to the backend using Axios
      const response = await axios.post(
        "http://localhost:5000/api/v1/url",
        { url: inputUrl },
        {
          headers: {
            "Content-Type": "application/json", // Ensure this header is set
          },
        }
      );

      // Handle successful response
      setShortUrl(response.data.payload.shortID); // Assuming the response has 'shortID'
    } catch (error) {
      console.error("Failed to shorten URL:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-purple-600">
      <div className="bg-slate-500 p-8 rounded-lg flex flex-col items-center">
        <div className="flex mb-5 justify-center text-3xl gap-2">
          <FaLink />
          <span className="font-extrabold">URL</span>
          <span className="text-red-600 font-mono">Shortener</span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            type="text"
            placeholder="Enter Long URL"
            className="w-96 h-8 rounded-md bg-transparent text-white p-2 border border-gray-300"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`rounded-md px-10 py-2 mt-4 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-400 hover:bg-purple-500"
            }`}
          >
            {isLoading ? "Shrinking..." : "Shrink URL"}
          </button>
        </form>

        {/* Show error message if there is any */}
        {error && <p className="text-red-600 mt-3">{error}</p>}

        {shortURL && (
          <div className="mt-5 text-white">
            <p>Shortened URL:</p>
            <a
              href={`http://localhost:5000/api/v1/url/${shortURL}`} // Assuming your backend will redirect to the short URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
              onClick={() => setViews((prevViews) => prevViews + 1)}
            >
              {`http://localhost:5000/api/v1/url/${shortURL}`}
            </a>
            <p>Views: {views}</p>
          </div>
        )}
      </div>
    </div>
  );
}
