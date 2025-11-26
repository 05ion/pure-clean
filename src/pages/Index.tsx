import { ShoppingCart, Check, Star, Shield, Zap, Droplets, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import AnnouncementMarquee from "@/components/AnnouncementMarquee";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <AnnouncementMarquee />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center max-w-7xl mx-auto">
            {/* Product Images */}
            <div className="w-full">
              <ProductCarousel />
              
              {/* Trust Signals - Moved Here */}
              <div className="flex items-center gap-2 mt-4 md:mt-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">
                  <strong className="text-foreground">4.9/5</strong> from 2,847 verified customers
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4 md:space-y-6 w-full">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary text-primary-foreground text-xs md:text-sm">100% Chemical-Free</Badge>
                <Badge className="bg-secondary text-secondary-foreground text-xs md:text-sm">Limited Time Offer</Badge>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Professional Steam Cleaning
                <span className="text-primary block mt-2">For Your Healthiest Home Yet</span>
              </h1>

              <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                Imagine walking into a spotless home every day—without the guilt of harsh chemicals around your kids or pets. 
                PureClean Pro transforms cleaning from a dreaded chore into effortless satisfaction. Watch years of grime vanish 
                in seconds with pure steam power. Your family deserves a cleaner home and a healthier life.
              </p>

              {/* Key Features List */}
              <div className="space-y-3">
                {[
                  "1800W Professional Power - 230°F Steam",
                  "Chemical-Free Cleaning - 100% Safe for Family",
                  "1.5L Large Tank - Extended Cleaning Sessions",
                  "15+ Versatile Attachments Included",
                  "30-Day Money-Back Guarantee"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="pt-6 border-t border-border">
                <div className="flex flex-col items-start gap-1 md:flex-row md:items-baseline md:gap-3 mb-2">
                  <span className="text-3xl md:text-5xl font-bold text-primary">$119.99</span>
                  <span className="text-lg md:text-2xl text-muted-foreground line-through">$199.99</span>
                  <Badge variant="destructive" className="text-sm md:text-base">40% OFF</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Free shipping • 2-year warranty included</p>
              </div>

              {/* CTA Button */}
              <div>
                <Button size="lg" className="w-full text-base md:text-lg h-11 md:h-14 shadow-lg">
                  <ShoppingCart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Why Families Choose <span className="text-primary">PureClean Pro</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">100% Safe & Natural</h3>
                  <p className="text-muted-foreground">
                    No harsh chemicals, no toxic fumes. Just pure steam that's completely safe 
                    for your children, pets, and the entire family. Peace of mind in every clean.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Professional Results</h3>
                  <p className="text-muted-foreground">
                    1800W of pure power delivers 230°F steam that penetrates deep, dissolving 
                    grease, grime, and bacteria. See the difference in minutes, not hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Effortlessly Easy</h3>
                  <p className="text-muted-foreground">
                    Lockable continuous steam, 1.5L capacity for extended use, and lightweight 
                    portability. Clean your entire home without the hassle of constant refills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Unmatched Performance
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Professional-grade specifications that deliver results you can see and trust.
            </p>

            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card className="text-center p-6 border-primary/20">
                <Zap className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">1800W</div>
                <div className="text-sm text-muted-foreground">Power Output</div>
              </Card>

              <Card className="text-center p-6 border-primary/20">
                <Droplets className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">4.5 Bar</div>
                <div className="text-sm text-muted-foreground">Steam Pressure</div>
              </Card>

              <Card className="text-center p-6 border-primary/20">
                <Clock className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">5 Min</div>
                <div className="text-sm text-muted-foreground">Heat-Up Time</div>
              </Card>

              <Card className="text-center p-6 border-primary/20">
                <Heart className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">1.5L</div>
                <div className="text-sm text-muted-foreground">Tank Capacity</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-secondary text-secondary" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Our Customers Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Sarah M.",
                  text: "Finally, a cleaner I trust around my kids! The steam power is incredible, and I love that it's completely chemical-free. Worth every penny!",
                  rating: 5
                },
                {
                  name: "Michael T.",
                  text: "I was skeptical at first, but the before and after results speak for themselves. My kitchen has never been this clean. Highly recommend!",
                  rating: 5
                },
                {
                  name: "Jennifer L.",
                  text: "As a pet owner, this is a game-changer. No harsh smells, just pure cleaning power. My dog can run around right after I clean!",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-primary-foreground text-foreground">
                  <CardContent className="pt-6">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Is steam cleaning really as effective as chemical cleaners?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! Our 230°F steam penetrates surfaces and kills 99.9% of bacteria naturally. 
                  Many customers report even better results than traditional chemical cleaners, plus it's 
                  completely safe for your family and pets.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How long does the water tank last?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The 1.5L tank provides approximately 45-60 minutes of continuous cleaning, 
                  which is enough to clean most homes in one session. Refilling is quick and easy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What surfaces can I clean with it?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  PureClean Pro works on virtually all surfaces: tile, grout, countertops, appliances, 
                  windows, upholstery, carpets, and more. The 15+ attachments ensure you have the right 
                  tool for every job.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What if I'm not satisfied with my purchase?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer a 30-day money-back guarantee. If you're not completely satisfied, 
                  return it for a full refund—no questions asked. We also include a 2-year warranty 
                  for complete peace of mind.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How long does it take to heat up?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Just 5 minutes! That's one of the fastest heat-up times in the industry. 
                  You'll be cleaning in no time.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Cleaning Routine?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join thousands of families enjoying safer, more effective cleaning. 
              Limited time 40% discount won't last long!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg h-14 px-8">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Order Now - Save 40%
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/80">
              ✓ Free Shipping  ✓ 30-Day Guarantee  ✓ 2-Year Warranty
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
