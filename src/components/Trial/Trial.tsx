import { TrialProvider } from "@/contexts/trial.context";
import { TrialContentProps } from "@/types/trial.interface";
import { TrialContent } from "./trial-content";

export default function Trial({
  setShowTrialModal,
  schools,
}: TrialContentProps) {
  return (
    <TrialProvider>
      <TrialContent setShowTrialModal={setShowTrialModal} schools={schools} />
    </TrialProvider>
  );
}
