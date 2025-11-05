import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  // Template project structure - easy to replace with real projects
  const projects = [
    {
      title: "Hearts In Motion",
      description: "A school finals project showcasing love and ethics.",
      image: "/images/hearts-in-motion.png",
      tags: ["React", "TypeScript", "Tailwind"],
      demoUrl: "https://heartinmotion.vercel.app/",
    },
    {
      title: "By Chi | Affiliator's Showcase",
      description: "A personal project showcasing a curated selection of products.",
      image: "/images/bychi.png",
      tags: ["Next.js", "UI/UX", "Design"],
      demoUrl: "http://bychi.vercel.app",
    },
    {
      title: "Project Title 3",
      description: "Your third project showcase. Emphasize unique features, creative solutions, or innovative approaches you took.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
      tags: ["JavaScript", "API", "CSS"],
      demoUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my work showcasing my skills in web development and design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
