import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  value: string;
  icon: LucideIcon;
}

interface TubelightNavBarProps {
  items: NavItem[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

export function TubelightNavBar({ items, activeTab, onTabChange, className }: TubelightNavBarProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center gap-2 bg-background/40 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.value;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onTabChange(item.value)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition-colors bg-transparent",
                "text-foreground/80 hover:text-primary hover:!bg-transparent active:!bg-transparent focus:!bg-transparent focus-visible:!bg-transparent",
                isActive && "text-primary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-transparent rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/30 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/25 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
