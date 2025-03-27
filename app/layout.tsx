'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react";
import StoreProvider from "./StoreProvider";
import MouseMoveEffect from "@/components/mouse";
import { Providers } from "./UIprovider";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import GoogleProvider from './GoogleOAuthProvider';
import Head from "next/head";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  title = "Seven Wonders Limited - Find Your Perfect Workspace",
  description = "Find the best possible options, compare deal terms, and get the best for your organization",
  url = "https://sevenwonder.in",
  image = "https://sevenwonder.in/_next/static/media/logo.bd21de4a.png",
  keywords = "workspace, office spaces, deals, workspace solutions, Seven Wonders Limited",
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string;
}) {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    // Set metadata in the document head
    document.title = title;

    // Show offer toast
    toast.success('We offer Zero Rent Policy 🎉❤️', {
      position: "top-right",
      autoClose: 60000, // 1 minute in milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClick: () => {
        window.location.href = '/zero-rent-policy';
      }
    });

    // Add AI Chatbot script
    const script = document.createElement('script');
    script.innerHTML = `!function(w, d, s, ...args){
      var div = d.createElement('div');
      div.id = 'aichatbot';
      d.body.appendChild(div);
      w.chatbotConfig = args;
      var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s);
      j.defer = true;
      j.type = 'module';
      j.src = 'https://aichatbot.sendbird.com/index.js';
      f.parentNode.insertBefore(j, f);
    }(window, document, 'script', 'E5A230BB-DF01-4CF0-9E6C-686F93CB1D56', 'yUx_oqrtEnIOz12Dgrelo', {
      apiHost: 'https://api-cf-us-1.sendbird.com',
    });`;
    document.body.appendChild(script);

    // Update meta tags
    const metaTags = {
      description: description,
      keywords: keywords,
      author: "Seven Wonders Limited",
      robots: "index, follow",
      "og:type": "website",
      "og:url": url,
      "og:title": title,
      "og:description": description,
      "og:image": image,
      "twitter:card": "summary_large_image",
      "twitter:url": url,
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": image,
    };

    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      if (name.startsWith("og:") || name.startsWith("twitter:")) {
        const property = name;
        const existingMeta = document.querySelector(`meta[property="${property}"]`);
        if (existingMeta) {
          existingMeta.setAttribute("content", content);
        } else {
          const meta = document.createElement("meta");
          meta.setAttribute("property", property);
          meta.setAttribute("content", content);
          document.head.appendChild(meta);
        }
      } else {
        const existingMeta = document.querySelector(`meta[name="${name}"]`);
        if (existingMeta) {
          existingMeta.setAttribute("content", content);
        } else {
          const meta = document.createElement("meta");
          meta.setAttribute("name", name);
          meta.setAttribute("content", content);
          document.head.appendChild(meta);
        }
      }
    });

    // Set favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.setAttribute("href", image);
    } else {
      const link = document.createElement("link");
      link.setAttribute("rel", "icon");
      link.setAttribute("href", image);
      document.head.appendChild(link);
    }

    // Play sound on user interaction
    const handleUserInteraction = () => {
      const audio = new Audio("/souund.mp3");
      audio.play().catch((error) => console.log("Audio playback error:", error));

      // Remove event listeners after first interaction
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };

    // Add event listeners for user interaction
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);

    // Cleanup function
    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [title, description, keywords, url, image]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleProvider>
          <StoreProvider>
            <Providers>
              <MouseMoveEffect />
              <ToastContainer />
              <button
                onClick={() => setIsShow(true)}
                className="fixed right-0 top-1/2 z-50 flex h-[120px] w-10 -translate-y-1/2 items-center justify-center bg-red-600 px-2 text-sm font-bold text-white shadow-lg transition-all hover:bg-red-700"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                Enquiry Now
              </button>
              {isShow && (
                <div className="flex fixed inset-0 z-50 justify-center items-center bg-black/50">
                  <div className="relative p-6 w-full max-w-md bg-white rounded-lg shadow-lg">
                    <button
                      onClick={() => setIsShow(false)}
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <h2 className="mb-6 text-2xl font-bold text-center text-blue-900">Have a Query?</h2>
                    <form className="space-y-4">
                      <input type="text" name="fullName" placeholder="Full Name" className="p-3 w-full rounded-md border" required />
                      <input type="tel" name="contactNumber" placeholder="Contact Number" className="p-3 w-full rounded-md border" required />
                      <textarea name="message" placeholder="Message" className="p-3 w-full rounded-md border" required />
                      <button type="submit" className="py-3 w-full text-white bg-red-600 rounded-md hover:bg-red-700">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}
              {children}
            </Providers>
          </StoreProvider>
        </GoogleProvider>
        <script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="JD8lZS"
        >
        </script>
      </body>
    </html>
  );
}