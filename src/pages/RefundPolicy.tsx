import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">30-Day Money-Back Guarantee</h2>
            <p className="text-muted-foreground">
              At PureClean Pro, we stand behind the quality of our products. We offer a 30-day money-back 
              guarantee on all purchases. If you're not completely satisfied with your steam cleaner, you may 
              return it within 30 days of delivery for a full refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Eligibility for Refunds</h2>
            <p className="text-muted-foreground mb-3">To be eligible for a refund, your item must meet the following conditions:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>The product must be returned within 30 days of the delivery date</li>
              <li>The item must be in its original packaging with all accessories included</li>
              <li>The product must be in good condition with minimal signs of use</li>
              <li>You must provide proof of purchase (order number or receipt)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">How to Request a Refund</h2>
            <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
              <li>Contact our customer service team at support@purecleanpro.com with your order number</li>
              <li>Provide a brief explanation of why you're requesting a refund</li>
              <li>We'll provide you with a return shipping label and instructions</li>
              <li>Pack the item securely with all original accessories and packaging</li>
              <li>Ship the item back to us using the provided label</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Processing Your Refund</h2>
            <p className="text-muted-foreground mb-3">
              Once we receive your returned item, we will:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Inspect the product within 2-3 business days</li>
              <li>Send you an email confirmation once your return has been approved</li>
              <li>Process your refund to your original payment method within 5-7 business days</li>
              <li>The refund will appear in your account within 5-10 business days depending on your bank</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Shipping Costs</h2>
            <p className="text-muted-foreground">
              We provide a prepaid return shipping label for all returns within the United States. 
              For international returns, customers are responsible for return shipping costs. 
              Original shipping charges are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Exchanges</h2>
            <p className="text-muted-foreground">
              If you received a defective or damaged product, we'll gladly exchange it for a new one at no 
              additional cost. Please contact our customer service team immediately with photos of the damage, 
              and we'll expedite a replacement to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">2-Year Warranty</h2>
            <p className="text-muted-foreground">
              All PureClean Pro steam cleaners come with a 2-year manufacturer's warranty covering defects 
              in materials and workmanship. This warranty is separate from our 30-day money-back guarantee 
              and provides long-term protection for your investment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about our refund policy, please contact us at:
            </p>
            <ul className="list-none text-muted-foreground space-y-1 mt-2">
              <li><strong>Email:</strong> support@purecleanpro.com</li>
              <li><strong>Phone:</strong> 1-800-PURE-CLEAN</li>
              <li><strong>Hours:</strong> Monday-Friday, 9AM-6PM EST</li>
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

export default RefundPolicy;
