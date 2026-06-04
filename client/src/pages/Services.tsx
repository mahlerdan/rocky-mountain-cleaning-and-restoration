import React, { useEffect } from "react";
import { useLocation } from "wouter";
import { Phone, Shield, CheckCircle, ArrowRight, Info, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { SERVICES_DATA } from "@/const";

import SEO from "@/components/SEO";

// Map service IDs to their corresponding stock photos
const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  "water-damage": {
    src: "/images/service-water-damage.webp",
    alt: "Professional water damage restoration and extraction equipment"
  },
  "fire-damage": {
    src: "/images/service-fire-damage.webp",
    alt: "Fire and smoke damage restoration work in progress"
  },
  "mold-remediation": {
    src: "/images/service-mold-remediation.webp",
    alt: "Certified mold remediation specialist in protective gear"
  },
  "asbestos-removal": {
    src: "/images/service-mold-remediation.webp",
    alt: "Licensed asbestos abatement specialist in full protective equipment"
  },
  "carpet-cleaning": {
    src: "/images/service-carpet-cleaning.webp",
    alt: "Professional carpet steam cleaning and deep extraction"
  },
  "tile-duct-cleaning": {
    src: "/images/service-tile-cleaning.webp",
    alt: "High-pressure tile and grout cleaning service"
  }
};

export default function Services() {
  const [location] = useLocation();

  // Scroll to hash on load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      <SEO 
        title="Restoration & Cleaning Services" 
        description="Our certified services in Pocatello: water damage drying, fire/smoke cleanup, certified mold remediation, asbestos abatement, and white glove carpet cleaning." 
        path="/services" 
      />
      {/* Header Banner */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24 topo-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-900 opacity-90" />
        <div className="container relative z-10 text-center max-w-3xl space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">What We Do</span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">
            Our Restoration & Cleaning Services
          </h1>
          <p className="text-primary-foreground/80 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Professional structural restoration and premium cleaning solutions. Serving Pocatello, Chubbuck, and Southeast Idaho with licensed expertise and advanced equipment.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-background">
        <div className="container space-y-24">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            const serviceImage = SERVICE_IMAGES[service.id];

            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 border-t border-border/40 first:border-t-0 first:pt-0 scroll-mt-24`}
              >
                {/* Text Content */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/5 rounded-lg text-primary">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground/60 uppercase tracking-wider">
                      Service Code: RM-{service.id.slice(0, 3).toUpperCase()}
                    </span>
                  </div>

                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-muted-foreground font-body leading-relaxed text-base sm:text-lg">
                    {service.longDesc}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-3 bg-muted/30 p-6 rounded-xl border border-border/40">
                    <h4 className="font-display font-bold text-sm text-primary uppercase tracking-wider flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      Key Capabilities & Standard Procedures:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                          <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact/CTA Specifics */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <a href="tel:2082371938">
                      <Button className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 btn-hover-effect flex items-center gap-2">
                        <Phone className="w-4 h-4 text-secondary" />
                        Request Quote
                      </Button>
                    </a>
                    {service.id === "water-damage" || service.id === "fire-damage" ? (
                      <a href="tel:2082444420">
                        <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center gap-2">
                          <Shield className="w-4 h-4 animate-pulse" />
                          24/7 Dispatch
                        </Button>
                      </a>
                    ) : null}
                  </div>
                </div>

                {/* Service Photo */}
                <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative aspect-square w-full max-w-[380px] mx-auto">
                    {serviceImage ? (
                      <>
                        <div className="absolute inset-0 rounded-2xl shadow-lg overflow-hidden">
                          <img
                            src={serviceImage.src}
                            alt={serviceImage.alt}
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                          />
                          {/* Subtle overlay with service badge */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center shadow-md shrink-0">
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <span className="font-display font-bold text-sm text-primary-foreground uppercase tracking-wide">
                                {service.title.split(" ")[0]} Care
                              </span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/80 text-primary-foreground text-xs font-mono">
                              <Info className="w-3.5 h-3.5 text-secondary" />
                              IICRC Certified
                            </div>
                          </div>
                        </div>
                        {/* Offset Border Frame */}
                        <div className="absolute inset-0 border border-secondary rounded-2xl translate-x-3 translate-y-3 -z-10" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/15 to-primary/5 border border-border/80 rounded-2xl shadow-lg flex flex-col justify-center items-center p-8 text-center space-y-4">
                          <div className="w-16 h-16 rounded-full bg-primary text-secondary flex items-center justify-center shadow-md">
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <span className="font-display font-black text-xl text-primary uppercase tracking-wider">
                            {service.title.split(" ")[0]} Care
                          </span>
                          <div className="h-0.5 w-12 bg-secondary" />
                          <p className="text-xs text-muted-foreground max-w-xs font-body leading-relaxed">
                            Our specialized equipment, industry certifications, and environmental safeguards guarantee a spotless, safe finish.
                          </p>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-mono">
                            <Info className="w-3.5 h-3.5 text-secondary" />
                            IICRC Standards Applied
                          </div>
                        </div>
                        <div className="absolute inset-0 border border-secondary rounded-2xl translate-x-3 translate-y-3 -z-10" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust Callout */}
      <section className="bg-muted/40 py-16 border-t border-border/50">
        <div className="container max-w-4xl text-center space-y-6">
          <div className="inline-flex p-3 bg-amber-500/10 text-amber-600 rounded-full border border-amber-500/20">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-2xl text-primary">
            Dealing with Water, Fire, or Toxic Mold?
          </h3>
          <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            Disaster mitigation must begin immediately to prevent long-term structural decay and serious health risks. Our certified team is ready to respond 24/7. We will coordinate directly with your insurance provider to handle all the details.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:2082444420">
              <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 animate-pulse" />
                24/7 Emergency Dispatch
              </Button>
            </a>
            <a href="tel:2082371938">
              <Button className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold px-8 py-6 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-secondary" />
                Call Office: (208) 237-1938
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
