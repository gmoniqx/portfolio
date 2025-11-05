import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ExternalLink, Instagram } from "lucide-react";

const Connect = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "gaylemonique21@gmail.com",
      href: "mailto:gaylemonique21@gmail.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "gaylemonique_",
      href: "https://instagram.com/gaylemonique_",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/lelemonik",
      href: "https://github.com/lelemonik",
    },
  ];

  return (
    <section id="connect" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" /> 
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform">
                    <method.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {method.label}
                  </h3>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-hero text-center p-8 sm:p-12 border-0 animate-fade-in">
            <CardContent className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Let's work together!
              </h3>
              <Button
                size="lg"
                variant="secondary"
                className="mt-4"
                asChild
              >
                <a href="mailto:your.email@example.com">
                  Get In Touch
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Connect;
