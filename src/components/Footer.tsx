import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="mb-2 sm:mb-4">
            <p className="text-base sm:text-lg italic text-foreground/80 font-medium px-4">
              "Everything you think is possible, can become something more."
            </p>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
