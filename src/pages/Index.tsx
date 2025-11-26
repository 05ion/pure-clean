import { ShoppingCart, Check, Star, Shield, Award, Sparkles, TrendingUp, CheckCircle, Heart, Clock, Droplets, Home, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import AnnouncementMarquee from "@/components/AnnouncementMarquee";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <AnnouncementMarquee />
      <Header />
      
      <main>
        {/* Hero Section - Premium Layout */}
        <section className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start max-w-7xl mx-auto">
            {/* Product Images */}
            <div className="w-full space-y-6">
              <ProductCarousel />
              
              {/* Trust Badge */}
              <div className="flex items-center justify-between px-4 py-4 bg-muted rounded-lg border border-border">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />)}
                      </div>
                      <span className="text-sm font-semibold text-foreground">4.9</span>
                    </div>
                    <p className="text-xs text-muted-foreground">2,847 verified reviews</p>
                  </div>
                </div>
                <Shield className="w-5 h-5 text-primary" />
              </div>
            </div>

            {/* Product Info - Refined Typography */}
            <div className="space-y-8 w-full">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary/20 text-primary px-4 py-1">
                  Professional Series
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground leading-[1.1] tracking-tight">
                  PureClean Pro
                  <span className="block md:text-4xl lg:text-5xl font-sans text-lg mt-0 text-slate-500 mb-[25px]">
                    Steam cleaning system
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Experience the future of home cleaning with professional-grade steam technology. 
                  Chemical-free, powerful, and designed for the modern home.
                </p>
              </div>

              {/* Key Features - Elegant List */}
              <div className="space-y-3 py-6 border-y border-border">
                {[
                  { text: "Create safe environment for kids and pets to play on immediately", icon: Heart },
                  { text: "Clean your entire home without stopping to refill", icon: Clock },
                  { text: "Eliminate allergens and bacteria without harsh chemicals", icon: Droplets },
                  { text: "Transform every surface from floors to upholstery", icon: Home },
                  { text: "Protected investment with worry-free 2-year coverage", icon: ShieldCheck }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature.text}</span>
                    </div>
                  );
                })}</div>

              {/* Pricing - Premium Style */}
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-light text-foreground">$119</span>
                  <span className="text-2xl text-muted-foreground line-through font-light">$199</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-primary" />
                    Free Express Shipping
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-primary" />
                    30-Day Returns
                  </span>
                </div>
              </div>

              {/* CTA Button - Premium */}
              <Button size="lg" className="w-full h-14 text-base font-normal shadow-elegant hover:shadow-premium transition-all">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                Secure checkout • 2-year warranty included
              </p>

              {/* Common Objections */}
              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <p className="text-xs text-muted-foreground text-center mb-3">Common concerns answered:</p>
                {[
                  { question: "Does it really clean tough stains?", answer: "Yes - 230°F steam dissolves even baked-on grime" },
                  { question: "Is it complicated to use?", answer: "No - just fill with water and it's ready in 3 minutes" },
                  { question: "Will it damage my surfaces?", answer: "No - safe for all sealed surfaces and fabrics" },
                  { question: "Does steam actually sanitize?", answer: "Yes - lab-tested to eliminate 99.9% of bacteria" }
                ].map((item, index) => (
                  <div key={index} className="text-left">
                    <p className="text-sm text-foreground font-medium">{item.question}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="border-y border-border bg-gradient-to-r from-muted/30 to-muted/10 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[{
              icon: Shield,
              label: "Certified Safe",
              desc: "EPA Approved"
            }, {
              icon: Award,
              label: "Award Winning",
              desc: "2024 Design Excellence"
            }, {
              icon: TrendingUp,
              label: "99.9% Effective",
              desc: "Lab Tested"
            }, {
              icon: Sparkles,
              label: "Premium Quality",
              desc: "2-Year Warranty"
            }].map((item, index) => <div key={index} className="text-center space-y-2">
                  <item.icon className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold text-foreground">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Benefits Section - Refined */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4">
                Engineered for Excellence
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                Every detail designed to deliver professional results in your home.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-border shadow-elegant hover:shadow-premium transition-all">
                <CardContent className="pt-8 pb-8 px-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Family Safe</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pure steam technology eliminates the need for harsh chemicals, 
                    creating a healthier environment for your entire family.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant hover:shadow-premium transition-all">
                <CardContent className="pt-8 pb-8 px-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center">
                    <Sparkles className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Professional Power</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    1800W of precision-engineered power delivers 230°F steam that 
                    penetrates deep to dissolve even the toughest grime.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant hover:shadow-premium transition-all">
                <CardContent className="pt-8 pb-8 px-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Built to Last</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Premium materials and meticulous craftsmanship ensure years 
                    of reliable performance, backed by our comprehensive warranty.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4">
                Technical Specifications
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                Professional-grade performance in every detail.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[{
              value: "1800W",
              label: "Power Output"
            }, {
              value: "230°F",
              label: "Steam Temperature"
            }, {
              value: "4.5 Bar",
              label: "Pressure"
            }, {
              value: "1.5L",
              label: "Tank Capacity"
            }].map((spec, index) => <Card key={index} className="text-center p-6 border-border bg-background shadow-elegant">
                  <div className="text-4xl font-light text-primary mb-2">{spec.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{spec.label}</div>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Testimonials - Elegant */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-accent text-accent" />)}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4">
                Customer Reviews
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                Trusted by thousands of discerning homeowners.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[{
              name: "Sarah Mitchell",
              title: "Verified Purchase",
              text: "The quality is exceptional. Finally, a cleaning solution that matches my standards without compromising on safety.",
              rating: 5
            }, {
              name: "Michael Chen",
              title: "Verified Purchase",
              text: "Professional-grade performance at home. The attention to detail in both design and function is remarkable.",
              rating: 5
            }, {
              name: "Jennifer Adams",
              title: "Verified Purchase",
              text: "An investment worth making. The chemical-free approach gives me complete peace of mind with my family.",
              rating: 5
            }].map((testimonial, index) => <Card key={index} className="border-border shadow-elegant">
                  <CardContent className="pt-8 pb-8 px-6 space-y-4">
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4">
                Common Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-background shadow-elegant">
                <AccordionTrigger className="text-left hover:no-underline">
                  How does steam cleaning compare to traditional methods?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Steam cleaning at 230°F naturally sanitizes surfaces, eliminating 99.9% of bacteria 
                  without chemicals. Independent testing shows superior results compared to traditional 
                  cleaning methods, with the added benefit of being completely safe for your home.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-background shadow-elegant">
                <AccordionTrigger className="text-left hover:no-underline">
                  What is included with my purchase?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Your PureClean Pro includes the main unit, 15 professional-grade attachments for 
                  various surfaces, user manual, and a 2-year comprehensive warranty. All items are 
                  carefully packaged for safe delivery.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-background shadow-elegant">
                <AccordionTrigger className="text-left hover:no-underline">
                  What surfaces can be cleaned?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The PureClean Pro safely cleans tile, grout, sealed hardwood, countertops, 
                  appliances, windows, upholstery, and more. The included attachments ensure 
                  you have the right tool for every surface in your home.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-background shadow-elegant">
                <AccordionTrigger className="text-left hover:no-underline">
                  What is your return policy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer a 30-day satisfaction guarantee. If the PureClean Pro doesn't meet 
                  your expectations, return it for a full refund. Additionally, every unit includes 
                  a 2-year warranty covering manufacturing defects.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA - Premium */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
              Experience Professional Cleaning
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80 font-light">
              Join thousands of homeowners who have elevated their cleaning standards.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-10 text-base shadow-premium">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Order Now
            </Button>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Free Shipping
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                30-Day Returns
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                2-Year Warranty
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Index;