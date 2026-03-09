import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Reuse ScoreBadge from original component
const ScoreBadge = ({ value, color }: { value: string; color: string }) => (
  <div className="relative flex items-center justify-center w-18 h-18">
    <div className="absolute inset-0 rounded-full opacity-20 blur-xl transition-all duration-300 group-hover:opacity-40 group-hover:blur-2xl" />
    <div
      className="relative z-10 w-full h-full rounded-full flex items-center justify-center font-black text-lg border-2 bg-white/50 backdrop-blur-sm"
      style={{ borderColor: `${color}40`, color }}
    >
      {value.replace(/\s/g, "")}
    </div>
  </div>
);

interface MetricDetailProps {
  metrics: any[];
  resultIndex: number;
  setResultIndex: (i: number) => void;
}

export const MetricDetail: React.FC<MetricDetailProps> = ({
  metrics,
  resultIndex,
  setResultIndex,
}) => (
  <div className="relative flex flex-col flex-1 min-h-0 px-8 xl:px-14 pt-8 bg-white/70">
    <div className="relative z-10 h-full flex flex-col">
      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-6 border-b border-border w-full max-w-md relative">
          {metrics.map((m, i) => (
            <button
              key={i}
              onClick={() => setResultIndex(i)}
              className={`relative pb-3 text-sm font-bold transition-all duration-300 ${
                i === resultIndex
                  ? "text-foreground"
                  : "text-muted-foreground hover:-translate-y-0.5"
              }`}
            >
              {m.name}
              {i === resultIndex && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute -bottom-px left-0 right-0 h-0.5 rounded-t-full z-10"
                  style={{ backgroundColor: m.color }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {[
            {
              disabled: resultIndex === 0,
              onClick: () => setResultIndex(resultIndex - 1),
              icon: ChevronLeft,
            },
            {
              disabled: resultIndex >= metrics.length - 1,
              onClick: () => setResultIndex(resultIndex + 1),
              icon: ChevronRight,
            },
          ].map((btn, i) => (
            <button
              key={i}
              disabled={btn.disabled}
              onClick={btn.onClick}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all border disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:bg-gray-50 hover:enabled:shadow-sm active:scale-95"
              style={{
                backgroundColor: btn.disabled ? "#F5F2EE" : "#FFFFFF",
                borderColor: "#E8E4DF",
                color: btn.disabled ? "#C4BDB6" : "#44403C",
              }}
            >
              <btn.icon size={16} strokeWidth={2.5} />
            </button>
          ))}
        </div>
      </div>

      {/* Active Category Header */}
      <AnimatePresence mode="wait">
        <motion.div
          key={resultIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <h2 className="text-2xl font-black">
            {metrics[resultIndex].name} Breakdowns
          </h2>
          <span
            className="text-xs font-extrabold rounded-full px-3 py-1 border shadow-sm"
            style={{
              backgroundColor: `${metrics[resultIndex].color}10`,
              borderColor: `${metrics[resultIndex].color}20`,
              color: metrics[resultIndex].color,
            }}
          >
            Overall: {metrics[resultIndex].score}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Sliding Cards Container */}
      <div className="flex-1 overflow-hidden pb-8 relative mask-image-fade">
        <motion.div
          className="flex h-full"
          animate={{ x: `-${resultIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 250, damping: 30 }}
        >
          {metrics.map((metric, mi) => (
            <div
              key={mi}
              className="min-w-full flex gap-5 h-full shrink-0 px-1 py-1"
            >
              {metric.items.map((item: any, ii: number) => (
                <motion.div
                  key={ii}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * ii, duration: 0.4 }}
                  className="group flex-1 rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden bg-white/70 backdrop-blur-md border border-[#F0EDE8]/50 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500"
                >
                  <div
                    className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150"
                    style={{
                      opacity: 0.03,
                      filter: "blur(32px)",
                    }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 shadow-sm"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                      }}
                    >
                      <item.icon size={20} strokeWidth={2.5} />
                    </div>
                    <p className="text-[11px] font-black tracking-widest uppercase mb-2 text-[#A8A29E]">
                      {item.name}
                    </p>
                    <p className="text-[15px] leading-relaxed text-[#78716C] font-semibold tracking-tight">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-end justify-between mt-8 relative z-10">
                    <ScoreBadge value={item.value} color={item.color} />
                    <div className="text-right">
                      <span
                        className="text-[10px] font-black tracking-widest uppercase block mb-1 opacity-40"
                        style={{ color: item.color }}
                      >
                        Score
                      </span>
                      <span
                        className="text-lg font-black"
                        style={{ color: item.color }}
                      >
                        {item.value}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
);

export default MetricDetail;
