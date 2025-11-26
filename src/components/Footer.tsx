import { Link } from "react-router-dom";
import { Leaf, Shield, Truck, Award } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-primary-light/30">
          <div className="flex flex-col items-center text-center">
            <Shield className="h-10 w-10 mb-3 text-secondary" />
            <h3 className="font-semibold mb-1">30-Day Guarantee</h3>
            <p className="text-sm text-primary-foreground/80">Risk-free purchase</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Truck className="h-10 w-10 mb-3 text-secondary" />
            <h3 className="font-semibold mb-1">Free Shipping</h3>
            <p className="text-sm text-primary-foreground/80">On all orders</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="h-10 w-10 mb-3 text-secondary" />
            <h3 className="font-semibold mb-1">2-Year Warranty</h3>
            <p className="text-sm text-primary-foreground/80">Full coverage</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Leaf className="h-10 w-10 mb-3 text-secondary" />
            <h3 className="font-semibold mb-1">Eco-Friendly</h3>
            <p className="text-sm text-primary-foreground/80">100% chemical-free</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
                <Leaf className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">PureClean Pro</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Professional-grade steam cleaning technology that's safe for your family and the environment. 
              Transform your home cleaning with the power of pure steam.
            </p>
          </div>

          {/* Quick Links */}
          

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link to="/refund-policy" className="hover:text-primary-foreground transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-primary-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-light/30 text-center text-primary-foreground/80">
          <p>&copy; 2024 PureClean Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;