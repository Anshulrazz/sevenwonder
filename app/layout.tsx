'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React
import StoreProvider from "./StoreProvider";
import MouseMoveEffect from "@/components/mouse";
import { Providers } from "./UIprovider";
import { useState } from "react";
import { X } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isShow, setIsShow] = useState(false);
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Seven Wonders Limited - Find Your Perfect Workspace" />
        <meta
          name="description"
          content="Find the best possible options, compare deal terms, and get the best for your organization"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sevenwonder.in" />
        <meta property="og:title" content="Seven Wonders Limited - Find Your Perfect Workspace" />
        <meta
          property="og:description"
          content="Find the best possible options, compare deal terms, and get the best for your organization"
        />
        <meta property="og:image" content="https://sevenwonder.in/_next/static/media/logo.bd21de4a.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sevenwonder.in" />
        <meta property="twitter:title" content="Seven Wonders Limited - Find Your Perfect Workspace" />
        <meta
          property="twitter:description"
          content="Find the best possible options, compare deal terms, and get the best for your organization"
        />
        <meta property="twitter:image" content="https://sevenwonder.in/_next/static/media/logo.bd21de4a.png" />

        {/* Favicon */}
        <link rel="icon" href="https://sevenwonder.in/_next/static/media/logo.bd21de4a.png" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Seven Wonders Limited" />
        <meta name="keywords" content="workspace, office spaces, deals, workspace solutions, Seven Wonders Limited" />

        {/* Title and Fonts */}
        <title>Seven Wonders Limited - Find Your Perfect Workspace</title>
      </head>
      <body className={inter.className}>
        <StoreProvider>
          <Providers>
            <MouseMoveEffect />
            <button
              onClick={() => setIsShow(true)}
              className="fixed right-0 top-1/2 z-50 flex h-[120px] w-10 -translate-y-1/2 items-center justify-center bg-red-600 px-2 text-sm font-bold text-white shadow-lg transition-all hover:bg-red-700"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              Enquiry Now
            </button>
            {isShow && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                  <button
                    onClick={() => setIsShow(false)}
                    className="absolute text-gray-500 right-4 top-4 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <h2 className="mb-6 text-2xl font-bold text-center text-blue-900">Have a Query?</h2>

                  <form className="space-y-4">
                    <input type="text" name="fullName" placeholder="Full Name" className="w-full p-3 border rounded-md" required />
                    <input type="tel" name="contactNumber" placeholder="Contact Number" className="w-full p-3 border rounded-md" required />  
                    <textarea name="message" placeholder="Message" className="w-full p-3 border rounded-md" required />
                    <button type="submit" className="w-full py-3 text-white bg-red-600 rounded-md hover:bg-red-700">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
            {children}
          </Providers>
        </StoreProvider>
        <script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="Hw0TAI"
        ></script>
      </body>
    </html>
  );
}
