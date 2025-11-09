import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML/CSS" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Responsive Design" }
      ],
      color: "bg-gradient-primary",
    },
    {
      category: "UI/UX Design",
      skills: [
        { name: "Figma", label: "currently learning" }
      ],
      color: "bg-gradient-accent",
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "npm" },
        { name: "Vite" }
      ],
      color: "bg-gradient-primary",
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem Solving" },
        { name: "Team Collaboration" },
        { name: "Communication" },
        { name: "Time Management" },
        { name: "Creative Thinking" },
        { name: "Attention to Detail" }
      ],
      color: "bg-gradient-accent",
    },
  ];

  return (
    <div id="tech-stack" className="h-full">
      <div className="text-center mb-10 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Tech Stack
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4" />
        <p className="text-lg text-muted-foreground">
          Technologies and tools I work with
        </p>
      </div>

      <div className="grid gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up border-border group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-2 ${category.color} group-hover:h-3 transition-all duration-500`} />
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm py-2 px-3 hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default flex items-center gap-1.5"
                      >
                        {skill.name}
                        {skill.label && (
                          <span className="text-[10px] bg-primary/20 px-1.5 py-0.5 rounded-full">
                            {skill.label}
                          </span>
                        )}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default TechStack;
