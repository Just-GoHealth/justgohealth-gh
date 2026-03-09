import { useState, useMemo } from "react";
import { useTrial } from "@/contexts/trial.context";
import { ISchool } from "@/types/school.interface";
import { Check, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { DEFAULT_CAMPUSES } from "@/lib/constants";

const School = ({ schools }: { schools: ISchool[] }) => {
  const { onTrialDataChange, trialData } = useTrial();
  const list = schools?.length ? schools : DEFAULT_CAMPUSES;

  const [selectedType, setSelectedType] = useState<string>("All");

  const types = useMemo(() => {
    return ["All", "SHS", "JHS", "College"];
  }, []);

  const filteredList = useMemo(() => {
    if (selectedType === "All") return list;
    return list.filter((s: any) => s.type === selectedType);
  }, [list, selectedType]);

  const handleSelect = (id: string) => {
    onTrialDataChange("campus", id);
  };

  return (
    <div className="w-full h-full flex flex-col ">
      <div className="flex items-center gap-2 mb-1">
        <MapPin size={14} className="text-[#993399]" />
        <p className="text-xs font-bold tracking-widest uppercase text-primary">
          Your Campus
        </p>
      </div>
      <h3 className="text-2xl font-medium leading-tight mt-2 mb-6 tracking-[-0.02em]">
        Where do you study?
      </h3>

      {types.length > 1 && (
        <div className="flex items-center gap-2 mb-4 overflow-x-auto no-scrollbar pb-1 shrink-0">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap",
                selectedType === type
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted-foreground/10",
              )}
            >
              {type}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 overflow-y-auto pr-1 no-scrollbar">
        {filteredList.length > 0 ? (
          filteredList.map((s) => {
            const selected = trialData.campus === "" + s.id;
            return (
              <button
                key={s.id}
                onClick={() => handleSelect("" + s.id)}
                className={cn(
                  "w-full py-3.5 px-4 rounded-2xl text-left font-semibold text-sm transition-all duration-200 flex items-center justify-between group",
                  selected
                    ? "bg-primary text-white"
                    : " border border-muted text-muted-foreground hover:bg-muted-foreground/5",
                )}
              >
                <span>{s.name}</span>
                {selected && (
                  <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-white" />
                  </span>
                )}
              </button>
            );
          })
        ) : (
          <div className="col-span-2 w-full py-8 px-6 rounded-2xl border border-muted bg-muted/50 text-center">
            <div className="text-muted-foreground text-sm">
              No schools found in this category
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default School;
