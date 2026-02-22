import { GooeyText } from "@/components/ui/gooey-text-morphing";

interface SplashLoaderProps {
  exiting: boolean;
}

export function SplashLoader({ exiting }: SplashLoaderProps) {
  return (
    <div
      className={`fixed inset-0 z-[120] flex items-center justify-center bg-background transition-all duration-500 ${
        exiting ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100"
      }`}
      aria-hidden="true"
    >
      <GooeyText
        texts={["Loading"]}
        morphTime={3.1}
        cooldownTime={1.1}
        className="mx-auto h-16"
        textClassName="text-3xl md:text-5xl font-medium tracking-normal text-primary/95"
      />
    </div>
  );
}
