"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch } from "@/hooks/hooks";
import { Building2, Mail, MessageSquare, Phone, User } from "lucide-react";
import { postContact } from "@/lib/actions/user";
// import { postContact } from "@/lib/actions/user";

export function ContactForm() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      // dispatch(postContact(formData));

      // Reset the form and show success message
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
      dispatch(postContact(formData));
      setSuccessMessage("Than You for contacting us ❤️😊. We will contact you in the next 24 hours.");

      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <Card className="p-6 md:p-8">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <p className="text-gray-500">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <Input
                    id="name"
                    placeholder=""
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <User className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <div className="relative">
                  <Input
                    id="company"
                    placeholder=""
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                  <Building2 className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder=""
                    value={formData.email}
                    required
                    onChange={handleChange}
                  />
                  <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder=""
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <Phone className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <div className="relative">
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements..."
                  className="min-h-[120px]"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
                <MessageSquare className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full md:w-auto">
              Send Message
            </Button>
            {successMessage && (
              <p className="mt-4 text-sm text-green-600">{successMessage}</p>
            )}
          </div>
        </div>
      </form>
    </Card>
  );
}
