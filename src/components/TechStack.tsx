import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Responsive Design"],
      color: "bg-gradient-primary",
    },
    {
      category: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "bg-gradient-accent",
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "npm", "Vite", "RESTful APIs"],
      color: "bg-gradient-primary",
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Creative Thinking", "Attention to Detail"],
      color: "bg-gradient-accent",
    },
  ];

  return (
    <section id="tech-stack" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tech Stack
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 ${category.color}`} />
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm py-2 px-3"
                      >
                        {skill}
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

export default TechStack;
