"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "react-hot-toast"
import { motion } from "framer-motion"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function LeaveSuggestion() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [suggestion, setSuggestion] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!suggestion.trim()) {
      toast.error("Suggestion cannot be empty!")
      return
    }

    // Handle form submission (e.g., send data to an API)
    console.log({ name, email, suggestion })

    toast.success("Thank you for your suggestion!")

    // Clear form fields after submission
    setName("")
    setEmail("")
    setSuggestion("")
  }

  return (
    <>
    <Header/>
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">💡 Leave a Suggestion</h2>
        <p className="text-gray-600 text-center mb-6">
          We value your feedback! Share your ideas or suggestions to help us improve.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <Input
              type="email"
              placeholder="Your Email (Optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <Textarea
              placeholder="Write your suggestion here..."
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              rows={5}
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition">
              🚀 Submit Suggestion
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </section>
              <Footer/>
              </>
  )
}
