import React from "react";
import { Link } from "wouter";
import { Shield, CheckCircle, Phone, Award, Users, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

import SEO from "@/components/SEO";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Uncompromising Safety",
      desc: "From full containment zones during mold remediation to OSHA-compliant asbestos abatement, we protect your health above all else."
    },
    {
      icon: Award,
      title: "Professional Excellence",
      desc: "Every technician on our team holds active IICRC certifications and receives continuous training on advanced mitigation techniques."
    },
    {
      icon: Users,
      title: "Pocatello Pride",
      desc: "We are deeply committed to serving Southeast Idaho. We live here, work here, and treat our customers like our neighbors."
    },
    {
      icon: Heart,
      title: "Empathetic Support",
      desc: "Disaster is stressful. We offer transparent communication, rapid responses, and direct insurance coordination to ease your burden."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="About Our Company" 
        description="Serving Pocatello, Chubbuck, and Southeast Idaho since 2007. IICRC certified technicians specializing in emergency damage mitigation and structural cleaning." 
        path="/about" 
      />
      {/* Header Banner */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24 topo-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-900 opacity-90" />
        <div className="container relative z-10 text-center max-w-3xl space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">Our Identity</span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">
            About Rocky Mountain
          </h1>
          <p className="text-primary-foreground/80 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Southeast Idaho's trusted contractor for certified damage restoration, structural cleaning, and hazardous material abatement since 2007.
          </p>
        </div>
      </section>

      {/* History / Mission Section */}
      <section className="py-20 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">Founded in 2007</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight">
              A History of Restoring Homes & Peace of Mind
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Rocky Mountain Cleaning & Restoration was founded in Pocatello, Idaho, with a vision to raise the bar for local property restoration and deep cleaning. In the years since, we have grown into Southeast Idaho's premier contractor, trusted by thousands of homeowners and local businesses.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Our specialty is tackling high-stakes, technically complex cleaning challenges. Whether a residential basement has flooded from a burst pipe in the freezing winter, or a historic commercial facility requires safe, compliant asbestos abatement, we bring state-of-the-art equipment and deep expertise to ensure a pristine finish.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              We operate with full licenses, high bonding, and comprehensive liability insurance. All our products are eco-friendly, family-safe, and highly effective. To make disaster recovery as simple as possible, we coordinate directly with your insurance provider, documenting the loss perfectly to protect your claim.
            </p>
          </div>

          {/* Right - Team Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-[360px] mx-auto">
              <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/images/about-team.webp"
                  alt="Rocky Mountain Cleaning & Restoration certified professional team"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20" />
                {/* Bottom info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-widest">
                      <MapPin className="w-4 h-4" />
                      <span>Based in Pocatello, ID</span>
                    </div>
                    <span className="text-xs text-primary-foreground/70 font-body block">
                      Serving Chubbuck, Blackfoot, Idaho Falls, and surrounding Southeast Idaho.
                    </span>
                  </div>
                </div>
              </div>
              {/* Offset Frame */}
              <div className="absolute inset-0 border-2 border-secondary rounded-2xl translate-x-4 translate-y-4 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-muted/40 border-y border-border/50">
        <div className="container space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">Our Pillars</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight">
              The Principles That Guide Our Craft
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              We are not just a cleaning service; we are structural restoration experts. Our values ensure we deliver the highest level of care to your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, index) => {
              const IconComponent = val.icon;
              return (
                <div key={index} className="bg-card p-8 rounded-xl border border-border/60 shadow-sm flex gap-5 items-start">
                  <div className="p-3 bg-primary/5 rounded-lg text-primary shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-primary">
                      {val.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background text-center">
        <div className="container max-w-3xl space-y-8">
          <h2 className="font-display font-extrabold text-3xl text-primary tracking-tight">
            Work with Pocatello's Most Trusted Contractor
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed max-w-xl mx-auto">
            Experience the white glove treatment for your carpets, or secure professional, emergency damage mitigation. Our team is standing by to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:2082371938">
              <Button className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold px-8 py-6 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-secondary" />
                Call Office: (208) 237-1938
              </Button>
            </a>
            <Link href="/contact">
              <Button className="w-full sm:w-auto bg-transparent border-2 border-primary hover:bg-primary/5 text-primary font-semibold px-8 py-6 flex items-center justify-center gap-2">
                Contact Our Team
                <CheckCircle className="w-5 h-5 text-secondary" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
