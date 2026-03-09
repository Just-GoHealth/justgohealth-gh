import { useTrial } from "@/contexts/trial.context";
import { TRIAL_PROFILE_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Name from "./Name";
import Age from "./Age";
import Sex from "./Sex";
import Grade from "./Grade";

const Profile = () => {
  const { innerStep, setInnerStep } = useTrial();

  const panels = [
    <Name key={0} setStep={setInnerStep} />,
    <Age key={1} />,
    <Sex key={2} />,
    <Grade key={3} />,
  ];

  const meta = TRIAL_PROFILE_STEPS[innerStep];

  return (
    <div className="w-full h-full flex flex-col">
      <p className="text-xs font-bold tracking-widest uppercase mb-1 text-primary">
        Profile Progress
      </p>
      <div className="flex items-center gap-2.5 mb-1">
        <span className="text-xl text-primary">
          {meta?.icon && <meta.icon size={24} strokeWidth={2.5} />}
        </span>
        <h3 className="text-2xl md:text-3xl font-black leading-tight text-[#1C1917] tracking-tighter">
          {meta?.key}
        </h3>
      </div>
      <p className="text-sm mb-6 text-[#78716C]">{meta?.hint}</p>

      {/* Sub-step dots */}
      <div className="flex gap-1.5 mb-5">
        {TRIAL_PROFILE_STEPS.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === innerStep ? "w-5" : "w-1.5",
              i <= innerStep ? "bg-primary" : "bg-[#E8E4DF]",
            )}
          />
        ))}
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {panels[innerStep]}
      </div>
    </div>
  );
};

export default Profile;
