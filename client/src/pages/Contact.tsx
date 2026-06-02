import React, { useState } from "react";
import { Phone, MapPin, Clock, Shield, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { MapView } from "@/components/Map";
import { toast } from "sonner";

import SEO from "@/components/SEO";

export default function Contact() {
  const [formData, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "water-damage",
    message: "",
    honeypot: "", // Honeypot field for bot protection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot detection
    if (formData.honeypot) {
      console.warn("Spam bot detected!");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your quote request has been received. Our team will contact you shortly.", {
        description: "For urgent 24/7 emergencies, please call (208) 244-4420.",
        duration: 6000,
      });
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceType: "water-damage",
        message: "",
        honeypot: "",
      });
    }, 1500);
  };

  // Rocky Mountain Pocatello Location
  const pocatelloLocation = { lat: 42.912642, lng: -112.441113 };

  return (
    <Layout>
      <SEO 
        title="Contact Us & Free Estimates" 
        description="Call Rocky Mountain Cleaning & Restoration in Pocatello at (208) 237-1938 or 24/7 emergency dispatch at (208) 244-4420. Free consultations." 
        path="/contact" 
      />
      {/* Header Banner */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24 topo-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-900 opacity-90" />
        <div className="container relative z-10 text-center max-w-3xl space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">Get In Touch</span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">
            Contact Rocky Mountain
          </h1>
          <p className="text-primary-foreground/80 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions, need a quote, or facing an emergency? Contact our Pocatello office today. Our team is ready to respond 24/7.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-20 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Contact Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4 text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">Pocatello Office</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
                Our Office Location & Details
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">
                Located conveniently on E Chubbuck Rd, we serve residential and commercial clients across Pocatello, Chubbuck, Blackfoot, and Southeast Idaho.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4 font-body text-sm">
              {/* Address */}
              <div className="bg-muted/30 p-5 rounded-xl border border-border/40 flex items-start gap-4">
                <div className="p-3 bg-primary/5 rounded-lg text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary text-base">Office Address</h4>
                  <p className="text-muted-foreground mt-1">
                    206 E Chubbuck Rd,<br />
                    Pocatello, ID 83202, USA
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="bg-muted/30 p-5 rounded-xl border border-border/40 flex items-start gap-4">
                <div className="p-3 bg-primary/5 rounded-lg text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary text-base">Phone Numbers</h4>
                  <div className="mt-1 space-y-1">
                    <p className="text-muted-foreground">
                      Office:{" "}
                      <a href="tel:2082371938" className="text-primary hover:underline font-semibold">
                        (208) 237-1938
                      </a>
                    </p>
                    <p className="text-red-600 font-bold flex items-center gap-1">
                      <Shield className="w-4 h-4 animate-pulse shrink-0" />
                      24/7 Dispatch:{" "}
                      <a href="tel:2082444420" className="hover:underline">
                        (208) 244-4420
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-muted/30 p-5 rounded-xl border border-border/40 flex items-start gap-4">
                <div className="p-3 bg-primary/5 rounded-lg text-primary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary text-base">Office Hours</h4>
                  <div className="mt-1 space-y-1 text-muted-foreground">
                    <p className="flex justify-between gap-8">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold text-foreground">8:00 AM - 5:00 PM</span>
                    </p>
                    <p className="flex justify-between gap-8">
                      <span>Saturday - Sunday:</span>
                      <span>Closed</span>
                    </p>
                    <p className="text-xs text-red-500 font-semibold pt-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      Emergency restoration available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="rounded-xl overflow-hidden border border-border shadow-md h-[300px] relative">
              <MapView 
                className="w-full h-full"
                initialCenter={pocatelloLocation}
                initialZoom={14}
                onMapReady={(map) => {
                  new google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: pocatelloLocation,
                    title: "Rocky Mountain Cleaning & Restoration",
                  });
                }}
              />
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div className="lg:col-span-7 bg-card p-8 rounded-xl border border-border/60 shadow-md space-y-6">
            <div className="space-y-2 text-left">
              <h3 className="font-display font-extrabold text-2xl text-primary tracking-tight">
                Request a Free Estimate or Consultation
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Fill out the form below with details about your cleaning or restoration needs, and our office staff will follow up with you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-body text-sm text-left">
              {/* Honeypot field (hidden from real users) */}
              <div className="hidden">
                <label htmlFor="honeypot">Leave this field blank</label>
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="font-semibold text-primary">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-border focus:border-secondary focus:outline-none bg-background text-foreground"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="font-semibold text-primary">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-border focus:border-secondary focus:outline-none bg-background text-foreground"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-semibold text-primary">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-border focus:border-secondary focus:outline-none bg-background text-foreground"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="font-semibold text-primary">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-border focus:border-secondary focus:outline-none bg-background text-foreground"
                    placeholder="(208) 555-0199"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="serviceType" className="font-semibold text-primary">Required Service *</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-border focus:border-secondary focus:outline-none bg-background text-foreground"
                >
                  <option value="water-damage">Water Damage Restoration</option>
                  <option value="fire-damage">Fire & Smoke Damage Restoration</option>
                  <option value="mold-remediation">Mold Remediation</option>
                  <option value="asbestos-removal">Asbestos Abatement</option>
                  <option value="carpet-cleaning">Professional Carpet Cleaning</option>
                  <option value="tile-duct-cleaning">Tile, Grout & Air Duct Cleaning</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="font-semibold text-primary">Message / Description of Loss *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-border focus:border-secondary focus:outline-none bg-background text-foreground resize-none"
                  placeholder="Please describe your damage restoration or cleaning needs..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-semibold py-4 hover:bg-primary/90 btn-hover-effect flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Submitting Quote Request...</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Request
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
