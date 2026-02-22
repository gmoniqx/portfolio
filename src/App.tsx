import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SplashLoader } from "@/components/SplashLoader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="route-switch-enter">
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [splashExiting, setSplashExiting] = useState(false);

  useEffect(() => {
    const startExitTimer = window.setTimeout(() => {
      setSplashExiting(true);
    }, 3000);

    const removeSplashTimer = window.setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => {
      window.clearTimeout(startExitTimer);
      window.clearTimeout(removeSplashTimer);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <AnimatedRoutes />
        </BrowserRouter>
        {showSplash && <SplashLoader exiting={splashExiting} />}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
