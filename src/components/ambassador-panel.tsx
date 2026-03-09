"use client";

import { useAmbassadorPanel } from "@/hooks/use-ambassador-panel";
import { cn } from "@/lib/utils";

export default function AmbassadorPanel() {
  const {
    AMBASSADOR_ACHIEVEMENTS,
    activeIndex,
    animKey,
    barStyle,
    itemStates,
    listRef,
    rowRefs,
  } = useAmbassadorPanel();
  return (
    <div className="w-full">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,#00e67606_0%,transparent_70%),radial-gradient(ellipse_40%_60%_at_80%_20%,#00e67604_0%,transparent_60%)]" />

      {/* Card */}
      <div className="relative w-full overflow-hidden rounded-2xl max-w-2xl pt-10 px-10 pb-8">
        {/* Corner conic accent */}
        <div className="absolute top-0 left-0 pointer-events-none rounded-tl-2xl w-30 h-30 opacity-10 bg-[conic-gradient(from_180deg_at_0%_0%,#00e676_0deg,transparent_80deg)]" />

        {/* Scan line */}
        <div className="ap-scanline" />

        {/* ── Name ── */}
        <div className="relative mb-8">
          <span
            key={`meet-${animKey}`}
            className="ap-meet block text-xs font-bold uppercase mb-1 tracking-[0.35em] text-green-500"
          >
            Meet
          </span>
          <span
            key={`name-${animKey}`}
            className="ap-name block leading-none text-[clamp(2rem,5vw,2.8rem)] tracking-[0.03em] text-[#e8f5ee]"
          >
            Setornam Koku Dedey
          </span>
        </div>

        {/* ── Achievement list ── */}
        <div ref={listRef} className="relative flex flex-col">
          {/* Sliding highlight bar */}
          <div
            className="ap-bar absolute rounded-lg pointer-events-none z-10 -left-4 -right-4 border-l-2 border-l-green-900 transition-[top_0.55s_cubic-bezier(0.65,0,0.35,1),height_0.3s_ease,opacity_0.4s_ease]  bg-success"
            style={{
              top: barStyle.top,
              height: barStyle.height,
              opacity: barStyle.opacity,
            }}
          />

          {/* Rows */}
          {AMBASSADOR_ACHIEVEMENTS.map(({ label, icon: Icon, italic }, i) => {
            const { visible, iconVisible } = itemStates[i];
            const isActive = activeIndex === i;
            const isLast = i === AMBASSADOR_ACHIEVEMENTS.length - 1;

            return (
              <div
                key={i}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className={cn(
                  "group relative flex items-center justify-between z-20 py-[0.78rem] border-b-transparent cursor-default",
                  !isLast ? "border-b" : "",
                  visible ? "ap-row-enter" : "opacity-0 -translate-x-8",
                )}
              >
                {/* Hover glow layer */}
                {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 -left-10 -right-10 bg-[#00e67618]" /> */}

                {/* Label */}
                <span
                  className={cn(
                    "relative text-sm leading-snug transition-colors duration-300 tracking-[0.01em]",
                    isActive ? "text-white" : "text-white/50",
                    italic ? "italic" : "",
                  )}
                >
                  {label}
                </span>

                {/* Icon box */}
                <span
                  className={cn(
                    "relative shrink-0 ml-4 flex items-center justify-center rounded-lg transition-all duration-300 w-8 h-8",
                    iconVisible
                      ? "ap-icon-enter"
                      : "opacity-0 scale-60 -rotate-10",
                    isActive
                      ? "text-white shadow-[0_0_12px_rgba(0,230,118,0.08)]"
                      : "text-[#3d6648] shadow-none",
                  )}
                >
                  <span
                    className={cn(
                      "transition-transform duration-300",
                      isActive ? "scale-112" : "scale-100",
                    )}
                  >
                    <Icon />
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
