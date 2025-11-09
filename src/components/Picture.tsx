import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Instagram, Github, Download, ChevronDown } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const Picture = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-8"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Two Column Layout: Left (Picture + Education) | Right (About) */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            
            {/* Left Column: Picture and Education */}
            <div className="space-y-4 animate-fade-in">
              {/* Picture and Name */}
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary shadow-glow hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20 mix-blend-overlay" />
                  <img
                    src="/images/profile.jpg"
                    alt="Gayle Monique R. Florencio"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 ring-2 ring-primary/20 ring-offset-4 ring-offset-background rounded-full" />
                </div>
                
                <div className="text-center lg:text-left space-y-2">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground hover:text-primary transition-colors duration-300 break-words">
                    Gayle Monique R. Florencio
                  </h1>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 flex-wrap">
                    <h2 className="text-base sm:text-lg text-muted-foreground">
                      BSCS Student | Web & UI/UX Developer
                    </h2>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="opacity-50 cursor-red transition-all duration-300 text-xs sm:text-sm"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Resume
                      </Button>
                      <ModeToggle />
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              <Separator className="my-3" />

              {/* Education Section */}
              <div className="space-y-3" id="education">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1 text-center lg:text-left">
                    Education
                  </h2>
                  <div className="w-16 h-1 bg-gradient-primary mb-2 mx-auto lg:mx-0" />
                </div>
                
                {/* Compact Timeline */}
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-border" />
                  
                  {/* Timeline items */}
                  <div className="space-y-3">
                    <div className="relative pl-6 group hover:translate-x-1 transition-transform duration-300">
                      <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 bg-primary border-primary group-hover:scale-125 transition-all duration-300" />
                      <div className="space-y-0.5">
                        <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          Our Lady of Perpetual Succor College
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Bachelor of Science in Computer Science
                        </p>
                        <p className="text-xs text-muted-foreground">
                          2023 - present
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative pl-6 group hover:translate-x-1 transition-transform duration-300">
                      <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 bg-background border-border group-hover:bg-primary group-hover:border-primary group-hover:scale-125 transition-all duration-300" />
                      <div className="space-y-0.5">
                        <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          Our Lady of Perpetual Succor College
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Senior High School | Arts and Design - Media and Visual Arts
                        </p>
                        <p className="text-xs text-muted-foreground">
                          2021 - 2023
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative pl-6 group hover:translate-x-1 transition-transform duration-300">
                      <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 bg-background border-border group-hover:bg-primary group-hover:border-primary group-hover:scale-125 transition-all duration-300" />
                      <div className="space-y-0.5">
                        <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          Jose P. Laurel Sr. High School
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          High School
                        </p>
                        <p className="text-xs text-muted-foreground">
                          2017 - 2021
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: About */}
            <div className="space-y-4 animate-fade-in-up lg:pt-0" style={{ animationDelay: '0.2s' }}>
              <div id="about">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1 text-center lg:text-left">
                    About Me
                  </h2>
                  <div className="w-16 h-1 bg-gradient-primary mb-2 mx-auto lg:mx-0" />
                </div>
                
                <div className="space-y-2 text-center lg:text-left">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    A Junior in college under Computer Science department, with a passion for web development and UI/UX design. Eager to learn and contribute to innovative projects that enhance user experiences.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Right now, I'm focusing on expanding my knowledge in full-stack development and exploring new technologies to create impactful unique solutions.
                  </p>
                </div>
              </div>

              {/* Separator */}
              <Separator className="my-3" />

              {/* Connect Section */}
              <div id="connect" className="space-y-3">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1 text-center lg:text-left">
                    Connect
                  </h2>
                  <div className="w-16 h-1 bg-gradient-primary mb-2 mx-auto lg:mx-0" />
                </div>
                
                <div className="grid gap-3">
                  <a
                    href="mailto:gaylemonique21@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/50 cursor-pointer">
                      <CardContent className="p-3 flex items-center gap-3">
                        <div className="p-2 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <Mail className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            Email
                          </h3>
                          <p className="text-xs text-muted-foreground truncate">
                            gaylemonique21@gmail.com
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                  
                  <a
                    href="https://instagram.com/gaylemonique_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/50 cursor-pointer">
                      <CardContent className="p-3 flex items-center gap-3">
                        <div className="p-2 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <Instagram className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            Instagram
                          </h3>
                          <p className="text-xs text-muted-foreground truncate">
                            @gaylemonique_
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                  
                  <a
                    href="https://github.com/gmoniqx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/50 cursor-pointer">
                      <CardContent className="p-3 flex items-center gap-3">
                        <div className="p-2 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <Github className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            GitHub
                          </h3>
                          <p className="text-xs text-muted-foreground truncate">
                            github.com/gmoniqx
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Mouse Icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-all duration-300 animate-fade-in-up">
        <div className="w-5 h-8 border-2 border-primary/60 rounded-full flex justify-center pt-1.5 hover:border-primary transition-colors">
          <div className="w-0.5 h-1.5 bg-primary rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default Picture;
