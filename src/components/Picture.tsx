const Picture = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* 1x1 Picture */}
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-glow">
              <img
                src="/images/profile.jpg"
                alt="Gayle Monique R. Florencio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Gayle
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground">
              Web & UI/UX Developer
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            -
          </p>
        </div>
      </div>
    </section>
  );
};

export default Picture;
