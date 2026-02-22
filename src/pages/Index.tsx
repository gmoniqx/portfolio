import { useCallback, useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ChevronDown,
  Code2,
  Facebook,
  ExternalLink,
  Github,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  Palette,
  Phone,
  Send,
  Pencil,
} from "lucide-react";

type TabKey = "about" | "resume" | "portfolio" | "contact";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("about");
  const [showContacts, setShowContacts] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const updateScrollIndicator = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) {
      setShowScrollIndicator(false);
      return;
    }

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const hasScrollableContent = container.scrollHeight - container.clientHeight > 8;
    const isNearTop = container.scrollTop < 12;

    setShowScrollIndicator(isDesktop && hasScrollableContent && isNearTop);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollTo({ top: 0 });
    updateScrollIndicator();

    const resizeObserver = new ResizeObserver(() => updateScrollIndicator());
    resizeObserver.observe(container);

    window.addEventListener("resize", updateScrollIndicator);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScrollIndicator);
    };
  }, [activeTab, updateScrollIndicator]);

  const projects = [
    {
      title: "Hearts In Motion",
      description: "An intimate and poetic online space blending story, portfolio, and personal reflection.",
      image: "/images/hearts-in-motion.png",
      tags: ["React", "TypeScript", "Vite"],
      url: "https://heartinmotion.vercel.app/",
    },
    {
      title: "By Chi | Affiliator's Showcase",
      description: "A curated product showcase focused on clean presentation and accessibility.",
      image: "/images/bychi.png",
      tags: ["React", "TypeScript", "CSS"],
      url: "http://bychi.vercel.app",
    },
    {
      title: "Zentry",
      description: "A lightweight productivity project for note taking and daily task tracking.",
      image: "/images/zentry.png",
      tags: ["React", "TypeScript", "PWA"],
      url: "https://myzentry.vercel.app/",
    },
  ];

  const tabs: { key: TabKey; label: string }[] = [
    { key: "about", label: "About" },
    { key: "resume", label: "Resume" },
    { key: "portfolio", label: "Portfolio" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden bg-background text-foreground py-3 sm:py-6 lg:py-6">
      <div className="container max-w-6xl px-3 sm:px-4 lg:h-full">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[310px_1fr] items-start lg:h-full">
          <Card className="bg-card border-border rounded-2xl sm:rounded-[28px] shadow-md lg:sticky lg:top-0 soft-enter">
            <CardContent className="p-4 sm:p-6 lg:p-7">
              <div className="flex flex-col items-center text-center gap-4">
                <img
                  src="/images/profile.jpg"
                  alt="Gayle Monique"
                  className="w-28 h-28 lg:w-32 lg:h-32 rounded-[24px] object-cover border border-border"
                />
                <div>
                  <h1 className="text-2xl sm:text-[26px] leading-8 font-semibold">Gayle Monique</h1>
                  <Badge
                    variant="secondary"
                    className="mt-2 px-3 py-1 text-[11px] sm:text-xs font-normal bg-background/70 text-foreground/90 border border-border whitespace-nowrap"
                  >
                    Web & UI/UX Developer | BSCS Student
                  </Badge>
                </div>
              </div>

              <Button
                variant="ghost"
                className="w-full mt-5 lg:hidden border border-border"
                onClick={() => setShowContacts((prev) => !prev)}
              >
                Show Contacts
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showContacts ? "rotate-180" : ""}`} />
              </Button>

              <div className={`mt-6 space-y-4 ${showContacts ? "block" : "hidden lg:block"}`}>
                <Separator />
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-background border border-border flex items-center justify-center text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Email</p>
                    <a href="mailto:gayle@zentariph.com" className="text-sm break-all hover:text-primary transition-colors">
                      gayle@zentariph.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-background border border-border flex items-center justify-center text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Phone</p>
                    <p className="text-sm">+63 915 5932 495</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-background border border-border flex items-center justify-center text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Location</p>
                    <p className="text-sm">Quezon City, Metro Manila</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <a
                    href="https://instagram.com/gaylemonique_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/gmoniqx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://facebook.com/gaylemnq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative bg-card border-border rounded-2xl sm:rounded-[28px] shadow-md overflow-hidden soft-enter-delay soft-hover lg:h-full">
            <CardContent className="p-0 lg:h-full lg:flex lg:flex-col">
              <div className="flex justify-end border-b border-border/70 bg-background/30">
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-1 p-3 md:p-4 rounded-none sm:rounded-bl-2xl border-b sm:border-l sm:border-b border-border/80 bg-background/70 w-full sm:w-auto">
                  {tabs.map((tab) => (
                    <Button
                      key={tab.key}
                      size="sm"
                      variant="ghost"
                      className={
                        activeTab === tab.key
                          ? "h-10 justify-center text-sm text-primary bg-transparent hover:bg-transparent transition-colors duration-300"
                          : "h-10 justify-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                      }
                      onClick={() => setActiveTab(tab.key)}
                    >
                      {tab.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div
                ref={scrollContainerRef}
                onScroll={updateScrollIndicator}
                key={activeTab}
                className="p-4 sm:p-6 md:p-8 tab-switch-enter lg:flex-1 lg:overflow-y-auto no-scrollbar"
              >
                {activeTab === "about" && (
                  <div className="space-y-8">
                    <section>
                      <h2 className="text-2xl sm:text-3xl leading-8 font-semibold">About Me</h2>
                      <div className="h-1 w-12 bg-primary rounded-full mt-4 mb-4" />
                      <div className="space-y-3">
                        <p className="text-muted-foreground leading-7">
                          I am a junior student in the Computer Science department with a strong passion for web development and UI/UX design. I am eager to learn and contribute to innovative projects that enhance user experiences.
                        </p>
                        <p className="text-muted-foreground leading-7">
                          Currently, I am focusing on expanding my knowledge in full-stack development and exploring new technologies to create impactful and unique solutions.
                        </p>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-4">What I do</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { title: "UI/UX Design", icon: Palette, description: "I design intuitive, user-focused interfaces with clean visuals and seamless navigation to create engaging and accessible digital experiences." },
                          { title: "Web Development", icon: Code2, description: "I build responsive and high-performance web applications with clean code, seamless functionality, and user-friendly experiences across devices." },
                          { title: "Graphic Design", icon: Pencil, description: "I create visually compelling designs, branding assets, and layouts that communicate ideas clearly and leave a strong, memorable impact." },
                        ].map((item) => (
                          <div key={item.title} className="rounded-2xl border border-border bg-background/50 p-4">
                            <div className="flex items-start gap-3">
                              <div className="h-11 w-11 shrink-0 rounded-xl border border-primary/40 bg-background/70 flex items-center justify-center shadow-sm">
                                <item.icon className="h-5 w-5 text-primary" strokeWidth={1.9} />
                              </div>
                              <div>
                                <h4 className="font-medium">{item.title}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-4">Core Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {["React", "TypeScript", "Tailwind CSS", "JavaScript", "UI/UX", "Responsive Design", "Git", "Vite"].map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === "resume" && (
                  <div className="space-y-7">
                    <section>
                      <h2 className="text-2xl sm:text-3xl leading-8 font-semibold">Resume</h2>
                      <div className="h-1 w-12 bg-primary rounded-full mt-4 mb-4" />
                      <div className="space-y-4">
                        {[
                          {
                            school: "Our Lady of Perpetual Succor College",
                            detail: "Bachelor of Science in Computer Science",
                            year: "2023 - Present",
                          },
                          {
                            school: "Our Lady of Perpetual Succor College",
                            detail: "Senior High School • Arts and Design",
                            year: "2021 - 2023",
                          },
                          {
                            school: "Jose P. Laurel Sr. High School",
                            detail: "Junior High School",
                            year: "2017 - 2021",
                          },
                        ].map((item) => (
                          <div key={item.school + item.year} className="flex gap-3">
                            <GraduationCap className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <h3 className="font-medium">{item.school}</h3>
                              <p className="text-sm text-muted-foreground">{item.detail}</p>
                              <p className="text-xs text-primary mt-1">{item.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-4">Clients</h3>
                      <div className="rounded-2xl border border-border bg-background/50 p-5 text-sm text-muted-foreground">
                        Coming soon
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === "portfolio" && (
                  <div className="space-y-6">
                    <section>
                      <h2 className="text-2xl sm:text-3xl leading-8 font-semibold">Portfolio</h2>
                      <div className="h-1 w-12 bg-primary rounded-full mt-4 mb-4" />
                      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {projects.map((project) => (
                          <div key={project.title} className="overflow-hidden rounded-2xl border border-border bg-background/50">
                            <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" />
                            <div className="p-4 space-y-3">
                              <h3 className="font-semibold">{project.title}</h3>
                              <p className="text-sm text-muted-foreground">{project.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                              >
                                View Project <ExternalLink className="h-4 w-4" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === "contact" && (
                  <div className="space-y-6">
                    <section>
                      <h2 className="text-2xl sm:text-3xl leading-8 font-semibold">Contact</h2>
                      <div className="h-1 w-12 bg-primary rounded-full mt-4 mb-4" />
                      <div className="space-y-5">
                        <div className="rounded-2xl border border-border bg-background/50 p-2 overflow-hidden">
                          <div className="h-[190px] sm:h-[220px] md:h-[260px] rounded-xl overflow-hidden border border-border/70">
                            <iframe
                              title="Map"
                              src="https://maps.google.com/maps?q=Quezon%20City%2C%20Metro%20Manila&t=&z=12&ie=UTF8&iwloc=&output=embed"
                              className="w-full h-full"
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl sm:text-2xl font-semibold">Contact Form</h3>
                        </div>

                        <form
                          className="space-y-4"
                          onSubmit={(event) => {
                            event.preventDefault();
                            window.location.href = "https://gayle.zentariph.com";
                          }}
                        >
                          <div className="grid sm:grid-cols-2 gap-4">
                            <input
                              type="text"
                              placeholder="Full name"
                              className="h-12 rounded-2xl border border-border bg-background/50 px-4 text-base sm:text-sm outline-none focus:border-primary transition-colors"
                            />
                            <input
                              type="email"
                              placeholder="Email address"
                              className="h-12 rounded-2xl border border-border bg-background/50 px-4 text-base sm:text-sm outline-none focus:border-primary transition-colors"
                            />
                          </div>

                          <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-base sm:text-sm outline-none focus:border-primary transition-colors resize-none"
                          />

                          <div className="flex justify-stretch sm:justify-end">
                            <Button
                              type="submit"
                              variant="secondary"
                              className="w-full sm:w-auto rounded-2xl border border-border bg-background/60 text-primary hover:bg-background/80"
                            >
                              <Send className="h-4 w-4 mr-2" />
                              Send Message
                            </Button>
                          </div>
                        </form>
                      </div>
                    </section>
                  </div>
                )}
              </div>

              {showScrollIndicator && (
                <div className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none opacity-80">
                  <div className="w-5 h-9 rounded-full border-2 border-primary/50 flex items-start justify-center pt-2">
                    <div className="w-[2px] h-2 rounded-full bg-primary animate-scroll-down" />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
