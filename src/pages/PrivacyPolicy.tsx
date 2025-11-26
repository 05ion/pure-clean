import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Commitment to Privacy</h2>
            <p className="text-muted-foreground">
              At PureClean Pro, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website and purchase our products. 
              Please read this policy carefully to understand our practices regarding your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-2 text-primary-light">Personal Information</h3>
            <p className="text-muted-foreground mb-3">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Name and contact information (email address, phone number, shipping address)</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Order history and purchase preferences</li>
              <li>Customer service correspondence and feedback</li>
              <li>Product reviews and testimonials</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-primary-light">Automatically Collected Information</h3>
            <p className="text-muted-foreground mb-3">
              When you visit our website, we automatically collect:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your purchase and provide customer support</li>
              <li>Send you promotional materials and special offers (with your consent)</li>
              <li>Improve our website, products, and services</li>
              <li>Detect and prevent fraud and security breaches</li>
              <li>Comply with legal obligations</li>
              <li>Analyze website traffic and user behavior to enhance user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-3">
              We do not sell or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our business 
              (shipping carriers, payment processors, email service providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, or legal process</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly agree to share your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground mb-3">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Deliver targeted advertising</li>
              <li>Analyze website performance and user engagement</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              You can control cookies through your browser settings. However, disabling cookies may limit your 
              ability to use certain features of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li>SSL encryption for data transmission</li>
              <li>Secure payment processing through PCI-compliant providers</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication procedures</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              While we strive to protect your personal information, no method of transmission over the internet 
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-3">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails at any time</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              To exercise these rights, please contact us at privacy@purecleanpro.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our website and services are not intended for children under the age of 13. We do not knowingly 
              collect personal information from children under 13. If we become aware that we have collected 
              personal information from a child under 13, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">International Data Transfers</h2>
            <p className="text-muted-foreground">
              Your information may be transferred to and processed in countries other than your own. We ensure 
              that appropriate safeguards are in place to protect your information in accordance with this 
              Privacy Policy and applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
              requirements. We will notify you of material changes by posting the updated policy on our website 
              with a new "Last Updated" date. Your continued use of our website after such changes constitutes 
              your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <ul className="list-none text-muted-foreground space-y-1 mt-2">
              <li><strong>Email:</strong> privacy@purecleanpro.com</li>
              <li><strong>Phone:</strong> 1-800-PURE-CLEAN</li>
              <li><strong>Address:</strong> PureClean Pro Privacy Team, [Your Business Address]</li>
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

export default PrivacyPolicy;
