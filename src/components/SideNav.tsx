import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StepData } from '../types';
import { cn } from '../lib/utils';

interface SideNavProps {
  steps: StepData[];
  activeScenarioId: string;
}

const SideNav: React.FC<SideNavProps> = ({ steps, activeScenarioId }) => {
  // 侧边导航组件：显示当前场景的所有步骤索引，支持点击跳转
  const [activeStepId, setActiveStepId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.find(e => e.isIntersecting);
        if (intersecting) {
          const id = parseInt(intersecting.target.id.replace('step-', ''));
          setActiveStepId(id);
        }
      },
      { threshold: 0.5, rootMargin: '-10% 0px -40% 0px' }
    );

    steps.forEach((step) => {
      const el = document.getElementById(`step-${step.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [steps, activeScenarioId]);

  const scrollToStep = (id: number) => {
    const el = document.getElementById(`step-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center gap-4">
      <div className="flex flex-col gap-6 relative">
        {steps.map((step, index) => {
          const isActive = activeStepId === step.id;
          
          return (
            <button
              key={`${activeScenarioId}-${step.id}`}
              onClick={() => scrollToStep(step.id)}
              className="group relative flex items-center w-48 h-8 transition-all duration-300"
            >
              {/* Step Label (Always Visible) */}
              <div className={cn(
                "absolute left-10 px-2 py-1 rounded transition-all duration-300 font-mono text-[10px] whitespace-nowrap border",
                isActive 
                  ? "bg-[rgba(15,23,42,0.8)] border-[#1e293b] text-white shadow-[0_0_10px_rgba(0,0,0,0.5)] translate-x-1" 
                  : "bg-transparent border-transparent text-[#475569] group-hover:text-[#94a3b8] group-hover:translate-x-1"
              )}>
                {step.t}
              </div>

              {/* Node Container */}
              <div className="flex items-center justify-center w-8 h-8 shrink-0">
                {/* Node */}
                <div
                  className={cn(
                    "relative z-10 w-2 h-2 rounded-full transition-all duration-500",
                    isActive 
                      ? "scale-150 shadow-[0_0_10px_currentColor]" 
                      : "bg-[#1e293b] group-hover:bg-[#334155]"
                  )}
                  style={{ 
                    backgroundColor: isActive ? step.c : undefined,
                    color: step.c 
                  }}
                />
              </div>

              {/* Step Number (Subtle) */}
              <span className={cn(
                "absolute -left-6 text-[9px] font-mono transition-colors duration-300",
                isActive ? "text-white opacity-100" : "text-[#334155] opacity-40 group-hover:opacity-70"
              )}>
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Active Indicator Ring */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="active-ring"
                    className="absolute inset-0 rounded-full border border-current opacity-20"
                    style={{ color: step.c }}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 0.2 }}
                    exit={{ scale: 1.5, opacity: 0 }}
                  />
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
