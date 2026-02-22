import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({ texts, morphTime = 1, cooldownTime = 0.25, className, textClassName }: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);
  const animationFrameRef = React.useRef<number | null>(null);
  const filterId = React.useMemo(() => `threshold-${Math.random().toString(36).slice(2, 8)}`, []);

  React.useEffect(() => {
    if (!texts.length) return;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = texts[textIndex % texts.length];
      text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
    }

    const setMorph = (fraction: number) => {
      const text1 = text1Ref.current;
      const text2 = text2Ref.current;
      if (!text1 || !text2) return;

      const forward = Math.max(fraction, 0.0001);
      text2.style.filter = `blur(${Math.min(8 / forward - 8, 100)}px)`;
      text2.style.opacity = `${Math.pow(forward, 0.4) * 100}%`;

      const reverse = Math.max(1 - fraction, 0.0001);
      text1.style.filter = `blur(${Math.min(8 / reverse - 8, 100)}px)`;
      text1.style.opacity = `${Math.pow(reverse, 0.4) * 100}%`;
    };

    const doCooldown = () => {
      morph = 0;
      const text1 = text1Ref.current;
      const text2 = text2Ref.current;
      if (!text1 || !text2) return;

      text1.style.filter = "";
      text1.style.opacity = "100%";
      text2.style.filter = "";
      text2.style.opacity = "0%";
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    const animate = () => {
      animationFrameRef.current = window.requestAnimationFrame(animate);

      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex = (textIndex + 1) % texts.length;
          const text1 = text1Ref.current;
          const text2 = text2Ref.current;
          if (text1 && text2) {
            text1.textContent = texts[textIndex % texts.length];
            text2.textContent = texts[(textIndex + 1) % texts.length];
          }
        }
        doMorph();
      } else {
        doCooldown();
      }
    };

    animate();

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={cn("relative h-9 w-full", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id={filterId}>
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div className="flex items-center justify-center" style={{ filter: `url(#${filterId})` }}>
        <span
          ref={text1Ref}
          className={cn(
            "absolute inline-block select-none text-center text-2xl font-semibold tracking-wide text-foreground",
            textClassName
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inline-block select-none text-center text-2xl font-semibold tracking-wide text-foreground",
            textClassName
          )}
        />
      </div>
    </div>
  );
}
