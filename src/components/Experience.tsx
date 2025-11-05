import { title } from "process";


const Education = () => {
  const education = [
    {
      title: "OUR LADY OF PERPETUAL SUCCOR COLLEGE",
      company: "Bachelor of Science in Computer Science",
      period: "2023 - present",
      type: "education",
    },
    {
      title: "OUR LADY OF PERPETUAL SUCCOR COLLEGE",
      company: "Arts and Design | Media and Visual Arts",
      period: "2021 - 2023",
      type: "education",
    },
    {
      title: "JOSE P. LAUREL SR. HIGH SCHOOL",
      company: "High School Diploma",
      period: "2017 - 2021",
      type: "education",
    },
    {
      title: "PURA V. KALAW ELEMENTARY SCHOOL",
      company: "Elementary Diploma",
      period: "2014 - 2017",
      type: "education",
    },
    {
      title: "HOLY ANGELS MONTESSORI SCHOOL",
      company: "Elementary",
      period: "Year - Year",
      type: "education",
    }
  ];

  return (
    <section id="education" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Educational Background
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground mb-8">
              My educational background and professional experience
            </p>
          </div>

          {/* Timeline */}
          <div className="relative animate-fade-in">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-border" />
            
            {/* Timeline items */}
            <div className="space-y-8">
              {education.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline dot - first item (latest) is filled/lit up */}
                  <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 ${
                    index === 0 ? 'bg-primary border-primary' : 'bg-background border-border'
                  }`} />
                  
                  {/* Content */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
