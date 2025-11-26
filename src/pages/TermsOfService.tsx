import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using PureClean Pro's website and purchasing our products, you agree to be bound 
              by these Terms of Service. If you do not agree to these terms, please do not use our website or 
              purchase our products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Product Information</h2>
            <p className="text-muted-foreground">
              We strive to provide accurate product descriptions, specifications, and images. However, we do not 
              warrant that product descriptions or other content is accurate, complete, reliable, current, or 
              error-free. If a product we offer is not as described, your sole remedy is to return it in 
              accordance with our Refund Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Pricing and Payment</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>All prices are in USD and are subject to change without notice</li>
              <li>We accept major credit cards, PayPal, and other payment methods as indicated at checkout</li>
              <li>Payment must be received in full before products are shipped</li>
              <li>We reserve the right to refuse or cancel any order at our discretion</li>
              <li>Promotional offers and discounts cannot be combined unless explicitly stated</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Shipping and Delivery</h2>
            <p className="text-muted-foreground mb-3">
              We offer free shipping on all orders within the contiguous United States. Shipping terms include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Standard delivery: 5-7 business days</li>
              <li>Expedited shipping available at checkout for an additional fee</li>
              <li>International shipping: Rates and delivery times vary by location</li>
              <li>We are not responsible for delays caused by shipping carriers or customs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Product Use and Safety</h2>
            <p className="text-muted-foreground mb-3">
              The PureClean Pro steam cleaner is designed for household use only. Users must:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Read and follow all instructions in the user manual before use</li>
              <li>Use the product only for its intended purposes</li>
              <li>Keep the device out of reach of children when in use</li>
              <li>Exercise caution as steam can cause burns</li>
              <li>Never attempt to modify or repair the product yourself</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Warranty and Limitation of Liability</h2>
            <p className="text-muted-foreground mb-3">
              PureClean Pro products come with a 2-year limited warranty covering defects in materials and 
              workmanship. This warranty does not cover:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Damage caused by misuse, abuse, or improper maintenance</li>
              <li>Normal wear and tear</li>
              <li>Unauthorized modifications or repairs</li>
              <li>Damage from accidents, fire, or natural disasters</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              To the fullest extent permitted by law, PureClean Pro shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages arising from the use of our products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on this website, including text, images, logos, and product designs, is the property 
              of PureClean Pro and is protected by copyright, trademark, and other intellectual property laws. 
              You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Customer Reviews and Testimonials</h2>
            <p className="text-muted-foreground">
              By submitting a review or testimonial, you grant PureClean Pro the right to use, reproduce, and 
              display your content in our marketing materials. We reserve the right to moderate and remove 
              reviews that contain inappropriate content, false information, or violate our guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Privacy</h2>
            <p className="text-muted-foreground">
              Your use of our website and services is also governed by our Privacy Policy. Please review our 
              Privacy Policy to understand how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms of Service are governed by and construed in accordance with the laws of the United 
              States and the State of [Your State], without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective 
              immediately upon posting to our website. Your continued use of our website and products after 
              changes are posted constitutes your acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, please contact us at:
            </p>
            <ul className="list-none text-muted-foreground space-y-1 mt-2">
              <li><strong>Email:</strong> legal@purecleanpro.com</li>
              <li><strong>Phone:</strong> 1-800-PURE-CLEAN</li>
              <li><strong>Address:</strong> PureClean Pro, [Your Business Address]</li>
            </ul>
          </section>

          <section className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground italic">
              Last updated: November 2024
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
