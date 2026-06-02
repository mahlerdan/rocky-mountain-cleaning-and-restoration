import React from "react";
import { Link } from "wouter";
import { Phone, Shield, ArrowRight, Star, CheckCircle, Clock, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { SERVICES_DATA, TESTIMONIALS_DATA } from "@/const";

import SEO from "@/components/SEO";

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="Home" 
        description="Pocatello's top contractor for 24/7 water damage, fire restoration, mold remediation, asbestos removal, and professional carpet cleaning." 
        path="/" 
      />
      {/* Hero Section - Asymmetric Tectonic Design */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 lg:py-32 topo-bg">
        {/* Abstract Geometric Background Blocks */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-15 lg:opacity-20 pointer-events-none">
          <div className="absolute right-[-10%] top-[-10%] w-[80%] h-[80%] bg-secondary rounded-full blur-3xl" />
          <div className="absolute right-[10%] bottom-[-10%] w-[60%] h-[60%] bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left - Text & CTA */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              24/7 Emergency Restoration Services
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
              Pocatello's Premier <br />
              <span className="text-secondary">Restoration & Cleaning</span> Specialists
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl font-body leading-relaxed">
              When disaster strikes, trust the certified experts. Since 2007, we've provided top-tier water damage, fire restoration, mold remediation, asbestos removal, and carpet cleaning in Pocatello, Chubbuck, and surrounding Idaho communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="tel:2082444420" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-7 text-lg rounded-lg shadow-lg flex items-center justify-center gap-3 transition-transform hover:-translate-y-1">
                  <Shield className="w-6 h-6 animate-pulse" />
                  24/7 Emergency: (208) 244-4420
                </Button>
              </a>
              <Link href="/services">
                <Button className="w-full sm:w-auto bg-transparent border-2 border-primary-foreground/20 hover:border-secondary hover:text-secondary text-primary-foreground font-semibold px-8 py-7 text-lg rounded-lg flex items-center justify-center gap-2">
                  Our Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Quick trust indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-primary-foreground/10 text-xs sm:text-sm font-body text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                <span>IICRC Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                <span>4.9★ (445+ Reviews)</span>
              </div>
            </div>
          </div>

          {/* Hero Right - Structural Graphic Frame (No Stock Images) */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-[450px] mx-auto">
              {/* Overlapping Solid Tectonic Cards representing Restoration & Pure Cleanliness */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-blue-900 to-primary-foreground/5 border-2 border-primary-foreground/10 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 topo-bg opacity-20" />
                
                {/* Geometric Abstract Water/Fire graphic */}
                <div className="absolute bottom-[-10%] left-[-10%] w-[80%] h-[80%] border-4 border-secondary/20 rounded-full" />
                <div className="absolute top-[20%] right-[-20%] w-[60%] h-[60%] border border-secondary/30 rounded-full" />
                
                {/* Center Content Badge */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8" />
                  </div>
                  <span className="font-display font-black text-4xl text-secondary">SINCE 2007</span>
                  <div className="h-0.5 w-20 bg-primary-foreground/20" />
                  <p className="text-sm text-primary-foreground/70 max-w-xs font-body">
                    Providing high-end residential and commercial damage mitigation and white glove cleaning services in Idaho.
                  </p>
                </div>
              </div>

              {/* Offset Decorative Border Frame */}
              <div className="absolute inset-0 border-2 border-secondary rounded-2xl translate-x-4 translate-y-4 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats Banner */}
      <section className="bg-secondary text-secondary-foreground py-6 border-y border-secondary/20">
        <div className="container flex flex-wrap justify-around items-center gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="font-display font-extrabold text-3xl">4.9★</span>
            <span className="text-xs font-semibold uppercase tracking-wider opacity-85">Google Rating (445+ Reviews)</span>
          </div>
          <div className="h-8 w-px bg-secondary-foreground/20 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="font-display font-extrabold text-3xl">19+</span>
            <span className="text-xs font-semibold uppercase tracking-wider opacity-85">Years Serving Pocatello</span>
          </div>
          <div className="h-8 w-px bg-secondary-foreground/20 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="font-display font-extrabold text-3xl">24/7</span>
            <span className="text-xs font-semibold uppercase tracking-wider opacity-85">Emergency Dispatch Response</span>
          </div>
          <div className="h-8 w-px bg-secondary-foreground/20 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="font-display font-extrabold text-3xl">100%</span>
            <span className="text-xs font-semibold uppercase tracking-wider opacity-85">Licensed, Bonded & Insured</span>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-20 bg-background">
        <div className="container space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">Our Capabilities</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight">
              Professional Restoration & Cleaning Services
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              We specialize in complex, high-stakes cleaning and damage mitigation. From hazardous asbestos removal to restoring fire-damaged homes, our team uses the most advanced equipment in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 6).map((service) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.id} 
                  className="group relative bg-card p-8 rounded-xl border border-border/60 hover:border-secondary shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    {/* Icon container */}
                    <div className="inline-flex p-3.5 bg-primary/5 rounded-lg text-primary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between">
                    <Link href={`/services#${service.id}`}>
                      <div className="text-sm font-bold text-primary hover:text-secondary inline-flex items-center gap-1 cursor-pointer">
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                    <span className="text-xs font-semibold text-muted-foreground/40 font-mono uppercase">
                      SEC-{service.id.slice(0, 3)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <Link href="/services">
              <Button className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 btn-hover-effect px-8 py-6">
                View All Cleaning & Restoration Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section - Asymmetrical Layout */}
      <section className="py-20 bg-muted/40 relative overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left - Structural Graphic Box */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative w-full aspect-[4/5] max-w-[400px] mx-auto">
              <div className="absolute inset-0 bg-primary rounded-xl shadow-2xl p-8 flex flex-col justify-between border border-primary-foreground/10">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary text-primary flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-primary-foreground">
                    Rocky Mountain Standard
                  </h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed font-body">
                    We don't just clean; we restore safety, health, and peace of mind. Every technician is fully certified, drug-tested, and background-checked.
                  </p>
                </div>
                <div className="border-t border-primary-foreground/15 pt-6 space-y-2">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-widest block">Emergency Hotline</span>
                  <a href="tel:2082444420" className="font-display font-black text-2xl text-red-400 hover:underline block">
                    (208) 244-4420
                  </a>
                </div>
              </div>
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-2 border-secondary rounded-xl translate-x-4 -translate-y-4 -z-10" />
            </div>
          </div>

          {/* Right - About Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">Our Story</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight">
              Serving Pocatello & Chubbuck Since 2007
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Rocky Mountain Cleaning & Restoration was founded with a single mission: to provide the highest standard of structural cleaning and emergency disaster mitigation in Southeast Idaho. We understand that water, fire, or mold damage can be incredibly stressful, which is why we've designed our service to be as seamless and supportive as possible.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Whether you need professional carpet cleaning with our state-of-the-art Rotovac rotary system, or full-scale mold and asbestos abatement, we bring specialized training, advanced equipment, and environmentally friendly solutions to every job.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-primary">Direct Insurance Billing</h4>
                  <p className="text-xs text-muted-foreground font-body">We coordinate directly with your insurance provider to make the process hassle-free.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-primary">Certified & Trained Crew</h4>
                  <p className="text-xs text-muted-foreground font-body">IICRC certified technicians equipped with the latest restoration technologies.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link href="/about">
                <Button className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 btn-hover-effect flex items-center gap-2">
                  Read Our Full Story
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">Client Feedback</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight">
              What Southeast Idaho Says About Us
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              With over 445 reviews and a 4.9-star rating on Google, we are proud to be Pocatello's most trusted restoration and cleaning contractor. Here is what our clients have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS_DATA.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-card p-8 rounded-xl border border-border/60 shadow-sm space-y-6 relative"
              >
                <div className="flex items-center gap-1 text-secondary">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground font-body text-base italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="pt-4 border-t border-border/40 flex justify-between items-center">
                  <div>
                    <cite className="font-display font-bold text-primary not-italic block">
                      {testimonial.author}
                    </cite>
                    <span className="text-xs text-muted-foreground font-body">
                      {testimonial.location}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Verified Customer
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden topo-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-blue-900 opacity-90" />
        <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-8">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Need Emergency Restoration or Deep Cleaning?
          </h2>
          <p className="text-lg text-primary-foreground/80 font-body leading-relaxed max-w-2xl mx-auto">
            Our dispatch team is standing by 24 hours a day, 7 days a week. For standard quotes, free estimates, or emergency water, fire, mold, and asbestos mitigation, call us now.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a href="tel:2082444420" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-7 text-lg rounded-lg shadow-lg flex items-center justify-center gap-3">
                <Shield className="w-6 h-6 animate-pulse" />
                24/7 Dispatch: (208) 244-4420
              </Button>
            </a>
            <a href="tel:2082371938" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-secondary text-secondary-foreground font-bold px-8 py-7 text-lg rounded-lg shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Office: (208) 237-1938
              </Button>
            </a>
          </div>
          
          <p className="text-xs text-primary-foreground/50 font-body">
            Free Estimates • Licensed, Insured, & Bonded • Direct Insurance Coordination
          </p>
        </div>
      </section>
    </Layout>
  );
}
